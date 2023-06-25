import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';
// Components

import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpen: false, // keep track of whether the dropdown menu is open or not
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    // toggle the value of isMenuOpen
    this.setState((state) => ({ isMenuOpen: !state.isMenuOpen }));
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="navbar">
        {window.innerWidth < 600 ? (
            <>
              <button className= "Toggle"onClick={this.toggleMenu}>Menu</button>
              {isMenuOpen && (
              <div className='SmallBar'>
               

                <ul className="nav-menu">
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/projects' className="nav-links">Work Experience</Link>
                </li>
                
                <li>
                  <Link to='/workExperience' className="nav-links">Projects</Link>
                </li>
                <ScrollLink to="example-destination"  spy={true} smooth={true}   duration={500}  className='some-class' activeClass='some-active-class'>
                  Link Text Goes Here
                </ScrollLink>   
                
                  
                </ul> </div>
        )}
            </>
          ) : (
            // If the screen width is 800px or above, show the buttons horizontally
            <>
              <div className='BigBar'>
              <div className='name'>
              <a href="/" className="navbar-logo">james Hutchins</a>
              </div>
              <ul className="nav-menu">
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/projects' className="nav-links">Projects</Link>
                </li>
                
                <li>
                  <Link to='/workExperience' className="nav-links">Work Experience</Link>
                </li>
               
              </ul>
             
              </div>

            
            </>
          )}

      </nav>
       
      
    );
  }
}
