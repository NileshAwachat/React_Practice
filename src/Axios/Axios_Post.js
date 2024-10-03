import React, { useState } from 'react'
import axios from 'axios'

function Axios_Post() {
  const data = {fname : "", lname : "" };
  const [inputData, setInputdata] = useState(data)

  const handleData = (e) =>{
    setInputdata({...inputData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault(); //prevent page refresh on form submit
    axios.post("https://jsonplaceholder.typicode.com/users",inputData)
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
    </>
  )
}

export default Axios_Post