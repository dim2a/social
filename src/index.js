import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 7}
]

const dialogsData = [
    { id: 1, name: 'Fedor' },
    { id: 2, name: 'Petya' },
    { id: 3, name: 'Viktor' },
    { id: 4, name: 'John' },
    { id: 5, name: 'Dima' }
]

const messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are You?' },
    { id: 3, message: 'All gut!' },
    { id: 4, message: 'Ok.' }
]

const app = (
    <BrowserRouter>
        <App posts ={postData} dialogs={dialogsData} messages={messagesData}/>        
    </BrowserRouter>    
)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
