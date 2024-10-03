import React, { useEffect, useState } from 'react'

function que2() {
    
const [set,setcount] = useState([]);

useEffect(()=>{
    let num = 100;
    let temp = [];

    for (let index = 1; index < num; index++) {
        if (index % 2 !== 0) {
            temp.push(index);
        }
        
    }
    setcount(temp);
},[])
  return (
    <>
    <ul>
    {set.map((val)=>(
        <li key={val}>{val}</li>
    ))}
    </ul>
    </>
  )
}

export default que2