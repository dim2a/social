import React from 'react'
import classes from './Dialogs.css'
// import {NavLink} from 'react-router-dom'
import Dialog from './Dialog/Dialog'
import Message from './Messages/Message/Message'

const Dialogs = () => {

    const dialogsData = [
        { id: 1, name: 'Fedor' },
        { id: 2, name: 'Petya' },
        { id: 3, name: 'Viktor' },
        { id: 4, name: 'John' },
        { id: 5, name: 'Dima' }
    ]

    const messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are You?' },
        { id: 3, message: 'All gut!' },
        { id: 4, message: 'Ok.' }
    ]

    // let dialogsElements = dialogsData
    //     .map(dialog => <Dialog name = {dialog.name} id = {dialog.id} />)    
    
    // let messagesElements = messagesData
    //     .map(message => <Message message={message.message} />)

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogs}>
                {
                    dialogsData.map(d => <Dialog name = {d.name} id = {d.id} />) 
                }
            </div>
            <div className={classes.messages}>
                {
                    messagesData.map(m => <Message message={m.message} />)
                }
            </div>
        </div>
    )
}

export default Dialogs