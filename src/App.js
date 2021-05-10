import logo from './logo.svg';
import './App.css';
import{HashaRouter as Router,Switch , Route, Link} from 'react-router-dom';
import Tittel from './components/Tittel';
import SmartHouse from './components/SmartHouse';
import AddAroom from './components/AddAroom';
import Room from './components/Room';
import { useState } from 'react';

export default  function App() {

  const [addaroom, setaddaroom] = useState ([]);

  

  const AddRoom =(Nname,Ntype,Ncolor)=>{ 
    if(Nname.length >=1 && Nname.length <=5 && Ntype.length >1){
    let NewAddaroom = [...addaroom,{name:Nname,type:Ntype,color:Ncolor,products:[]}]
    setaddaroom(NewAddaroom)
    }else{
      alert('error');
    } 
  }

  const NewAdd = (product,NewIndex)=>{
    if (product === '') {
      alert('you need to choose a product')
      return
    }
    let NewArray=[...addaroom];
    if(addaroom[NewIndex].products.length >= 5 ){
      alert('error')
    }else{
      if (product == 'Boiler') {
        if (addaroom[NewIndex].type == 'Bathroom'){
          NewArray[NewIndex].products.push({type:product, condition: false});
          setaddaroom( NewArray);  
        }else{
          alert('error');
        }
        
      }else if (product == 'Stereo system'){
          let New = addaroom[NewIndex].products.filter((item)=>{
            if (item.type == 'Stereo system') {
              return(
                item 
              )    
            }
          
          })
          if (New.length == 0 ) {
            NewArray[NewIndex].products.push({type:product, condition: false});
            setaddaroom( NewArray);
          }else{
            alert('error')
          }
      }else if (product != 'Stereo system' && product != 'Boiler') {
        NewArray[NewIndex].products.push({type:product, condition: false});
        setaddaroom( NewArray);
      }
      
    }
  }

  const changeColors =(i,index)=>{
    let NewArray=[...addaroom];
    NewArray[index].products[i].condition = !NewArray[index].products[i].condition;
    setaddaroom(NewArray);
  }

  return (
    <div className='App'>
      <Router>
        <Tittel/>
        <Switch>
          <Route exact path='/' component={()=><SmartHouse Nroom={addaroom}/>}/>
          <Route exact path='/AddAroom' component={()=><AddAroom addaRoom={AddRoom} />}/>
          {addaroom.map((element,i)=>{
            return(
              <Route  exact path = {`/${element.name}room`} key = {element.name}  component={()=><Room name={element.name} index={i}
              addaroom={addaroom} NewAdd={NewAdd} type={element.type} changeColors={changeColors}/>}/>
            )
            
          })}
          
        </Switch>
      </Router> 
      
    </div>
  )
}
