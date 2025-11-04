import React from 'react';
import './About.css';
import { useNavigate, useNavigation } from 'react-router-dom';

const About = () => {
  const navigate=useNavigate();
  const handleclick = () =>{
    navigate('/courses');

  }
  return (
    <div className='background2'>
      <div className='photo1'></div>
      <div className='content'>
        <h1 className='title'>About Us</h1>
        <p className='description'>
          Our chess academy is dedicated to nurturing young minds and developing critical thinking skills. We offer a stimulating environment where students of all ages can learn the intricacies of chess. Our experienced instructors provide expert guidance, tailored to individual learning styles.
        </p>
        <p className='description'>
          Beyond chess, we foster a strong sense of sportsmanship, problem-solving abilities, and strategic thinking. Whether it's for fun or competitive aspirations, our academy provides a solid foundation for a lifetime of intellectual growth.
        </p>
        <p className='description'>
          Join us in exploring the world of chess, where each move is a step towards mastering strategy and enhancing cognitive skills. We believe that chess is more than just a game—it’s a tool for personal development and intellectual empowerment.
        </p>
        <div className='cta'>
          <button className='cta-button' onClick={handleclick}>Join Our Academy</button>
        </div>
      </div>
    </div>
  );
}

export default About;
