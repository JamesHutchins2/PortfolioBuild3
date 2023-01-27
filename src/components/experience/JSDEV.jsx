import React from 'react'
import './experience.css'


let JSDEV = () => {
    return(
        <div className = "modal">
            <div className = "modal-content">
                <h1>JS Development</h1>
                <h2 className='modaltexthead'>Projects</h2>
                <ul>
                    <li  className='expli'><h3 className='modaltext'>SEC form 4 API</h3>
                    <p>The goal of this project is to develope a linear regression model, that uses form 4 (insider trading) disclosures to predict stock price movements. The end product will include a user interface which will be updated real time. This project includes a whole host of software parts, indcluding, but not limited to:</p>
                    <ul className='list'>
                        <li className='expli'>Python Pandas, matplotlib, Tensor Flow</li>
                        <li  className='expli'>Python Rest API</li>
                        <li  className='expli'>express sever implementation</li>
                        <li  className='expli'>React front end</li>    
                    </ul></li>
                    <li  className='expli'><h3 className='modaltext'>React Portfolio Site</h3>
                    <p>Well, I would explain this but I think the website its self will sifice</p></li>
                    <li><h3 className='modaltext'>MBI inventory managment system:</h3>
                    <p>This project included a full MERN stack deployment using mongo DB, express services, as well as react front end development. This purpose of this poject is to supply MBI project managment with realtime inventory data.</p></li>
                    
                    
                </ul>
            </div>
        </div>
    )
}

export default JSDEV;