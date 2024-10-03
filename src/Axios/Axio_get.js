import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axio_demo() {
    const[userData, setdata]= useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resposne)=>{
            console.log(resposne);
            setdata(resposne.data)
        })
    },[])
  return (
   <>
    {userData.map((data)=>{
        return(
            <div key={data.id}>
                {data.name}
            </div>
        )
    })}
   
   </>
  )
}

export default Axio_demo