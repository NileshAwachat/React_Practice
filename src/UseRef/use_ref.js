import React, { useRef, useState } from 'react'

function Use_ref() {
  const [name,setname] = useState(" ")
  const refelement = useRef('');
  console.log(refelement);
  

  return (
    <>
    <input ref = {refelement} type='text' value={name} onChange={(e)=>setname(e.target.value)}></input>
    <button onClick={()=>{setname(" "); refelement.current.focus();}}>Reset</button>
    <button onClick={()=>refelement.current.style.color = "green"}>Change color</button>
    </>
  )
}

export default Use_ref