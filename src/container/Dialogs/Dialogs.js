import React from 'react'
import classes from './Dialogs.css'
import Dialog from './Dialog/Dialog'
import Message from './Messages/Message/Message'

const Dialogs = props => {

    const newMessage = React.createRef()
    
    const addMessageHandler = () => {
        alert(newMessage.current.value)
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsItems}>
                {
                    props.data.dialogsData.map(d => <Dialog name = {d.name} id = {d.id} />) 
                }
            </div>
            <div className={classes.messages}>
                {
                    props.data.messagesData.map(m => <Message message={m.message} />)
                }
            <div>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessageHandler}>Add Message</button>
                </div>                
                </div>
            </div>
        </div>
    )
}

export default Dialogs