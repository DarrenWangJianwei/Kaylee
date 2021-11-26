import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './pages/about'
import Portfolio from './pages/portfolio';
import Project from './pages/project'
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/FooterComponent';

import './theme.css'

function App() {
  const [windowScrollY,setWindowScrollY] = useState(window.pageYOffset);

  useEffect(() => {
      const onScroll = () =>{
          setWindowScrollY(window.pageYOffset)
      }
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
  },[windowScrollY]);


  const topBarToggle = () =>{
    if(windowScrollY > 40){
        return {height: '80px',visibility:'visible'}
    }
    return {height: '0px',visibility:'hidden'};
  }
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent handleTopBarToggle={topBarToggle}/>
      <Routes>
        <Route path="/" element={<Home windowScrollY={windowScrollY}/>} />
        <Route path="/about" element={<About windowScrollY={windowScrollY}/>}/>
        <Route path="/portfolio" element={<Portfolio />}/>
        <Route path="/project" element={<Project />}/>
      </Routes>
    </BrowserRouter>
    <FooterComponent />
  </>
  );
}

export default App;
