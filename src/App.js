import logo from './logo.svg';
import './App.css';
import React from 'react';
import  About from './components/About';
import  Hero from './components/Hero';
import  Navbar from './components/Navbar';
import  Services from './components/Services';
import  Team from './components/Team';
import Contact from './components/Contact';
import  Footer from './components/Footer';


function App() {
  return (<>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Team/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
