import React from 'react'
import Logo_western from './Logo_western.png'
import './cont.css'
const Cont = () => {
  return (
    <div className='contCan'>
      <ul className='OuterList'>
        <li className='oElem'>
            <h1 className='abtht'>Education</h1>
            <ul className='innerList'>
                
                <li className='iElem' >
                
                <h3 className='abth1'>Western University, London Ontario</h3>
                <br/>
                <div className='innerContent'>
                <img className = "img"src={Logo_western} alt="" />
                
                
                <br />
                <p>Bachelor's of Engineering Science, Mechanical Engineering 2020-2024</p>
                <p>Bachelor's of Science, Computer Science 2022-2025</p>
                </div>
                </li>
                

            </ul>
        </li>
        <li className='oElem'>
            <h1 className='abtht'>Work Experience</h1>
            
            <ul className='innerList'>
                <li className='iElem'>
                    <h1 className='abth1'>MBI Project Management, Guelph Ontario</h1>
                    <h3 className='pos'>Software developer & Carpenter</h3>
                    <br/>
                    <p> - Full stack development of automated inventory management system
                        .
                        <br/>
                        - Active problem solving, and innovative production optimization
                        <br/>
                        - On-site task management, and task delegation in cooperation with a team.
                        <br />
                        - Experience in producing cabinetry on an industrial scale.</p>
                </li>
                <li className='iElem'>
                    <h1 className='abth1'>Arbro Concrete Forming, Mount Foret Ontario</h1>
                    <h3 className='pos'>Former</h3>
                    <br/>
                    <p>- Long thirteen-hour days of intensive physical labor.</p>
                    
                    <p>- Worked on many residential, agricultural, and commercial concrete construction projects.</p>
                    
                    <p>- Experience in concrete forming, and concrete finishing.</p>

                </li>
                

            </ul>
        </li>
        


      </ul>
    </div>
  )
}

export default Cont
