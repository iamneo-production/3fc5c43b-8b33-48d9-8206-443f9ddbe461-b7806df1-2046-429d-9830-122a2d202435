import logo from './logo.svg';
import './App.css'
import Example from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import back from './images/Back.jpg'
import Login from './components/Login';
import Searchflight from './components/Searchflight';
import FlightList from './components/Flightlist';
function App() {
  return (
    <div className="App">
       
      <Router>
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Searchflight/>}/>
      <Route path="/search/flightlist" element={<FlightList/>}/>
    </Routes>
  </Router>,
    </div>
  );
}

export default App;
