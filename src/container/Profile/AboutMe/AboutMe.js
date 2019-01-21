import React from 'react'
import classes from './AboutMe.css'

const AboutMe = () => {
    return (
        <div className={classes.AboutMe}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2017/03/05/00/23/san-2117290__340.jpg' alt=''/>
            </div>
            <div className={classes.person}>
                ava + description
            </div>
        </div>
    )
}

export default AboutMe