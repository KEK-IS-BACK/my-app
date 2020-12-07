import React from 'react'
import {Route, Switch} from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfilContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {authMe} from "./redux/auth-reducer";
import Preloader from "./components/common/Preloader";
import {initializeApp} from "./redux/initial-reduce";
import Footer from "./components/Footer/Footer";
import {getIsAuth} from "./redux/selectors";


class App extends React.Component {
  componentDidMount() {
    if (!this.props.isAppInitialized) {
      this.props.initializeApp()
    }
  }

  render() {

    if (!this.props.isAppInitialized) return <Preloader/>

    return (
        <div className="app">
          <HeaderContainer className='app__header'/>
          <div className="app__content">
            <Switch>
              <Route path='/login' render={() => <LoginContainer/>}/>
              <div className="app__body">
                <Sidebar sidebar={this.props.store.getState().sidebar}/>
                <main className='app__main'>
                  <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                  <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                  <Route path='/users' render={() => <UsersContainer/>}/>
                  <Route path='/music' render={() => <Music/>}/>
                  <Route path='/news' render={() => <News/>}/>
                  <Route path='/settings' render={() => <Settings/>}/>
                </main>
              </div>
            </Switch>
          </div>
          <Footer className='app__footer'/>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  isAppInitialized: state.initial.isAppInitialized,
  isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {authMe, initializeApp})(App);
