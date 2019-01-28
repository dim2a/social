import React from 'react'
import classes from './Frends.css'

const Frends = props => {
    let myFrends = props.frends.frendsData.map((f) => {
        return(<div className={classes.ico}><img src={f.photo} alt='avatar' /><br/><p>{f.name}</p></div>) 
    })
    return (
        <div className={classes.Frends}>
            Frends
            {myFrends}
        </div>
    )
}

export default Frends