import React from 'react'
import dq from '../../assets/DataQuest.pdf'

import './experience.css';
let ClassificationProjects = () => {
    return(
        <div className = "classification">
            
                <h1>Classification Projects</h1>
                
                
<ul>
    <li className='list-item-projects'>
        <h3>Data Quest 2023 Hackathon</h3>
        <h4>At the Data Quest 2023 Hackathon, my partner and I tackled a mock business case, where we developed an algorithm to identify customers with a high likelihood of cancellation. Additionally, we proposed innovative solutions to mitigate this issue, leveraging the power of classification software.</h4>
        <br></br>
        <h4>For a deeper insight into our approach, please <a href={dq}>click here</a> to explore the code we developed for this project.</h4>
    </li>
    <br></br>
    <li className='list-item-projects'>
        <h3>Natrual Language Classification</h3>
        <h4>While at Blue Guardian Inc., my team and I harnessed the power of Google's BERT encoding systems and a variety of classification algorithms to construct a sophisticated mental health detection system. Our system accurately identifies individuals with a high likelihood of mental illness by analyzing their text messages and online post content. This innovative approach allows for early detection and intervention, potentially transforming lives.</h4>

    </li>
</ul>
            </div>
        
    )
}

export default ClassificationProjects;