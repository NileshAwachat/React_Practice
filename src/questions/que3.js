import React, { useEffect, useState } from 'react'

function que3() {

    const [set,setcount] = useState('');

    useEffect(()=>{
        const num = 7;
         const res =[];
        for (let index = 1; index <= 10; index++) {
            res.push(
                <li key = {index}>
               {num * index}
                </li>
            )    
                      
            
        }
        setcount(res)
   return (
    <>
    <ul>
        {set}
    </ul>
    </>
  )
}

export default que3;