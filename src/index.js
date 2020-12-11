import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import "./index.css"
import {HashRouter} from "react-router-dom";
import {initializeApp} from "./redux/initial-reduce";


let rerenderEntireTree = () => {
  initializeApp()
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App store={store}/>
        </Provider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)