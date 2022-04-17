import logo from './logo.svg';
import './App.css';

import Login from './Componets/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import Skills from './Componets/Skills/Skills';
import Services from './Componets/Services/Services';
import Testimonials from './Componets/Testimonials/Testimonials';
import Register from './Componets/Register/Register';
import About from './Componets/About/About';
import ContactMe from './Componets/Contact-Me/ContactMe';

function App() {
  return (
    <div className="App">
      <Header></Header>



      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/testimonials" element={<Testimonials></Testimonials>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/contactMe" element={<ContactMe></ContactMe>}></Route>
        <Route path="/about" element={<About></About>}></Route>



      </Routes>


    </div>
  );
}

export default App;
