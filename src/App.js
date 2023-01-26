import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Btn from './components/Btn';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  const eventHandler = () => console.log('clicked');
  return (
    <div>
      <nav>
       < Link to="/" className="nav-item">Home</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
	    </nav>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Nav className="live" />
      <Btn ev={eventHandler}/>
    </div>
  );
}

export default App;
