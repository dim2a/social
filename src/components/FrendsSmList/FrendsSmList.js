import React from 'react'
import classes from './FrendsSmList.css'

const FrendsSmList = props => {
    let myFrends = props.frends.frendsData.map((f) => {
        return(<div className={classes.ico}><img src={f.photo} alt='avatar' /><br/><p>{f.name}</p></div>) 
    })
    return(
        <div className={classes.FrendsSmList}>
            <h4>Frends online:</h4>
            <div className={classes.wrapper}>
                {myFrends}
            </div>
        </div>
    )
}

export default FrendsSmList