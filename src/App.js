import React, {useEffect} from 'react'
import {Route} from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfilContainer";
import {connect} from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/initial-reduce";
import Footer from "./components/Footer/Footer";
import {getIsAuth} from "./redux/selectors";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";

const App = ({initializeApp, isAppInitialized, isAuth}) => {

  useEffect(() => {
    initializeApp()
  }, [])

  if (!isAppInitialized) return <Preloader/>

  return (
    <div className="app">
      <Header className='app__header'/>
      <div className="app__content">
        <div className="app__body">
          <Sidebar/>
          <main className='app__main'>
            <Route exact path='/' component={!isAuth ? Login : ProfileContainer}/>
            <Route path='/login' component={Login}/>
            <Route path='/profile/:userId?' component={ProfileContainer}/>
            <Route path='/dialogs' component={DialogsContainer}/>
            <Route path='/users' component={UsersContainer}/>
            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
          </main>
        </div>
      </div>
      <Footer className='app__footer'/>
    </div>
  );
}

const mapStateToProps = state => ({
  isAppInitialized: state.initial.isAppInitialized,
  isAuth: getIsAuth(state)
})


export default connect(mapStateToProps, {initializeApp})(App)

