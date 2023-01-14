import React from 'react'
import './experience.css';
import { Link } from 'react-router-dom'

let ML = () => {
    return(
        <div className = "modal">
            <div className = "modal-content">
                <h1>Machine Learning</h1>
                <div className='info'>
                    <h4>My experience with machine Learning Is relativly in-significant, however it is now one of my main feilds of study</h4>

                    <h2 className='sub'>Focus</h2>
                    <h4>My current focus is on the application of Regression models in terms of my Ongoing SEC reaser4ch project, which can be viewed <Link to='/project'>here</Link>. As well as natural language models, which is being applied in sentiment analysis of online forums.</h4>
                </div>
            </div>
        </div>
    )
}

export default ML;