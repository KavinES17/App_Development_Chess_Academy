import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    type:''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Please enter the email';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter the Password';
    }
    if (!formData.type) {
      newErrors.type = 'Please enter the type';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      if (formData.email === 'adminak@gmail.com' && formData.password === 'chessacademy' && formData.type === 'admin') {
        navigate('/adminstart');
      }

      try {
        const response = await axios.post('http://localhost:8091/api/users/login', formData);
        
        if (formData.type === 'user') {
          navigate('/userhome');
        } else if (formData.type === 'mentor') {
          navigate('/mentorstart');
        }

        console.log(formData);
        alert("Successfully logged in");
        
      } catch (error) {
        console.error('Login failed:', error);
        // alert("Login failed, please check your credentials");
      }
    }

    console.log(formData);
    alert("Successfully signed up");
  };

  return (
    <div className='theentire'>
      <div className='Thefirst'>
        <form onSubmit={handleSubmit}>
          <h1 style={{ color: 'lightblue' }}>LOGIN</h1>
           Email
          <TextField
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
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
            label="Type"
            value={formData.type}
            onChange={handleChange}
            error={!!errors.type}
            helperText={errors.type}
            type="text"
            fullWidth
            margin="normal"
          />


          <Link to="/signup">Don't have an account?</Link><br></br>
          
          <br />
          <Button variant="contained" type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
