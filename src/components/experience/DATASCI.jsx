import React from 'react'


import './experience.css';
let DATASCI = () => {
    return(
        <div className = "modal">
            <div className = "modal-content">
                <h1 className='item-title'>Data Science</h1>
                <h2 className='item-sub-title'>Projects</h2>
                <ul>
                    <li  className='expli'><h2 className='item-list-item-title'>Fluids Lab Data Processing</h2>
                        <h4 className='list-text'>Using Python and pandas, I completed Multiple labs which included, </h4>
                        <ul className='inner-list'>
                            <li className='inner-list-item'>Pump preformance calculations</li>
                            <li className='inner-list-item'>Foil Preformance Analysis</li>
                            <li className='inner-list-item'>Boundry Layer Flow analysis</li>
                        </ul>

                    </li>
                    <br />
                    <br />
                    <li  className='expli'>
                        <h2 className='item-list-item-title'>On going Projects</h2>
                        <a className='button' href="/project#/project">Click to See more</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DATASCI;