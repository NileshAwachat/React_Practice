import React, { useEffect, useState } from 'react'
import Header from './Header'
import Addcontact from './Addcontacts'
import Contactlist from './Contactlist'
import uuid4 from 'uuid4'
function Project() {
  const localStorageKey = "contact"
const [contact,setcontact] = useState(()=>{
 return JSON.parse(localStorage.getItem(localStorageKey))

|| [] });




    useEffect(()=>{
      localStorage.setItem(localStorageKey,JSON.stringify(contact))
    },[contact])

    const addcontact = (data)=>{
       setcontact([...contact,{id: uuid4(),data}])
    }

    const removeContact = (id)=>{
          const updatedList = contact.filter((val)=>{
            return val.id !== id;
          })

          setcontact(updatedList)
    }
  return (
    <div>
        <Header/>
        <Addcontact Addcontact={addcontact}/>
        <Contactlist contact = {contact} removeContact={removeContact}/>
    </div>
    
  )
}

export default Project;