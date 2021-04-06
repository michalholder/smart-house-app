import React ,{useState} from 'react';
import {Link} from 'react-router-dom'


export default function AddAroom(props) {

    const [NameRoom,setNameRoom] = useState ('');
    const [drd_el,setdrd_el] = useState ('');
    const [color,setcolor] = useState('');
    
        
    
    return (
        <div className='AddRoom'>
            <br/><br/>
            <label htmlFor ="rooms"> Choose a new room : </label>
            <select id="room" defaultValue = {"Choose a new room..."} onChange={(element)=>{setdrd_el(element.target.value)}} name="room">
            <option value="Choose a new room..." disabled> Choose a new room...</option>
            <option value="Bedroom" >Bedroom</option>
            <option value="Bathroom">Bathroom</option>
            <option value="kitchen">kitchen</option>
            <option value="Guest Room">Guest Room</option>
            </select><br/>
            <label htmlFor ="nameroom"> Write the name of the room here :  </label>
            <input onChange={(element)=>{setNameRoom(element.target.value)}} placeholder='The name of the room' type='text'></input><br/>
            <label htmlFor ="favcolor">Select your favorite color :  </label>
            <input onChange={(element)=>{setcolor(element.target.value)}} placeholder='The color of the room' type='color'></input><br/>
            <br/>
            <Link to ='./'><button type='submit' onClick={()=>{props.addaRoom(NameRoom,drd_el,color)}}>Create the room</button></Link>
        </div>
    )
}

