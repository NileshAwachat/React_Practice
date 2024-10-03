import React, { useState } from 'react'

function Use_state() {

    const [count,setcount] = useState(0);




  return (
    <>
    <div>usestate</div>
    <h1>{count} Times</h1>
    <button onClick={() => setcount(count + 1)}>+</button>
    <button onClick={() => setcount(count - 1)}>-</button>
    <button onClick={() => setcount(0)}>#</button>
    </>
  )
}

export default Use_state