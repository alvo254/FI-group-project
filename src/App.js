import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      
      </BrowserRouter>
    </div>
  )
=======
import {  BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Navbar from './components/Navbar/Navbar';
import Resturants from './components/Resturants/Resturants';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>

      <Routes>

      <Route path='/' element={<Home />}/>
      <Route path='About' element={<About />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route path='Reviews' element={<Reviews />}/>
      <Route path='Resturants' element={<Resturants />}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
>>>>>>> 1e5fa08ffb381395a90b9a510efd76b11c5d07cc
}

export default App;
