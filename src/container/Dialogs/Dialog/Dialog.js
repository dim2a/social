import React from 'react'
import classes from './Dialog.css'
import {NavLink} from 'react-router-dom'

const Dialog = props => {
    return (
        <div className={classes.Dialog}>
                    <NavLink 
                        to={`/dialogs/${props.id}`} 
                        activeClassName={classes.active}>
                            {props.name}
                    </NavLink>
                </div>
    )
}

export default Dialog