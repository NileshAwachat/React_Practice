import React, { useCallback, useState } from 'react'
import ChildA from './ChildA'

function Usecallback() {
    const [Add,setAdd] = useState(0);

    const [count,setcount] = useState(0)
    const Learning = useCallback(()=>{
        // some operation
    },[])

    return (
    <>

    <div className='p-60'>
    <h1 className='text-4xl mt-6'>Learning useCallback</h1>
    <h1 className='mt-6 text-3xl '>{Add}</h1>

    <ChildA  Learning = {Learning} count={count}/>
    <button className = 'bg-blue-500 text-white font-bold py-2 px-4 rounded mt-6'onClick={()=>setAdd(Add+1)}>Addition</button>
        <h1 className='mt-6 text-3xl '>{count}</h1>
    <button className = 'bg-blue-500 text-white font-bold py-2 px-4 rounded mt-6' onClick={()=>setcount(count+2)}>count</button>

    </div>
    </>
  )
}

export default Usecallback