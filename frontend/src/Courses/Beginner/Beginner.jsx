import React, { useState } from 'react'
import '../../HomePage/Homepage.css'
import './Beginner.css'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Content from './Content.jsx'
const Beginner = () => {
    const [currentview,setCurrentview]=useState('beginner');
    const handleBeginclick = () =>{
        setCurrentview('beginner');
    }
    const handleInterclick = () =>{
        setCurrentview('intermediate');
    }
    const handleAdvanclick = () =>{
        setCurrentview('advanced');
    }
    const handleIconclick = () =>{
        setCurrentview('carticon');
    }
  return (
   <div>
   <Navbar currentview={currentview} onBeginclick={handleBeginclick} 
   onInterclick={handleInterclick} onAdvanclick={handleAdvanclick} onIconclick={handleIconclick}/>
   <Content currentview={currentview}/>
   </div>
  )
}

function Navbar({currentview,onBeginclick,onInterclick,onAdvanclick,onIconclick}){
    return(
       <div className='navbar1'>
       <div onClick={onBeginclick}  className='hover'><h2>Beginner</h2></div>
       <div onClick={onInterclick}  className='hover'><h2>Intermediate</h2></div>
       <div onClick={onAdvanclick}  className='hover'><h2>Advanced</h2></div>
       <ShoppingCartIcon style={{height:"34px",width:"34px"}} className='icon' onClick={onIconclick}/>
       <div style={{top:"50px",right:"250px",position:"absolute",color:"white",borderRadius:"500px",backgroundColor:"red"}}>
       <span>0</span>
       </div>
       </div>
        
    );
}


export default Beginner