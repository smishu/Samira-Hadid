import logo from './logo.svg';
import './App.css';
import Home from './Componets/Home/Home';
import Login from './Componets/Login/Login';
import { Router, Routes } from 'react-router-dom';
import Header from './Componets/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>

      {/* <Routes>
        <Router path="/" element={Home}></Router>
        <Router path="/login" element={Login}></Router>


      </Routes> */}


    </div>
  );
}

export default App;
