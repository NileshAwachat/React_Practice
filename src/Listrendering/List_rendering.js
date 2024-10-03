import React from 'react'
import Nc from './Nc'

// how to do list rendering

// function App(){
//   const arr = ['a','b','c','d']
//   return(
//     <>
//       {
//         arr.map((item,index)=>{
//           return(
//             <li key={index}>{item}</li>
//           )
//         })
//       }  
//     </>
//   )
// }


function App() {
    const arr=[
        {name:'cp',
        age:35
        },
        {name:'cp1',
            age:36
            }
    ]
  return (
    <div>
        <ul>
        {
        arr.map((item)=><Nc dt={item}/>
         
        )
         
    }
    </ul>
    </div>
  )
}






export default App; 
