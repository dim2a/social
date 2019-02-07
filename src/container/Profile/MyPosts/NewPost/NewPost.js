import React from 'react'
import classes from './NewPost.css'

const NewPost = props => {
    
    const newPostElement = React.createRef()
    
    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.NewPost}>
            <div>
                <textarea ref={newPostElement} 
                value={props.newPostText} 
                onChange={onPostChange} />
            </div>            
            <button onClick={addPost}>AddPost</button>
        </div>
    )
}

export default NewPost