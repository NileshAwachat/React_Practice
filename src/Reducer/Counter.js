

// syntax of useReducer
// const[state,dispatch()] = useReducer(reducer(two arguments),initialstate)
// reducer(currentState,action)



// what is useReducer?

// useReducer is a react hook used for state management.
// alternative of usestate() hook.
// preferable for complex state management logic


import React, { useReducer } from 'react'


const initialstate = 0;
const reducer = (state,action)=>{
            switch (action) {
                case "increment":
                    return state + 1;
            
                case  "decrement":
                    return state - 1;
                
                default:
                    return state
            }
}
function Counter() {

   const[count,dispatch] = useReducer(reducer,initialstate)
  return (

    <>
    <div>count = {count}</div>
    <div><button className="border-solid border-2 border-sky-500 ..." onClick={()=>dispatch("increment")}>increment</button><br></br>
    <button className="border-solid border-2 border-sky-500 ..."  onClick={()=>dispatch("decrement")}>decrement</button></div> 
    </>

  )
}

export default Counter