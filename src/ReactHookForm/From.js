import React from 'react'
import { useForm } from "react-hook-form"
// import './index.css'

// baasic form handling 
// -> create 
// -> fields register
// -> onsubmit 
// -> validation 
// -> error handling 
// -> styling error 
// -> multiple submission prevent

function Form() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors,isSubmitting },
      } = useForm();

      async function onSubmit(data){

        // Api call ko simulate krte he
        await new Promise((resolve)=>setTimeout(resolve,5000));
        console.log("submitting the form",data);
        
      }
  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
        <div>
            <label>First Name:</label>
            <input
            className={errors.firstname ? 'input-error': ""}
            {...register('firstname',
                {
                required:true,
                minLength:{value:3,message:'min leng atleast 3'},
                maxLength:6})}/>
                {errors.firstname && <p className='error-message'>{errors.firstname.message}</p>}
        </div>
        <br/>

        <div>
            <label>middle Name:</label>
            <input  {...register('middlename')}/>
        </div>
            <br/>

        <div>
            <label>last Name:</label>
            <input 
            className= {errors.lastname ? 'input-error':""}
            {...register('lastname', {
                pattern:{
                    value:/^[A-Za-z]+$/i,
                message:'Last Name must contain only letters (A-Z)'},

                })}/>
                {errors.lastname && <p className='error-message'>{errors.lastname.message}</p>}
        </div>
        <br/>

        <input type='submit' disabled={isSubmitting} 
        value={isSubmitting ? "Submitting" : "Submit"}/>
    </form>
  )
}

export default Form;