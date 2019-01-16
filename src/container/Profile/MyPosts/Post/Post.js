import React from 'react'
import classes from './Post.css'

const Post = () => {
    return (
        <div className={classes.Post}>
            <img src='http://www.luljettas.com/images/avatar/img-6.jpg' alt='avatar' />
            Post
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post