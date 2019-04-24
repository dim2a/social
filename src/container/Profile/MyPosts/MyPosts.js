import React from 'react'
import classes from './MyPosts.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = props => {
    return (
        <div className={classes.MyPosts}>
            <h3>
                My posts
            </h3>
            <NewPost dispatch={props.dispatch} 
            newPostText={props.profilePage.newPostText}/>            
            {props.profilePage.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)}
        </div>
    )    
}

export default MyPosts