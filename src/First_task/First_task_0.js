import React, { useEffect, useState } from 'react'

function First_task() {


  const[data,setData] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(data=>setData(data))
            
   },[]);
   
   return (
    <div>
      <h1>Data from API</h1>
      <ul>
        <li>Id: {data.id}</li>
        <li>Title: {data.title}</li>
        <li>Price: {data.price}</li>
        <li>rate: {data.rating && data.rating.rate}</li>
      </ul>
    </div>
  );
































// const [records,setRecords]= useState([])

// useEffect(()=>{
//     fetch('https://fakestoreapi.com/products/1')
//     .then(res=>res.json())
//     .then(data=>setRecords(data))
//     .catch(err => console.log(err));
    

// },[])


// return (
//     <div>
//       {records.id && (
//         <ul>
//           <li>
//             {records.id} | {records.title}
//           </li>
//         </ul>
//       )}
//     </div>
//   );




}

export default First_task