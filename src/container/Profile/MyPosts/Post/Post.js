import React from 'react'
import classes from './Post.css'

const Post = props => {
    return (
        <div className={classes.Post}>
            <img src='http://www.luljettas.com/images/avatar/img-6.jpg' alt='avatar' />
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post