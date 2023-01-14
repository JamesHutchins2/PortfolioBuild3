//import 
import React from 'react';
import './sec.css';

import Navbar from '../navbar/navbar';
import diagram from '../../assets/sec.png';
const SEC =  () => {
    return(
        <div className = "modal">
            <Navbar/>
            <div className = "modal-content">
                <h1>SEC</h1>
                <br />
                <br />
                <div className='archetecture'>
                <div className='text'>
                    <p className='h'>In this Figure I outline the general architecture of the data system. This is simply the Analysis setup, and it does not include the front end interaction component of the program.
                    The front end application Will be implemented using the layed out program as an API reference. This will be done using Express and react JS.</p>
                </div>
                <div className='image'>
                    <img src={diagram} alt="logo" className='diag' />

                </div>


                </div>
                    
                </div>
                <div className='data'>
                <h1 className='hd'>Mass Data</h1>
                <br />
                <br />
                    <div>
                        <p className='h'>
                            The data set for this project constists of around 6,000,000 XML files all with slight changes, espeicaly for which came before 2003. This has posed some trouble, hopwever progeress has been made. If it becomes required I am currently
                            developing my skills with the NLTK (Natrual Language Tool Kit) library in python. This library is used for natural language processing, and I believe it will be useful in the future for this project if so required. I hope to soon start to implement the stock data portion of this project which will allow me to start training models.

                        </p>
                        <br />
                        <br />
                        <a className='btnf'href="https://github.com/JamesHutchins2/SEC-Form4Model/tree/main/exploritory/FileData/parsingData">Repository</a>
                    </div>
                </div>
                
            
        </div>
    )
}

export default SEC;