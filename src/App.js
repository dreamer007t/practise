import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Btn from './components/Btn';
import Contact from './pages/Contact';
import Home from './pages/Home';
import RegisrationForm from './pages/RegistrationForm'

const menu = [
  { 
    id:1,
    name:'Cheese Burger',
    Desc:'bun Cheese and Beef patty',
    price:20
  },
  { 
    id:2,
    name:'MOMO',
    Desc:'minced dumplings',
    price:30
  }
]
const item = menu.map(item => {
  return{
    content: `${item.name} - ${item.Desc}`,
  }
})
console.log(item)

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
      <RegisrationForm />
    </div>
  );
}

export default App;
