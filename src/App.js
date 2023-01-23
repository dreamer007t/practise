import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Btn from './components/Btn';
import { useState } from 'react';

function App() {
  const [eventHandler, setEventHandler] = useState('hello');

  function handleChange(e) { 
    setEventHandler(e.target.value); 
  } 

  return (
    <div>
      <Nav className="live" />
      <input value={eventHandler} onChange={handleChange} />
      <p>You typed: {eventHandler}</p> 
      <button onClick={() => setEventHandler('hello')}>
        click me
      </button>
    </div>
  );
}

export default App;
