
 import React from 'react'
import Navbar from '../navbar/navbar'
import './project.css'
import Reddit from './Reddit.jsx'
import { Link } from 'react-router-dom'

 const ProjectMain = () => {
   return (
     <div>
        <Navbar/>
        <div className='ContentTitle'>
            <h1 className='title'>Projects</h1>
            <h6 className='txt'>Here are a Collection of my on going, and Complete Projects</h6>
            
            <div className='Expln'>
                </div>
        </div>
        <div className='Content'>
            <h1 className='title'>SEC Form 4 Model</h1>
            <h6 className='txt'>This Project Applies a wide range of software utilities. The idead behinde this projects is to collect all for 4 filings in history and apply them along with many other factors into a linear regression model.
            The desired result is to gain insight into possible market outcomes in response to such trading activities.</h6>
            <br/>
            <br/>
            <hr />
            <h3 className='subHead'>Why SEC Form 4</h3>
            <h6 className='txt'>A form 4 filing, which is also Known as, the insider Transaction form, is explained by the SEC as;  "The federal securities laws require certain individuals
(such as officers, directors, and those that hold more
than 10% of any class of a company’s securities, together
we’ll call, “insiders”) to report purchases, sales, and
holdings of their company’s securities by filing Forms
3, 4, and 5. "</h6>
<br/>
            <br/>
            <hr />
            <h3 className='subHead'>What is the Goal</h3>
            <h6 className='txt'>The goal of this project is to create a model that can predict the market response to insider trading activity. The model will be trained on historical data and will be tested on a portion of that data aswell. The model will be trained on the following factors:</h6>
            <ul className='params'>
                <li className='param'>Insider Transaction</li>
                <li  className='param'>Market Cap</li>
                <li className='param'>Price</li>
                <li className='param'>Volume</li>
                <li className='param'>Insider Relation</li>
                <li className='param'>Insider Ownership %</li>
                <li className='param'>Insider Transaction Type</li>
                <li className='param'>Insider Transaction Date (within a year cycle)</li>
                <li className='param'>Insider Transaction Price</li>
                <li className='param'>Insider Transaction Shares before an after sale</li>
            </ul>
            
            <h6 className='txt'>In the future I hope to incorperate this model with another market sentiment project I have in the works.</h6>
            <br/>
            <br/>
            <hr />
            <h3 className='subHead'>What is the Current Status</h3>
            <h6 className='txt'>Recently the SEC changed their website over, so this has presented a set back
            but They have now presented historical data in a downloadable format which makes building the model much easir.
            However work will still have to be done to automate notifications and output upon new filings.</h6>
                

                <Link to='/SEC' className='morebtn'>See More</Link>
            <div className='Expln'>

                </div>
        </div>
        <Reddit/>
     </div>
   )
 }

 export default ProjectMain

