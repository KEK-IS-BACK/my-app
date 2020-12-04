import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";
import initialReducer from "./initial-reduce";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer,
  initial: initialReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default  store
window.store = store