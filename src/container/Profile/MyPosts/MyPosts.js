import React from 'react'
import classes from './MyPosts.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 7}
    ]

    return (
        <div className={classes.MyPosts}>
            <h3>
                My posts
            </h3>
            <NewPost />
            {postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
            {/* <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/> */}
        </div>
    )    
}

export default MyPosts