import React from 'react'
import classes from './Profile.css'
import MyPosts from './MyPosts/MyPosts';
import AboutMe from './AboutMe/AboutMe'

const Profile = props => {
  
  return (
    <div className={classes.profile}>
      <AboutMe />
      <MyPosts profilePage={props.profilePage} 
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}/>         
    </div>
    )
}

export default Profile
