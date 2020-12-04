import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, modi!',
          likeCount: 10
        }, {
          id: 2,
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. ' +
            'Fugiat molestiae quia provident animi, sapiente iure.',
          likeCount: 15
        }, {
          id: 3,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ' +
            'Nemo sint est illo corrupti deserunt numquam dignissimos minus consequuntur eveniet doloremque.',
          likeCount: 20
        }
      ],
      newPostText: ''
    },
    messagesPage: {
      chats: [
        {id: 1, name: 'Artem'},
        {id: 2, name: 'Lisa'},
        {id: 3, name: 'Ivan'},
        {id: 4, name: 'Oleg'},
        {id: 5, name: 'Dima'}
      ],
      messages: [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'Are you here?'},
        {id: 4, text: 'Yes'},
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'}
      ]
    }
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.messagesPage, action)
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber()
  },
  _callSubscriber: undefined,
  subscribe(observer) {
    this._callSubscriber = observer
  },

}


export default store
window.store = store