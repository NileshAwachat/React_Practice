
// <!-- in javascript -->
// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="number"></div>
//   <script>
//     let len = 10
//     function Number(){
//       let temp = '';
//       for (let index = 0; index < len; index++) {
//         temp += `${index + 1}`;
        
        
//       }
//       document.getElementById("number").innerHTML += temp;
//     }
//     Number()
//   </script> 
// </body>
// </html> -->


// by using usestate and useeffect

// import React, { useState } from 'react'
// import { useEffect } from 'react'

// function que1() {

//   const [set,setcount] = useState('');

//   useEffect(()=>{
//     const len = 10;
//     let temp = '';

//      for(let i = 0; i < len; i++){
//       temp += `${i + 1}`;
//      }
//      setcount(temp)
//   },[]);


//   return (
//     <div>
//       <h1>number 1 to 10</h1>
//       <p>{set}</p>
//     </div>
//   )
// }

// export default que1

// useeffect

import React, { useEffect } from 'react'

function que1() {
  useEffect(()=>{
    const num = 10;
    let temp = '';
    for (let index = 0; index < num; index++) {
      temp += `${index + 1}`;
      
    }

    document.getElementById('number').innerHTML = temp;
  })

  return (
    <>
    <h1>number 1 to 10</h1>
    <div id='number'></div>
    </>
  )
}

export default que1