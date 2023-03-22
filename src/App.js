
import './App.css';
import { useState } from 'react';

const App =() => {

 //let str = "hello "

 const [person, setPerson]  = useState([
  {
    name : "name",
    last : "last"
  },
  {
    name : "name2",

    last : "last2"
  }
 ])

 
 const [infos, setInfos] = useState({
  name : "",
  last : ""
 })

 console.log(infos)

 const AddPerson = () =>{

  setPerson([...person, infos ])

 }

  return (
    <div className="App">
      
      <div>
        <input type="text" placeholder='name'  onChange={(e)=> setInfos({...infos, name: e.target.value })}/>
        <input type="text" placeholder='last' onChange={(e)=> setInfos({...infos, last: e.target.value })}/>
        <button onClick={()=> AddPerson()}>Add</button>
      </div>
     
      {
        person.map(item => (
          <div>
            <h1>{item.name + " " + item.last}</h1>
            </div>
        ))
      }
     
    </div>
  );
}

export default App;

