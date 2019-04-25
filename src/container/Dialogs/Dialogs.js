import React from 'react'
import classes from './Dialogs.css'
import Dialog from './Dialog/Dialog'
import Message from './Messages/Message/Message'
import {
    sendMessageCreator,
    updateNewMessageTextCreator
} from '../../redux/dialogsReducer'

const Dialogs = props => {

    let dialogItems = props.data.dialogsData.map(d => <Dialog name = {d.name} id = {d.id} />) 
    let messageItems = props.data.messagesData.map(m => <Message message={m.message} />)
    let newMessageText = props.data.newMessageText
    
    const onNewMessageChange = (e) => {
        let action = updateNewMessageTextCreator(e.target.value)
        props.dispatch(action)
    }

    const sendMessageHandler = () => {
        let action = sendMessageCreator()
        props.dispatch(action)
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogItems
                }
            </div>
            <div className={classes.messages}>
                {
                    messageItems
                }
            <div>
                <div>
                    <textarea value={newMessageText} 
                        placeholder='Enter your message' 
                        onChange={onNewMessageChange}>
                    </textarea>
                </div>
                <div>
                    <button onClick={sendMessageHandler}>Send Message</button>
                </div>                
                </div>
            </div>
        </div>
    )
}

export default Dialogs