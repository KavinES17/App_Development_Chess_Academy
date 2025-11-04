import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../AdminHomepage/AdminHome.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecentlyAdded = () => {
  const [userDts, setUD] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8091/gettingcourse');
        setUD(response?.data || []); // Update the state with fetched data
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
   const handleEnroll = () =>{
    navigate('/navigate');
  
   }
  return (
    <div>
      {userDts.length !== 0 ? (
        <div>
          <div className="table-header">
            <div>Name</div>
            <div>Description</div>
            <div>About</div>
            <div>Enroll</div>
          </div>
          {userDts.map((user) => (
            <div className="classified" key={user.id}>
              <div>{user.title}</div>
              <div>{user.img}</div>
              <div>{user.description}</div>
              <Button variant="contained" onClick={handleEnroll}>Enroll</Button>
            </div>
          ))}
        </div>
      ) : (
        <p>No Products</p>
      )}
    </div>
  );
};

export default RecentlyAdded;
