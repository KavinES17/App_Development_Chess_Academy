import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminHome.css'
import { Button } from '@mui/material';
const AdminHome = () => {
  const [userDts, setUD] = useState([]);

  useEffect(() => {
    
    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8091/api/users/getting');
      setUD(response?.data || []); // Update the state with fetched data
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleRemove = async (user) => {
    try {
      // Assuming the backend expects the course ID for deletion
      const id=user.id;
      const response = await axios.delete('http://localhost:8091/api/users/deleting',{
        params:{id},
      });
    
      await fetchData();
    //   setUD(userDts.filter(item => item !== user));
      
    //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
   <div>
   <div className="table-header">
   <div className="header-cell">Name</div>
   <div className="header-cell">Email</div>
   <div className="header-cell">lastname</div>
   <div className="header-cell">Action</div>
 </div>
   {userDts.length!==0?(
    userDts.map((user)=>(
      <div className='classified'>
      <div>
      {user.firstname}
      </div>
      <div>
      {user.email}
      </div>
      <div>
      {user.lastname}
      </div>
      <Button variant='contained'  onClick={() => handleRemove(user)}>Remove</Button>
      </div>
      
    ))
    
   ):(<p>No Products</p>)
   

   }
   </div>
  );
};

export default AdminHome;
