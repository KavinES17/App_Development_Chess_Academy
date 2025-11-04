import React, { useState } from 'react';
import Content from './Content.jsx';
import CourseCart from './CourseCart.jsx';
import './Cart.css';
// import './App.css'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [currentView, setCurrentView] = useState('beginner');

  const addCourse = (course) => {
    
    setCart((prevCart)=>{
      if(prevCart.some(item=>item.name===course.name))
      {
        return prevCart
      }
      return [...prevCart,course];
    });

      
    };

  const removeCourse = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className='nav'>
    <div className='navbar2'>
    <h2 onClick={() => setCurrentView('beginner')}>Beginner</h2>
    <h2 onClick={() => setCurrentView('intermediate')}>Intermediate</h2>
    <h2 onClick={() => setCurrentView('advanced')}>Advanced</h2>
    <h2 onClick={() => setCurrentView('cart')}>Cart ({cart.length})</h2>
    </div>
      <br></br>
      
      {currentView === 'cart' ? (
        <CourseCart cart={cart} removeCourse={removeCourse} clearCart={clearCart} />
      ) : (
        <Content currentview={currentView} addCourse={addCourse} />
      )}
    </div>
  );
};

export default Cart;