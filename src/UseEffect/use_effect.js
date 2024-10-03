import React, { useEffect, useState } from 'react'

function Use_state() {

    const [count,setcount] = useState(0);
    const [name, setname] = useState("");
    useEffect(()=>{
      // console.log("value time is updated");
      alert("value time is updated")
      
    },[name])

  return (
    <>
    <div>usestate</div>
    <h1>{count} Times</h1>
    <button onClick={() => setcount(count + 1)}>+</button>
    <button onClick={() => setcount(count - 1)}>-</button>
    <button onClick={() => setcount(0)}>#</button>
    <h1>{name}</h1>
    <button onClick={() => setname("nilesh")}>click to give name</button>
    </>
  )
}

export default Use_state