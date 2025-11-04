
import './App.css';
// import Beginner from './Courses/Beginner/Beginner';
import HomePage from './HomePage/HomePage';
import LoginPage from './Pages/LoginPage';
// import { Practice } from './Practice/Practice';
import Signup from './Signup pages/Signup';
import Cart from './Courses/Beginner/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Content from './Courses/Beginner/Content';

import About from './HomePage/About.jsx';
import CheckoutPage from './Courses/Beginner/Checkout.jsx';
import AdminHome from './AdminHomepage/AdminHome.jsx';
import MentorHomepage from './MentorHomepage/MentorHomepage.jsx';
import AdminHome1 from './AdminHomepage/AdminHome1.jsx';
import AdminCourse from './AdminHomepage/AdminCourse.jsx';
import RecentlyAdded from './HomePage/RecentlyAdded.jsx';
import AdminStarter from './AdminHomepage/AdminStarter.jsx';
import MentorStarter from './MentorHomepage/MentorStarter.jsx';
import MainHomePage from './HomePage/MainHomePage.jsx';
import PaymentPage from './AdminHomepage/PaymentPage.jsx';
import UpdateCourse from './MentorHomepage/UpdateCourse.jsx';
// import AdminSignup from './Signup pages/AdminSignup.jsx';



function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
     <Route path="/" element={<MainHomePage/>} />
     <Route path="/login" element={<LoginPage/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/Cart' element={<Cart/>}/>
     <Route path='/courses' element={<Cart/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/checkout' element={<CheckoutPage/>}/>
     <Route path='/userhome' element={<HomePage/>}/>
     <Route path='/adminhome' element={<AdminHome/>}/>
     <Route path='/mentor' element={<MentorHomepage/>}/>
     <Route path='/adminhome1' element={<AdminHome1/>}/>
     <Route path='/admincourse' element={<AdminCourse/>}/>
     <Route path='/recentlyadded' element={<RecentlyAdded/>}/>
     <Route path='/adminstart' element={<AdminStarter/>}/>
     <Route path='mentorstart' element={<MentorStarter/>}/>
     <Route path='/payment' element={<PaymentPage/>}/>
     <Route path='/updatecourse' element={<UpdateCourse/>}/>
     <Route path='/updatecourse/:id' element={<MentorHomepage/>}/>
  
    
     </Routes>
    </div>
    </Router>
   
  );
}

export default App;