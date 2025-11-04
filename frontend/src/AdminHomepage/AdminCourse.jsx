import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminHome.css'
import { Button } from '@mui/material';
const AdminCourse = () => {
  const [userDts, setUD] = useState([]);
  const [formData1, setFormData] = useState([]);
  useEffect(() => {
      
      fetchData();
    }, []); // Empty dependency array means this effect runs once on mount
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8091/courses/getCoursesdata');
        setUD(response?.data || []); // Update the state with fetched data
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  const handlePermit = async(user) => {
    const newEntry = {
      title: user.title,
      description: user.description,
      img: user.img,  // Assuming image is part of user object
      content: user.content
    };
  
    try {
      const response = await axios.post('http://localhost:8091/permitted', newEntry); // Send only the new entry
      await handleRemove(user);
     
    //   setFormData([...formData1, newEntry]);
    //   setUD(userDts.filter(item => item !== user));
    //   console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemove = async (user) => {
    try {
      // Assuming the backend expects the course ID for deletion
      const id=user.id;
      const response = await axios.delete('http://localhost:8091/courses/delete',{
        params:{id},
      });
      console.log(response.data);
      await fetchData();

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
   <div>
   <div className="table-header">
   <div className="header-cell">title</div>
   <div className="header-cell">description</div>
   <div className="header-cell">content</div>
   <div className="header-cell">Action</div>
 </div>
   {userDts.length!==0?(
    userDts.map((user)=>(
      <div className='classified'>
      <div>
      {user.title}
      </div>
      <div>
      {user.description}
      </div>
      <div>
      {user.content}
      </div>
      <Button variant='contained' onClick={() => handlePermit(user)}>Permit</Button>
      <Button variant='contained' onClick={() => handleRemove(user)}>Remove</Button>
      </div>
      
    ))
    
   ):(<p>No Products</p>)
   

   }
   </div>
  );
};

export default AdminCourse;
