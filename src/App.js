import { Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Btn from './components/Btn';
import Contact from './pages/Contact';


function App() {
  const eventHandler = () => console.log('clicked');
  return (
 
    <div>
      <nav>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Routes>
        <Route value={<Contact />}></Route>
      </Routes>
      <Nav className="live" />
      <Btn ev={eventHandler}/>
    </div>
  );
}
import { Form } from 'react-router-dom';

export default App;
