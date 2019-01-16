import React from 'react'
import classes from './Header.css'

const Header = () => {
    return(
        <header className={classes.header}>
          <img src='https://wiki.videolan.org/images/Ubuntu-logo.png' alt='logo' />
        </header>
    )
}

export default Header