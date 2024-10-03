import React from 'react'

// function New () {
//   var x= 45;

//   function handleclick(){
//     x = 34;
//   }
//     return (
//       <div>
//         <h1>{x}</h1>
//         <button onClick={handleclick}>click on this</button>
//       </div>
//     )
  


// }

// import { useState } from 'react'

// function New (){
//   const[x,setx]=useState('nilesh')

//   function handleClick(){
//     setx('nagpurit')
//   }
//   return(
//     <div>
//       <h1>{x}</h1>
//       <button onClick={handleClick}>click</button>
//     </div>
//   )
// }

// export default New

// import React from 'react'
// import { useState } from 'react'

// function New() {

//   const[count,setcount] = useState(0);
// function increment(){
//   setcount(count+1)
// }
// function decrement(){
//   setcount(count-1)
// }
//   return (
//     <div>
//     <div>{count}</div> 
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>

//     </div>
//   )
// }

// export default New

// import React from 'react'
// import { useEffect,useState } from 'react'
// function New() {
// const  [countx,setcountx] = useState(0);
// const  [county,setcounty] = useState(0);
//   useEffect(()=>{
//     console.log("hiii");
//     alert('warning')
    
//   },[countx])

// function increment(){
//   setcountx(countx+1);
// }
// function decrement(){
//   setcounty(county-1);
// }
//   return (
//     <div>
//       <h1>{countx}</h1>
//       <h1>{county}</h1>
//       <button onClick={increment}>click</button>
//       <button onClick={decrement}>click</button>
//     </div>
//   )
// }



import App_child from "./App_child";
import PropTypes from 'prop-types'

function New(props) {
  console.log(props);
  
  var city = 'nilesh'
  return(
    <div>
      <App_child myCity = {city}/>
      <h1>{props.myname}</h1>
    </div>
  )
}

New.propTypes={
  myname:PropTypes.string,
  age:PropTypes.number
}

export default New;