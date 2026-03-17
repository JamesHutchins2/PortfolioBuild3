import './App.css'
import headshot from './assets/headshot_close.jpeg'
import { useEffect, useState } from 'react'

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      title: "Data Science Agent / MCP Service",
      description: "Agentic data science workflow that automates EDA, cleaning, feature engineering, model training/validation, and PCA. Uses an orchestrator-coder-validator pattern to produce reproducible Jupyter notebooks, auto-generated EDA reports, and exposes MCP tools for CSV-to-notebook runs.",
      link: "https://github.com/JamesHutchins2/Data-Science-Agent-MCP",
      linkText: "View on GitHub"
    },
    {
      title: "Appache Airflow ETL Pipeline",
      description: "A production-grade ETL system that ingests real estate listings and precomputed pool intelligence, performs large-scale data cleaning and validation, and delivers structured property insights to client-facing systems.",
      link: "https://github.com/JamesHutchins2/pool-intelligence-etl",
      linkText: "View on GitHub"
    },
    {
      title: "Baseball Data Analytics",
      description: "A comprehensive portfolio of baseball data analysis and visualizations.",
      link: "https://james-hutchins-baseball-portfolio.streamlit.app/",
      linkText: "View App"
    },
    {
      title: "Charity CRM",
      description: "Lead system for Canadian charities including a searchable charity database.",
      link: "https://charitycrm-ividbyvjy6ybj9uyih4rac.streamlit.app/",
      linkText: "View App"
    },
        {
      title: "Hotel Booking Prediction",
      description: "End-to-end machine learning workflow including data cleaning, exploratory analysis, feature engineering, model selection, hyperparameter tuning, and evaluation for hotel booking cancellation prediction. Completed for Data Quest Hackathon.",
      link: "https://github.com/JamesHutchins2/Data_Quest2023",
      linkText: "View on GitHub"
    },
    {
      title: "Wind Energy Mass Flow Analysis",
      description: "Engineering capstone project calculating expected wind conditions for a novel wind energy device using pressure, temperature, and wind speed data to study potential energy generation opportunity.",
      link: "https://github.com/JamesHutchins2/MassFlowAnalysis",
      linkText: "View on GitHub"
    },
    {
      title: "NHL Chat Bot & Draft Prediction",
      description: "Heuristic-based chatbot with natural language interaction for NHL player statistics and draft predictions.",
      link: "https://github.com/JamesHutchins2/Western_AI_NHL_Module/tree/main/NHL_Chat_Bot_Master",
      linkText: "View Chatbot on GitHub"
    },
    {
      title: "NHL Draft Prediction System",
      description: "Full-stack ML application with REST API and Azure SQL database providing NHL player stats and draft position predictions. Features 6 ensemble models (81% accuracy) with React frontend.",
      link: "https://github.com/JamesHutchins2/NHLfinalBuild",
      linkText: "View on GitHub"
    },
    {
      title: "Promptadigm",
      description: "An Electron app designed to help with AI chat and prompting tools. Create structured prompt templates and fill them out like forms for repeatable, well-structured prompting. Export prompts to JSON format for improved token usage.",
      link: "https://github.com/JamesHutchins2/Promptadigm",
      linkText: "View on GitHub"
    },
  ];

  const totalSlides = Math.ceil(projects.length / 2);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <span className="nav-logo">James Hutchins</span>
          <div className="nav-links">
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('startups')} className="nav-link">Startups</button>
            <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
            <button onClick={() => scrollToSection('education')} className="nav-link">Education</button>
            <a href="https://github.com/JamesHutchins2" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="GitHub Profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>

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
                <div className="contact-links">
          <a href="/JamesHutchins_CV.pdf" download className="button">
            Download Resume
          </a>
          <a href="mailto:james.hutchins2@outlook.com" className="button">
            Email Me
          </a>
          <a href="https://github.com/JamesHutchins2" target="_blank" rel="noopener noreferrer" className="link">
            GitHub Profile
          </a>
        </div>
        <h2>Professional Summary</h2>
        <p style={{ maxWidth: '50%' }}>
          I am a full-stack software developer and data engineer with dual degrees in Computer Science and Mechanical Engineering. I specialize in building artificial intelligence agent systems, engineering robust data pipelines, and deploying scalable web applications. Drawing on my experience as a startup founder and enterprise data analyst, I focus on translating complex technical requirements into reliable production software. My primary objective is always to solve tangible business problems, automate operational workflows, and drive measurable financial value.
        </p>
        

      </header>

      <main className="main-content">
        <section id="projects" className="section projects-section">
          <h2>Projects</h2>
          <div 
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <button className="carousel-button carousel-button-prev" onClick={prevSlide} aria-label="Previous">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            
            <div className="carousel-wrapper">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="carousel-slide">
                    {projects.slice(slideIndex * 2, slideIndex * 2 + 2).map((project, idx) => (
                      <div key={idx} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.linkText}</a>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <button className="carousel-button carousel-button-next padding-2" onClick={nextSlide} aria-label="Next">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="carousel-indicators">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="startups" className="section startups-section">
          <h2>Startups</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Dialogix Services Inc</h3>
              <p className="role-tag">Role: CTO</p>
              <p>Ed-tech startup focused on delivering educational solutions.</p>
              <a href="https://dialogix.ca/" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
            <div className="project-card">
              <h3>Zenith Vision Analytics</h3>
              <p className="role-tag">Role: Founder</p>
              <p>Data analytics and software systems for small businesses specializing in marketing data.</p>
              <a href="https://www.zenithvision.ca/" target="_blank" rel="noopener noreferrer">Visit Website</a>
            </div>
            {/* <div className="project-card">
              <h3>Verbee</h3>
              <p className="role-tag">Role: Founder</p>
              <p>Function as a Service (FaaS) providing a transcription + LLM pipeline for generating high-accuracy transcripts in specific formatting configurations designed for the legal industry. Uses LLM steps to refine and identify issues in VAD and diarization processes, with automatic speaker detection and name assignment.</p>
            </div> */}
          </div>
        </section>

        <section id="education" className="section cv-section">
          <h2>Education</h2>
          <div className="cv-item">
            <div className="cv-header">
              <h3>Western University</h3>
              <span className="cv-date">Graduated 2025</span>
            </div>
            <div className="cv-subheader">Bachelor of Science, Computer Science</div>
            <p>Dean's Honour List</p>
          </div>

          <div className="cv-item">
            <div className="cv-header">
              <h3>Western University</h3>
              <span className="cv-date">Graduated 2024</span>
            </div>
            <div className="cv-subheader">Bachelor of Engineering Science, Mechanical and Materials Engineering</div>
            <p>Dean's Honour List</p>
          </div>
        </section>

<section className="experience-section">
  <h2>Experience</h2>

  {/* Reverse-chronological order: most recent first (standard + easiest to scan). */}
  <div className="cv-item">
    <div className="cv-header">
      <h3>Dialogix Services Inc</h3>
      <span className="cv-date">June 2025 - Present</span>
    </div>
    <div className="cv-subheader">CTO | Toronto, Ontario</div>
    <ul>
      <li>Built standardized CI/CD pipelines on Google Cloud to accelerate deployments and ensure system reliability.</li>
      <li>Managed deployment and infrastructure through Google Cloud Platform to maintain high application uptime.</li>
      <li>Implemented automated testing and quality gates to minimize regressions and increase release confidence.</li>
      <li>Engineered structured logging and error detection workflows to accelerate issue discovery during support.</li>
      <li>Co-authored and shipped a production web application currently used by the Ivey Business School.</li>
      <li>Maintained live production codebases by rapidly triaging issues, executing QA, and delivering bug fixes.</li>
      <li>Collaborated with stakeholders to translate complex business requirements into shipped production code.</li>
    </ul>
  </div>

  <div className="cv-item">
    <div className="cv-header">
      <h3>Bank Of Montreal</h3>
      <span className="cv-date">Winter 2025</span>
    </div>
    <div className="cv-subheader">Data Analyst | Toronto, Ontario</div>
    <ul>
      <li>Partnered with internal stakeholders to drive data quality analytics and issue triage operations.</li>
      <li>Built Python and Azure ETL pipelines with strict validation rules to improve downstream data reliability.</li>
      <li>Developed Power BI dashboards and SQL reporting to surface operational trends for business partners.</li>
      <li>Automated enterprise workflows with cloud scripts, directly reducing manual labor and accelerating delivery.</li>
      <li>Optimized data validation pipelines processing 500 million rows daily, focusing on system robustness.</li>
    </ul>
  </div>

  <div className="cv-item">
    <div className="cv-header">
      <h3>Zenith Vision Analytics</h3>
      <span className="cv-date">2024 - Present</span>
    </div>
    <div className="cv-subheader">Founder | Ontario, Canada</div>
    <ul>
      <li>Built an AI agent orchestrator using LangChain and MCP to automate customer support workflows.</li>
      <li>Developed voice copilots that reduced manual onboarding and support labor for business owners.</li>
      <li>Shipped a functional AI platform to paying customers, driving revenue and lowering operational costs.</li>
      <li>Built AWS Apache Airflow pipelines for automated data collection, quality validation, and scheduling.</li>
      <li>Engineered PostgreSQL databases to support complex data ingestion, enrichment, and analytics workloads.</li>
      <li>Processed TB-scale imagery datasets using YOLO and SAM computer vision models to generate structured data.</li>
      <li>Created geospatial datasets by cleaning data from multiple sources to enable property insights.</li>
      <li>Implemented PostgreSQL vector search to power product comparison workflows and improve matching relevance.</li>
      <li>Delivered BI dashboards that translated collected data into actionable recommendations and ROI clarity.</li>
    </ul>
  </div>

  <div className="cv-item">
    <div className="cv-header">
      <h3>Vector Institute</h3>
      <span className="cv-date">Summer 2024</span>
    </div>
    <div className="cv-subheader">Generative AI Research Intern | London, Ontario</div>
    <ul>
      <li>Engineered PyTorch machine learning pipelines for dataset preparation, feature engineering, and training.</li>
      <li>Leveraged transformer and diffusion models to decode participant EEG signals into generated images.</li>
      <li>Managed large-scale model training runs on compute clusters with strict monitoring and quality controls.</li>
      <li>Collaborated with researchers to iterate quickly on hypotheses, baselines, and ablation comparisons.</li>
    </ul>
  </div>

  <div className="cv-item">
    <div className="cv-header">
      <h3>Blue Guardian</h3>
      <span className="cv-date">Winter 2023</span>
    </div>
    <div className="cv-subheader">Machine Learning NLP R&amp;D Intern | London, Ontario</div>
    <ul>
      <li>Built a BERT natural language pipeline to detect risk signals for a live mobile software application.</li>
      <li>Enhanced text classification by upgrading traditional statistical models to a transformer architecture.</li>
      <li>Curated training datasets and documentation to ensure reliable model retraining and quality control.</li>
    </ul>
  </div>

  <div className="cv-item">
    <div className="cv-header">
      <h3>Scotiabank</h3>
      <span className="cv-date">Summer 2023</span>
    </div>
    <div className="cv-subheader">Small Business Analyst | Toronto, Ontario</div>
    <ul>
      <li>Performed financial risk assessments by analyzing cash flow, industry trends, and client documentation.</li>
      <li>Improved data consistency for credit pricing reporting by implementing strict validation processes.</li>
      <li>Built VBA automation to standardize customer assessments, reducing manual effort across the analytics team.</li>
      <li>Produced pricing recommendations and competitive research briefs to support underwriting decisions.</li>
    </ul>
  </div>
  
</section>



      </main>
      </div>
        <footer className="footer-bar">
        <div className="footer-content">
          <span className="nav-logo">&copy; {new Date().getFullYear()} James Hutchins</span>
          <div className="nav-links">
            <a href="mailto:james.hutchins2@outlook.com" className="nav-link">Email</a>
            <a href="https://github.com/JamesHutchins2" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link">Back to Top &uarr;</button>
          </div>
        </div>
      </footer>
      
    </>
  )
}

export default App
