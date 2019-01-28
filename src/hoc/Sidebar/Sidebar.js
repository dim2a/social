import React from 'react'
import classes from './Sidebar.css'

const Sidebar = props => {
    return (
        <div className={classes.Sidebar}>
            {props.children}
        </div>
    )
}

export default Sidebar