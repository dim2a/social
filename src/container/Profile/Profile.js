import React from 'react'
import classes from './Profile.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={classes.profile}>
          <div>
            <img src='https://cdn.pixabay.com/photo/2017/03/05/00/23/san-2117290__340.jpg' alt=''/>
          </div>
          <div className={classes.content}>
            <div>
              ava + description
            </div>
            <MyPosts />
          </div>
        </div>
    )
}

export default Profile
