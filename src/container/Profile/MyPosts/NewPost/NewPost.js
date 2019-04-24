import React from 'react'
import classes from './NewPost.css'
import { 
    addPostActionCreator, 
    updateNewPostTextActionCreator } 
    from '../../../../redux/state';


const NewPost = props => {
    
    const newPostElement = React.createRef()
    
    const addPost = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }

    const onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
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