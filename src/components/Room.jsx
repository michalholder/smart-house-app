import React ,{useState} from 'react';


export default function Room(props) {

    const [Product,setproduct] = useState('')
    const [Open,setOpen] = useState(false);
    
    
    return (
        < div className ='AppRoom'>
            <p>name room : {props.name}</p>
            <p>type room : {props.type}</p><br/>
            <div className='MapRoom'>
            {props.addaroom[props.index].products.map((item,i)=>{
                
                return(
                    <button className={item.condition ?'RoomProductGreen': 'RoomProductRed'} key={item.product} onClick={()=>{props.changeColors(i,props.index)}}>{item.type}</button>
                    
                )
                

            
            })}
            </div>
   
            <br/>
            <br/>
            
            <button  type='submit'onClick ={()=>setOpen(!Open)}>Add a product</button><br/>
            {Open ? (
                <div id="product">
                <label> Choose a new product : </label>
                <select defaultValue = {"Choose a new product..."} onChange={(element)=>{setproduct(element.target.value)}} name="Np" >
                <option value=""> Choose a product...</option>
                <option value="Air-Conditioner">Air-Conditioner</option>
                <option value="Boiler">Boiler</option>
                <option value="Stereo system">Stereo system</option>
                <option value="Lamp">Lamp</option>
                </select><br/>
                <br/>
                <button className="Add" onClick={()=>{props.NewAdd(Product,props.index)}}>Add</button>
                <br/>
                </div>
            ): null
            }
        </div>
    )
}
