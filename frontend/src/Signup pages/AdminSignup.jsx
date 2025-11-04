import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './Sign.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    type:''
  });
  const [errors, setErrors] = useState({});
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const  handleSubmit = async (event) => {
    event.preventDefault();
    
    
    const newErrors = {};
    if (!formData.firstname) {
      newErrors.firstname = 'please enter the First name ';
    }
    if (!formData.lastname) {
      newErrors.lastname = 'Please enter the Last name';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'please enter the Password';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if(!formData.type)
    {
      newErrors.type ='please enter your type';
    }
    const {type}=formData;

    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      
      try{
        const response= await axios.post('http://localhost:8080/user',formData);
        console.log(response);
        if(!type)
        {
          return;
        }
        if(type==='admin')
        {
          navigate('/adminhome');
        }
        else if(type==='user')
        {
          navigate('/userlogin');
        }
        else if(type==='mentor')
        {
          navigate('/mentor');
        }
      }
      catch(error){
        console.error(error);
      }
    }
  };

  return (
    <div className='theentire'>
      <div className='Thefirst1'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'lightblue' }}>SIGNUP</h1>
          FirstName
          <TextField
            name="firstname"
            label="First Name"
            value={formData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            fullWidth
            margin="normal"
          />
          LastName
          <TextField
            name="lastname"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            fullWidth
            margin="normal"
          />
          Email
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            type="text"
            fullWidth
            margin="normal"
          />
          Password
          <TextField
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            type="password"
            fullWidth
            margin="normal"
          />
          Type
          <TextField
            name="type"
            label="type"
            value={formData.type}
            onChange={handleChange}
            error={!!errors.type}
            helperText={errors.type}
            type="type"
            fullWidth
            margin="normal"
          />
          <Link to="/login">Already have an account!!!</Link><br></br><br></br>
          <Button variant="contained" type="submit">Signup</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;
