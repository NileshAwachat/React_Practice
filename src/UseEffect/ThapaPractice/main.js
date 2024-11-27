

// import './index.css';
import { useEffect, useState } from 'react';


export const ReactUseEffect = ()=>{
   const [date,setdate] = useState(0);

    useEffect(()=>{
        setInterval(()=>{const updatedate = new Date();
            setdate(updatedate.toLocaleTimeString());},1000)
        
        
    },[]);

    return(
        <div >
            <h1>useEffect hook</h1>
            <h1>Date</h1>
            <p>Count: {date}</p>
            


        </div>
    )
}