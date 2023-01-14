import React from 'react'
import './index.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Navbar from './components/navbar/navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Footer from './components/Footer/Footer'
import './index.css'


const Middle = (props, state) => {
  
  
  
  
  return (
    <div>
    
      <Navbar/>
      
    
      
      <Header/>
      <About/>
    <Experience/>
    <div className="App">
    
    </div>
    
    <Footer />
  </div>
  )
}

export default Middle
