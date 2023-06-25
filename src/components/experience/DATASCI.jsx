import React from 'react'


import './experience.css';
let DATASCI = () => {
    return(
        <div className = "modal">
            <div className = "modal-content">
                <div className='multi-media'>
                <h1 className='title'>NHL Chat Bot</h1>
                <h4>At the 2023 Canadian Undergraduate Conference on AI (<a href='https://www.cucai.ca/'>CUCAI</a>), my team from Western AI and I proudly presented a full-stack web application featuring a retrieval-based chatbot. This innovative chatbot is capable of referencing NHL statistics and utilizes advanced classification technologies to accurately predict the draft round for prospects.</h4>
                <br></br>
                <br></br>
                <h4>For a hands-on experience of our project, I invite you to watch a demo video posted by one of our esteemed team members, Ethan O'Brian. Discover how we're pushing the boundaries of AI in the world of sports analytics.</h4>
                <br></br>
                <div className='video'>
                <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7038609210758086657" height="879" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                </div>
                </div>
            </div>
        </div>
    )
}

export default DATASCI;