
// Topic coverd 
// react form
// controlled component
// uncontrolled component


// official react recomded to use controlled components and it controlled by react
// if we wnat to use controlled  then use event handlers , usestate hooks

// uncontrolled  controlled by DOM
// if we want use then useref also create ref is used

import React, { useState } from 'react'

function Form() {

    const [name,setname] = useState('');
    const [pswd,setpswd] = useState('');

    // function handleChange(e){
    //     console.log(e.target.value);
    //     setname(e.target.value)
    //     const capName = (e.target.value).toUpperCase();
    //     setname(capName)
        
    // }
    // function handlepassword(e){
    //     console.log(e.target.value);
    //     setpswd(e.target.value)
        
        
    // }

    function handleChange(e){
        console.log(e.target.name);
        if(e.target.name === 'firstName'){
            const capName = (e.target.value).toUpperCase();
            setname(capName);
        }
        else{
            setpswd(e.target.value)
        }
    }

  return (
   <>
    <form className='App'>
        <label>First Name:</label> <br/>
        <input type="text" name='firstName' value={name} onChange={handleChange} />
        <br/>
        <label>Password</label>
        {/* <input type='text' name='password' value={pswd} onChange={handlepassword}/> */}
        <input type='text' name='password' value={pswd} onChange={handleChange}/>

        
    </form>
   </>
  )
}

export default Form  