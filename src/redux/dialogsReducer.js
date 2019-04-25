const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.payload.newText
            return state
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messagesData.length+1,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        default: return state
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

export default dialogsReducer