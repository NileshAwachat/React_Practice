import React, { useState } from 'react'

function DisplayName() {

    const [name,setname] = useState('')

    function handlechange (e){
        setname(e.target.value)
    }

    
  return (
    <div>
        <input type="text" value={name} onChange={handlechange}></input>
        <p>name is {name}</p>
    </div>
  )
}

export default DisplayName