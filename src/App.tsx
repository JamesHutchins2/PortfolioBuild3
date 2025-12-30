import './App.css'
import headshot from './assets/headshot_close.jpeg'

function App() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="headshot-container">
          <img 
            src={headshot} 
            alt="James Hutchins" 
            className="headshot" 
          />
        </div>
        <h1>James Hutchins</h1>
        <p className="bio">
          Developer passionate about building data apps, AI pipelines, and scalable software solutions.
        </p>
        
        <div className="contact-links">
          <a href="/JH_CV.pdf" download className="button">
            Download Resume
          </a>
          <a href="mailto:james.hutchins2@outlook.com" className="button">
            Email Me
          </a>
          <a href="https://github.com/JamesHutchins2" target="_blank" rel="noopener noreferrer" className="link">
            GitHub Profile
          </a>
        </div>
      </header>

      <main className="main-content">
        <section className="section startups-section">
          <h2>Startups</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Zenith Vision Analytics</h3>
              <p>Data analytics and software systems for small businesses specializing in marketing data.</p>
              <a href="https://www.zenithvision.ca/" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
            <div className="project-card">
              <h3>Dialogix Services Inc</h3>
              <p>Ed-tech startup focused on delivering educational solutions.</p>
              <a href="https://dialogix.ca/" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
          </div>
        </section>

        <section className="section projects-section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Baseball Data Analytics</h3>
              <p>A comprehensive portfolio of baseball data analysis and visualizations.</p>
              <a href="https://james-hutchins-baseball-portfolio.streamlit.app/" target="_blank" rel="noopener noreferrer">View App</a>
            </div>
            <div className="project-card">
              <h3>Charity CRM</h3>
              <p>Lead system for Canadian charities including a searchable charity database.</p>
              <a href="https://charitycrm-ividbyvjy6ybj9uyih4rac.streamlit.app/" target="_blank" rel="noopener noreferrer">View App</a>
            </div>
          </div>
        </section>

        <section className="section cv-section">
          <h2>Experience</h2>
          <div className="cv-item">
            <div className="cv-header">
              <h3>Dialogix Services Inc</h3>
              <span className="cv-date">June 2025 - Present</span>
            </div>
            <div className="cv-subheader">CTO | Toronto, Ontario</div>
            <ul>
              <li>Implemented CI/CD pipelines, automated tests, and version-controlled workflows ensuring dependable delivery.</li>
              <li>Led marketing and outreach operations, converting prospects into clients through value-focused messaging.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-header">
              <h3>Bank Of Montreal</h3>
              <span className="cv-date">Winter 2025</span>
            </div>
            <div className="cv-subheader">Data Analyst | Toronto, Ontario</div>
            <ul>
              <li>Built Python + Azure ETL pipelines with validation and data quality checks.</li>
              <li>Developed Power BI dashboards and SQL reporting for business partners.</li>
              <li>Automated repetitive workflows with cloud-based scripting.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-header">
              <h3>Zenith Vision Analytics</h3>
              <span className="cv-date">2024 - Present</span>
            </div>
            <div className="cv-subheader">Founder | Ontario, Canada</div>
            <ul>
              <li>Architected data pipelines and geospatial workflows translating data into actionable insights.</li>
              <li>Created interactive BI dashboards and semantic layers to clarify ROI.</li>
              <li>Applied ML models with structured feature engineering to support business recommendations.</li>
            </ul>
          </div>

          <div className="cv-item">
            <div className="cv-header">
              <h3>Vector Institute</h3>
              <span className="cv-date">Summer 2024</span>
            </div>
            <div className="cv-subheader">Generative AI Research Intern | London, Ontario</div>
            <ul>
              <li>Engineered PyTorch ML pipelines including data cleaning and feature engineering.</li>
              <li>Contributed to model development and evaluation in a high-expectation research environment.</li>
              <li>Managed and executed large-scale training runs on compute clusters.</li>
            </ul>
          </div>

          <h2>Education</h2>
          <div className="cv-item">
            <div className="cv-header">
              <h3>Western University</h3>
              <span className="cv-date">Graduated 2025</span>
            </div>
            <div className="cv-subheader">Bachelor of Science, Computer Science</div>
            <p>Dean’s Honour List</p>
          </div>

          <div className="cv-item">
            <div className="cv-header">
              <h3>Western University</h3>
              <span className="cv-date">Graduated 2024</span>
            </div>
            <div className="cv-subheader">Bachelor of Engineering Science, Mechanical and Materials Engineering</div>
            <p>Dean’s Honour List</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
