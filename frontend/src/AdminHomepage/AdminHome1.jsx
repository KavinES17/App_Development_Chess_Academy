import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminHome1 = () => {
    const navigate=useNavigate();
    const manageUser = () =>{
          navigate('/adminhome');
    }
    const manageCourse = () =>{
        navigate('/admincourse');
    }
  return (
    <div>
    <Button variant='contained' onClick={manageUser}>Manage users</Button>
    <Button variant='contained'onClick={manageCourse}>Manage courses</Button>
    </div>
  )
}

export default AdminHome1