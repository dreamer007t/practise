import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Btn from './components/Btn';

function App() {
  const eventHandler = () => console.log('clicked');
  return (
    <div>
      <Nav className="live" />
      <Btn ev={eventHandler}/>
    </div>
  );
}

export default App;
