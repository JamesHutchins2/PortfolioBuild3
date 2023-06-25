import React from 'react';
import './experience.css';
import RD from './RD.jsx';
import ML from './ML.jsx';
import DATASCI from './DATASCI.jsx';
import JSDEV from './JSDEV.jsx';
import ClassificationProjects from './ClassificationProjects';



class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.handleOne = this.handleOne.bind(this);
    this.handleTwo = this.handleTwo.bind(this);
    this.handleThree = this.handleThree.bind(this);
    this.handleFour = this.handleFour.bind(this);
    this.handleFive = this.handleFive.bind(this);
    this.handleSix = this.handleSix.bind(this);
    this.state = {isLoggedIn: 0};
  }
  handleOne() {
    this.setState({isLoggedIn: 0});
    console.log(this.state.isLoggedIn);
  }handleFour

  handleTwo() {
    this.setState({isLoggedIn: 1});
    
  }
  handleThree() {
    this.setState({isLoggedIn: 2});
  }
  handleFour() {
    this.setState({isLoggedIn: 3});
  }
  handleFive() {
    this.setState({isLoggedIn: 4});
  }
  handleSix() {
    this.setState({isLoggedIn: 5});
  }
  

  render() {
    
    const isLoggedIn = this.state.isLoggedIn
    let displayItem;
    
    let button;
    if (isLoggedIn === 0) {
      console.log(isLoggedIn);
      
      displayItem = (
        <div className='body'>
            <h1>Projects</h1>
        <ul className='expul'>
          
          <li>
            
            <h4>Inventory Managment System</h4>
            
            <button className='bot' onClick={this.handleTwo} >Learn More</button>
          </li>
          <li>
            
            <h4>Employee Hours Log System</h4>
            
            <button className='bot' onClick={this.handleThree} >Learn More</button>
          </li>
          
          <li>
            
            <h4>NHL Draft Prediction Chat Bot</h4>
            
            <button className='bot' onClick={this.handleFive} >Learn More</button>
          </li>
          <li>
            
            <h4>Classification Projects</h4>
            
            <button className='bot' onClick={this.handleSix} >Learn More</button>
          </li>
        </ul>
      </div>)
      console.log(displayItem);
      button = null;
    } else if(isLoggedIn === 1) {
      button = <button className='bot' onClick={this.handleOne}>Back</button>
      
      displayItem = <RD></RD>;
    }else if(isLoggedIn === 2) {
      button = <button className='bot' onClick={this.handleOne}>Back</button>

      displayItem = <ML></ML>;
    }
    else if(isLoggedIn === 3) {
      button = <button  className='bot' onClick={this.handleOne}>Back</button>
      displayItem = <JSDEV></JSDEV>;
    }
    else if(isLoggedIn === 4) {
      button = <button className='bot' onClick={this.handleOne}>Back</button>
      displayItem = <DATASCI></DATASCI>;
    }
    else if(isLoggedIn === 5) {
      button = <button className='bot' onClick={this.handleOne}>Back</button>
      displayItem = <ClassificationProjects></ClassificationProjects>;
  }
    let datacontent = (<RD />);

    

    return (
      <div className='container exp'>
        {displayItem}
        {button}
      </div>
     
      
        
      
    );
  }
}

export default Experience;
   


