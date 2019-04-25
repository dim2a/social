import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: "It's my first post", likesCount: 7 }
            ],
            newPostText: 'Hello, React Lesson!'
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Fedor' },
                { id: 2, name: 'Petya' },
                { id: 3, name: 'Viktor' },
                { id: 4, name: 'John' },
                { id: 5, name: 'Dima' }
            ],
            messagesData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are You?' },
                { id: 3, message: 'All gut!' },
                { id: 4, message: 'Ok.' }
            ],
            newMessageText: ''
        },
        sidebar: {
            frendsData: [
                { id: 1, name: 'Fedor', photo: 'http://www.luljettas.com/images/avatar/img-6.jpg' },
                { id: 2, name: 'Petya', photo: 'http://www.luljettas.com/images/avatar/img-6.jpg' },
                { id: 3, name: 'Viktor', photo: 'http://www.luljettas.com/images/avatar/img-6.jpg' }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
  

    dispatch(action) {

        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.messagesPage, action)
        sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

        
    }

}

window.store = store
export default store