import React, { useState } from 'react'
import axios from 'axios'

function Axios_delet() {
  const data = {fname : "", lname : "" };
  const [inputData, setInputdata] = useState(data)

  const handleData = (e) =>{
    setInputdata({...inputData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",inputData)
    .then((res)=>{
        console.log(res);
        
      })
  }
  const handleUpdate = (e)=>{
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
    .then((res)=>{
        console.log(res);
        
      })
  }

  const handleDelet = (e)=>{
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then((res)=>{
        console.log(res);
        
      })
  }
  
  return (
    <>
        <label>First Name : </label>
        <input type ="text" name="fname" value={inputData.fname} onChange={handleData}></input><br/>
        <label>Last Name : </label>
        <input type ="text" name="lname" value={inputData.lname} onChange={handleData}></input><br/>
        
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelet}>Delete</button>
    </>
  )
}

export default Axios_delet