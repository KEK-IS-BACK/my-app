import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App store={store}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)