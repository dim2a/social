import React from 'react'
import classes from './NewPost.css'

const NewPost = () => {
    return (
        <div className={classes.NewPost}>
            <div>
                <textarea></textarea>
            </div>
            <button>AddPost</button>
        </div>
    )
}

export default NewPost