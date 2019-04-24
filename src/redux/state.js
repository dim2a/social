const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'


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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.payload.newText
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: this._state.messagesPage.messagesData.length+1,
                message: this._state.messagesPage.newMessageText
            }
            this._state.messagesPage.messagesData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
    }

}

export const addPostActionCreator = () => {   
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {    
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

export const updateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        payload: {
            newText: text
        }
    }
}
export const sendMessageCreator = () => {   
    return {
        type: SEND_MESSAGE
    }
}

window.store = store
export default store