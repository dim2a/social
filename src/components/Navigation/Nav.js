import React from 'react'
import classes from './Nav.css'
import {NavLink} from 'react-router-dom'
import Sidebar from '../../hoc/Sidebar/Sidebar'
import FrendsSmList from '../FrendsSmList/FrendsSmList'

const Nav = props => {
  return (
    <nav className={classes.nav}>
      <div className={classes.link}>
        <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
      </div>
      <div className={classes.link}>
        <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
      </div>
      <div className={classes.link}>
        <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
      </div>
      <div className={classes.link}>
        <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
      </div>
      <div className={classes.link}>
        <NavLink to='/frends' activeClassName={classes.active}>Frends</NavLink>
      </div>
      <div className={`${classes.link} ${classes.settings}`}>
        <NavLink to='/settings' activeClassName={classes.active}>Settings</NavLink>
      </div>

      <Sidebar>
        <FrendsSmList frends={props.frends}/>
      </Sidebar>
    </nav>
  )
}

export default Nav