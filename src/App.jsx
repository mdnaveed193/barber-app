import { useState } from 'react'

import './App.css'
import Navbar from './components/home/Navbar';
import Home from './components/home/Home';
import About from './components/home/about/About';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/footer/Footer';

function App() {
 
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Reviews/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App
