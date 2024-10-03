import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Contact_list(props) {
  const{contact,removeContact} = props
  console.log(contact);
  
  console.log(contact,"from contactlist");

  const contactlist = contact.map((val)=>{
        return(
          <>
            <>{val.data.name}</><br/>
            <>{val.data.email}</>
            <span onClick={()=>removeContact(val.id)}><DeleteIcon/></span><br/><br/>
            

          </>
        )
  })
  
  return (
    <div>
      <>Contact_list</><br/>
      <>{contactlist}</>
    </div>
    
  )
}

