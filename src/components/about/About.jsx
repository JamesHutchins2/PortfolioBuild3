import React from 'react'
import './about.css'
import CTA from './CTA'
import Cont from './Cont'


const About = () => {
  return (
    <div className='abtCon'>
      
      <h1>About me</h1>

      
      <div className='imageHolder'>  
      <img className="head" src={require("./head.jpeg")} alt={"Carlie Anglemire"}/>
      </div>
      
      <CTA />
      <Cont/>
      </div>
    
  )
}

export default About
