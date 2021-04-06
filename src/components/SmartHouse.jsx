import React from 'react'
import { Link } from 'react-router-dom'


export default function SmartHouse(props) {
    return (
    <div className="homepage">
    <div className="SmartMap">
    {props.Nroom.map((room)=>{
        return(
        <Link to = {`/${room.name}room`}>
        <button className='botRoom' style={{backgroundColor : room.color}}>
        <p>{room.name}<br/>{room.type}</p> 
        </button></Link>
        )
    })}

    <br/>
    <br/>
    </div>
    <Link to="/AddAroom"><button>+</button></Link>
    </div>
    )
}
