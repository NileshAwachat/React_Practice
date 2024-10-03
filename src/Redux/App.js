import React from 'react'
import {increment,decrement} from './CounterSlice'
import { useDispatch,useSelector } from 'react-redux'
 
function App() {



    const mycount = useSelector((state)=>state.counter.count);

    const dispatch = useDispatch();

  return (
    <div>
        <h1>{mycount}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>

    </div>
  )
}

export default App