import React, { useEffect, useState } from 'react'

export const EffectChallenge = ()=>{

    const [count,setcount]=useState(0);
    const [name,setname]=useState('');

    useEffect(()=>{
      document.title = `count:${count}`
    },[count])

    useEffect(()=>{
      console.log(name)

    },[name])
  return (
    <div>
        <h1>useEffect</h1>
        <p>
            count:<span>{count}</span>
            <button onClick={()=>setcount(count+1)}>+</button>
        </p>
        <p>
            name:<span>{name}</span>
        </p>
        <input type='text'
        value={name}
        onChange={(e)=>setname(e.target.value)}
        />
    </div>
  )
}

export default EffectChallenge