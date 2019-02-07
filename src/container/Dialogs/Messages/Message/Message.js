import React from 'react'
import classes from './Message.css'

const Message = props => {
    return (
        <div className={classes.Message}>
            <div className={classes.message}>
                {props.message}
            </div>            
        </div>
    )
}

export default Message