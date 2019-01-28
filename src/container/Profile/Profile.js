import React from 'react'
import classes from './Profile.css'
import MyPosts from './MyPosts/MyPosts';
import AboutMe from './AboutMe/AboutMe'

const Profile = props => {
  
  return (
    <div className={classes.profile}>
      <AboutMe />
      <MyPosts postData={props.postData}/>         
    </div>
    )
}

export default Profile
