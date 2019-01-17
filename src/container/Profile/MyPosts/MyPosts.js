import React from 'react'
import classes from './MyPosts.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={classes.MyPosts}>
            My posts
            <NewPost />
            <Post message='Hi, how are you?'/>
            <Post message="It's my first post"/>
        </div>
    )    
}

export default MyPosts