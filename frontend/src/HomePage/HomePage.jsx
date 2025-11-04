import React, { useEffect, useMemo, useState } from 'react'
import './Homepage.css'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import image2 from './ChessArcade.png'
import image3 from './chessmateclub.png';
import image4 from './Screenshot_20240725_150351.png';
import image5 from './Screenshot_20240725_151234.png';
import image6 from './Screenshot_20240725_151442.png';
import image7 from './chessimage1.png';
import image8 from './image.png';
import image9 from './chessmasterclass.png';
import image11 from './ChessClassic1.png';
import image12 from './messi\ and\ ronaldo\ wallpaper\ 4k\ chess.jpg';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Avatar from '@mui/material/Avatar';
// import sebastian from './sebastian-svenson-d2w-_1LJioQ-unsplash.jpg'


const HomePage = () => {

  const navigate=useNavigate();
  const manageClick = (event) =>{
    navigate("/login");
  }
  const handlecourse = () =>{
    navigate("/courses")
  }
  
  const images = useMemo(()=>
   [
    
    image11,
    image7
  ],[]);
  const [currentindex,setCurrentindex]=useState(0);
  const handleNext = () =>{
    setCurrentindex((currentindex+1)%images.length)
  };
  const handlePrev = () =>{
    setCurrentindex((currentindex-1+images.length)%images.length);
  };
  // useEffect(()=>{
  //   const intervalid=setInterval(()=>{
  //     setCurrentindex((previndex)=>(previndex+1)%images.length)
  //   },5000);
    
  // },[images]);
  return (
    <div className='background'>
    <div className='backgroundimage' style={{minHeight:"100vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    <div className='navbar3'>
    <a href='#' className='logo'>MasterMinds</a>
    <nav className='navcomp'>
   
    <Link to="/about">About</Link>
    <a href='#footer1'>ContactUs</a>
    <Link to="/courses">Courses</Link>
    <Link to='/recentlyadded'>Recently Added</Link>
    <Link to="">what is </Link>
    </nav>
    </div>
    </div>
   
    
    <div className='scrollablecontainer'>
    <div className='level1' >
    <div className='box1'>
    <div className='imageu'>
    <img src={image6}/><br></br>
    Explore Courses<br></br><br></br>
    <ArrowCircleRightIcon style={{height:"40px",width:"30px"}}/>
    </div>
    </div>
    <div className='content4'>
    <h1>About Advanced course</h1>
    <ul>
    <h3>This course consists of grandmasters who are well versed in defined strategies and techniques </h3>
    <h3>We build up a curriculam for the students to engage like minded peoples altogether </h3>
    <h3>Our Aim is to become the best chess Community in both Online and Offline</h3>
    <h3>Believe in your dreams cause we are here to make it happen</h3>
    </ul>
    </div>
    </div>

    <div className='level1'>
    <div className='box1'>
    <div className='imageu'>
    <img src={image5}/><br></br>
    Explore Courses<br></br><br></br>
    <ArrowCircleRightIcon style={{height:"40px",width:"30px"}}/></div>
    </div>
    <div className='content4'>
    <h1>About Intermediate course</h1>
    <ul>
    <h3>This course consists of Masters who are well trained in defined strategies and techniques </h3>
    <h3>We build up a curriculam for the developing students to develop thier teqniques and strategies </h3>
    <h3>Our Aim is to become the best chess Community in both Online and Offline</h3>
    <h3>Believe in your dreams cause we are here to make it happen</h3>
    </ul>
    </div>
    </div>



    <div className='level1'>
    <div className='box1'>
    <div className='imageu'>
    <img src={image4}/><br></br>
    Explore Courses<br></br><br></br>
    <ArrowCircleRightIcon style={{height:"40px",width:"30px"}}/>
    </div>
    </div>
    <div className='content4'>
    <h1>About Beginner course</h1>
    <ul>
    <h3>This course consists of Seniors who are well trained in defined strategies and techniques</h3>
    <h3>We build up a curriculam for basic students to engage in activities and small competitions </h3>
    <h3>Our Aim is to become the best chess Community in both Online and Offline</h3>
    <h3>Believe in your dreams cause we are here to make it happen</h3>
    </ul>
    </div>
    </div>
    </div>
    <div className='footer' id='footer' style={{backgroundColor:"lightcyan"}}>
    <button onClick={handlePrev} style={{height:"35px",width:"35px",borderRadius:"32px",bottom:"250px",position:"relative"}}>&#8249;</button>
    <img src={images[currentindex]} alt="Carousel Image"/>
    <button onClick={handleNext} style={{height:"35px",width:"35px",borderRadius:"32px",bottom:"250px",position:"relative"}}>&#8250;</button>
    </div>
    <div className='footer1' id='footer1'>
    <h2 style={{fontSize:"3rem",color:"black"}}>Learn about us</h2>
    <h3 style={{fontFamily:"monospace",fontSize:"1.5rem",display:"flex",justifyContent:"space-between",flexDirection:"column"}}>
    Contact us
    <br>
    </br>
    <br>
    </br>
    <a href='instagram.com'>
    Instagram
    </a>
    <br>
    </br>
    <br>
    </br>
     <Link>
    facebook
    </Link>
    <br>
    </br>
    <br>
    </br>
    <Link>
    telegram
    </Link>
    <br>
    </br>
    <br>
    </br>
    <Link>
    Gmail
    </Link>
    <br>
    </br>
    <br>
    </br>
    <Link>
    linked IN
    </Link>
    </h3>
    
    </div>
    </div>
  )
}

export default HomePage;