import { useState } from 'react';
import './App.css';
import axios from "axios"
import Card from './Card';

function App() {
  const [Name,setName]=useState("")
  const [name,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [flag,setFlag]=useState(false);
  const [indicate,setIndicat]=useState(true)

    const handlesubmit=async()=>{
      setFlag(false)
      setIndicat(true)
      setUserName(""); 
          setEmail("")
      var inic=true;
      var data=await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(data.data)
      data.data.map((obj,idx)=>{
        if(obj.name===Name){
          setUserName(obj.username); 
          setEmail(obj.email)
        setFlag(true)
        inic=false;
        }
       
      });
      if (inic){
        setIndicat(false)
      }
    }

  return (
    <div className="App">
      <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={handlesubmit}>search</button>
      {flag && indicate? <div><h1>{name}</h1>
      <h1>{email}</h1></div>: indicate?<></>:<h1>No data found</h1>}
     
      
    </div>
  );
}

export default App;

