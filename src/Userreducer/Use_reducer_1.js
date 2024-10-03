import React, { useReducer } from 'react'

const inititalstate = 0;
const reducer = (state,action)=>{
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1

            default:
                return state
    }
}

function Use_reducer_1() {

    const [count,dispatch] = useReducer(reducer,inititalstate)

  return (
    <>
    <buttom onClick = {()=>dispatch("increment")}>Increment</buttom>
    <buttom onClick = {()=>dispatch("decrement")}>Decrement</buttom>
    
    </>
  )
}

export default Use_reducer_1