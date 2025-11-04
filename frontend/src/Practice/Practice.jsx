import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export const Practice = () => {
    const[values,setValues]= useState({
        username:'', 
        password:''
    })
    const handleChange = (e) =>{
       setValues({...values,[e.target.name]:e.target.value})

    }
    const [errors,setErrors]=useState({})
    const handleSubmit = (event) =>{
        event.preventDefault();
        const newErrors={};
        if(!values.username)
        {
            newErrors.username = 'please enter the username';
        }
        if(!values.password)
        {
            newErrors.password ='please enter password';
        }
        else if(values.password.length<8)
        {
            newErrors.password='Please enter more than 8'
        }
        setErrors(newErrors)
        if(Object.keys(newErrors).length===0)
        {
            console.log(values);
        }
    }
  return (
    <form onSubmit={handleSubmit}>
    <TextField name='username' label="username" value={values.username} onChange={handleChange} error={!!errors.username} 
    helperText={errors.username}/>
    <TextField name='password' label="password" value={values.password} onChange={handleChange} error={!!errors.password}
    helperText={errors.password}/>
    <Button variant='contained' type='submit'>submit</Button>
    </form>
   
  );
}
