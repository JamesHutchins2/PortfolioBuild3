import React from 'react'
import Logo_western from './Logo_western.png'
import bg from '../../assets/BG.jpg'
import scotia from '../../assets/Scotia.jpg'
import './cont.css'
const Cont = () => {
  return (
    <div className="job-experience">
      <h1 className='head_title'>Work Experience</h1>

    <div className="job">
      <img src={scotia} alt="Scotiabank logo" className="logo" />
      <div className="job-details">
        <div className='job-head'>
        <h2 className="title">Analyst</h2>
        <h3 className="company">Scotiabank | Internship</h3>
        </div>
        <p className="duration-location">
          <span className="duration">May 2023 - Present · 2 months</span> | <span className="location">Toronto, Ontario, Canada · Hybrid</span>
        </p>
        <p className="description">
          As an Analyst at Scotiabank, I play a key role in product evaluation and strategy formulation. This includes a wide range of responsibilities such as conducting daily product pricing analysis and risk assessments, refining operational processes, conducting data analysis, managing large datasets and automating tasks. My work heavily involves leveraging Microsoft Excel functionalities to enhance productivity and accuracy. Overall, my aim is to consistently blend analytical rigor with strategic thinking to contribute significantly to Scotiabank's success.
        </p>
        <p className="skills">Skills: Microsoft Excel · Operational Improvement · Data Analysis · Virtual basic · Customer Relationship Management (CRM)</p>
      </div>
    </div>
  
    <div className="job">
      <img src={bg} alt="Blue Guardian logo" className="logo" />
      <div className="job-details">
        <div className='job-head'>
        <h2 className="title">Natural Language Processing Research Engineer</h2>
        <h3 className="company">Blue Guardian | Internship</h3>
        </div>
        <p className="duration-location">
          <span className="duration">Feb 2023 - May 2023 · 4 months</span> | <span className="location">London, Ontario, Canada · Remote</span>
        </p>
        <p className="description">
          As a Research Engineer at Blue Guardian, I worked with a highly skilled team to develop cutting-edge software solutions using advanced machine learning and natural language processing techniques. Our work was grounded on latest research studies, and involved the creation of proprietary software to explore and solve complex problems within the field of NLP. This experience has equipped me with a profound understanding of NLP, research methodologies, and software development.
        </p>
        <p className="skills">Skills: Machine Learning · Natural Language Processing (NLP) · Research · Software Development</p>
      </div>
    </div>
    <h1 className='head_title'>Education</h1>
   <div className="education-section">
   
  <div className="education">
    
    <div className="education-details">
      <h2 className="school-name">Western University</h2>
      <h3 className="degree">Bachelor's of Mechanical Engineering</h3>
      <p className="duration">Sep 2020 - Apr 2025</p>
      <p className="grade">Grade: 3.3</p>
      <p className="activities">Activities and societies: Algorithmic Trading Club, Western Real Estate Club</p>
    </div>
  </div>

  <div className="education">
    <div className="education-details">
      <h2 className="school-name">Western University</h2>
      <h3 className="degree">Bachelor's of Computer Science</h3>
      <p className="duration">Sep 2020 - Apr 2025</p>
      <p className="grade">Grade: 3.3</p>
      <p className="activities">Activities and societies: Algorithmic Trading Club, Western Real Estate Club</p>
    </div>
  </div>

</div>

</div>
  
  
  
  
  )
}

export default Cont
