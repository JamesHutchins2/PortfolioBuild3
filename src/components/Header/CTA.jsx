import React from 'react'
import resume from '../../assets/resume.pdf'
//import path the the resume //assets\resume.pdf (import CV from './assets/resume.pdf')
function CTA() {
  const email = "jamesy77@outlook.com"
  
  
  return (
    <div className='cta'>
      <a className='ctabtn' href={resume} >Download Resume</a>
      <a className='ctabtn' href={`mailto:${email}`}>Contact</a>
      
    </div>
  )
}

export default CTA
