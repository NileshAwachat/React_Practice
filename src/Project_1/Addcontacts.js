import React,{useState} from 'react'
export default function Addcontacts({Addcontact}) {
    const [contactData, setcontactData] = useState({name : '',email : ''})

    const handlechange = (e)=>{
        if (e.target.name === 'name'){
            setcontactData({...contactData, name : e.target.value})
        }

        else{
            setcontactData({...contactData, email: e.target.value})
        }
    }

    const handleAdd =()=>{
        if(contactData.name === "" || contactData.email === ""){
            alert("Please fill all the fields")
                      
        }
        Addcontact(contactData)
        setcontactData({name : '',email:''})
    }
  return (
    <>
        <div>Addcontact</div>
        <form>
            <label>Name</label><br/>
            <input type='text' placeholder='Enter Name' name='name' value={contactData.name} onChange={handlechange}/><br/>
            <label>Email</label><br/>
            <input type='text' placeholder='Enter Email' name='Email' value={contactData.email} onChange={handlechange}/>
            
        </form>

        <button onClick={handleAdd}>Add contact</button>
    
    </>
  )
}

