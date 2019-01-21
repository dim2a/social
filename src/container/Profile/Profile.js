import React from 'react'
import classes from './Profile.css'
import MyPosts from './MyPosts/MyPosts';
import AboutMe from './AboutMe/AboutMe'

const Profile = () => {
  return (
    <div className={classes.profile}>
      <AboutMe />
      <MyPosts />         
    </div>
    )
}

export default Profile
