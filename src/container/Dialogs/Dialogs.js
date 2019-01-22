import React from 'react'
import classes from './Dialogs.css'
import Dialog from './Dialog/Dialog'
import Message from './Messages/Message/Message'

const Dialogs = props => {

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs}>
                {
                    props.dialogsData.map(d => <Dialog name = {d.name} id = {d.id} />) 
                }
            </div>
            <div className={classes.messages}>
                {
                    props.messagesData.map(m => <Message message={m.message} />)
                }
            </div>
        </div>
    )
}

export default Dialogs