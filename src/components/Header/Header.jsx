import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
       <div className='.container.header__container'>
        <h5>Hello I'm</h5>
        <h1 >James Hutchins</h1>
        <h5 className='secondary'>Mechanical Engineer</h5>
        <CTA className='CTA'/>
       </div>
    </header>
  )
}

export default Header
