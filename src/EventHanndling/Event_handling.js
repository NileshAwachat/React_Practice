import React from 'react'

function Event_handling() {
    const handleButtonClick = (event)=>{
        console.log(event);
        console.log(event.target);
        console.log(event.type);
        
        alert('hey i am on click event')
    }

    const handlewelcomeuser = (user)=>{
        console.log(   `hey ${user} walcome`);
        
    }
  return (
    <div>
        {/* function component with named component */}
         <button onClick={handleButtonClick}>Click</button>
         <br/>
         {/* fat arrow function */}
         <button onClick={(event)=>handleButtonClick(event)}>Click_2</button>
         
         {/* inline envent handler */}
         <button onClick={(event)=>console.log(event)}>Inline func</button>

         {/* function component with inline arrow function */}
         <button onClick={()=>alert('Inline arr func')}>Inline arr func</button>


        {/* passing argument to event handler */}
        {/* most imp */}
        {/* <button onClick={handlewelcomeuser('nielsh')}>clik on </button> */}
        <button onClick={()=>handlewelcomeuser('nielsh')}>clik on </button>

        </div>
  )
}

export default Event_handling