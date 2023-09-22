import logo from './logo.svg';
import './App.css'
import Example from './components/Header';
import Signup from './components/Signup';
import Home from './components/Home';
import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import back from './images/Back.jpg'
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Example/>  
      <Router>
    <Routes>
      {/* <Route path="/" element={<Example />} /> */}
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </Router>,
    </div>
  );
}

export default App;
