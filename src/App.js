import './App.css';
import React, { useEffect } from 'react';

const skillsdata = ["https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png",
"https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png",
"https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png",
"https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png",
"https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"]
const skillsdata2=[
"https://seeklogo.com/images/1/net-logo-681E247422-seeklogo.com.png",
"https://seeklogo.com/images/F/flask-logo-44C507ABB7-seeklogo.com.png",
"https://seeklogo.com/images/M/microsoft-sql-server-logo-96AF49E2B3-seeklogo.com.png",
"https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"]

function App() {

  useEffect(() => {
    const handleNavClick = (event) => {
      event.preventDefault();

      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavClick);
    });
    return () => {
      // Cleanup event listeners when the component is unmounted
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);
  return (
    <div className='body'>
      <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
      <div className='full-screen-text' id="home">
      
      <h4>Hi , I am Sai Kiran Reddy, a <strong>full-stack software developer</strong> </h4>
      
      <h4>focused on creating responsive and user-friendly <strong>web applications</strong> </h4>
      
      <h4>while writing clean code.</h4>
      </div>

      <div className='full-screen-text section-2' id="projects">
        <h4 className='textcenter'>PROJECTS</h4>
        <div className='flex-class row'>
          <div className="card card-style col">
            <img className="cardimg" src="https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwd2luZSUyMGdsYXNzfGVufDB8fDB8fHww" alt="wine" />
            <div className="card-body">
              <h5 className="card-title">Wine Quality Prediction</h5>
              <p className="card-text">Made using Flask and Machine Learning Libraries.</p>
              <a href="https://github.com/saiyskr/DICStage3" target="_blank" rel="noreferrer" className="btn btn-primary">Project Link</a>
            </div>
          </div>
          <div className="card card-style col">
            <img className="cardimg" src="https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwd2luZSUyMGdsYXNzfGVufDB8fDB8fHww" alt="wine" />
            <div className="card-body">
              <h5 className="card-title">Wine Quality Prediction</h5>
              <p className="card-text">Made using Flask and Machine Learning Libraries.</p>
              <a href="https://github.com/saiyskr/DICStage3" target="_blank" rel="noreferrer" className="btn btn-primary">Project Link</a>
            </div>
          </div>
        </div>
      </div>

      <div className='full-screen-text section-3' id="skills">
      <h4 className='textcenter'>SKILLS</h4>
      <div className='row'>
      <h6 className='m-4'> Frontend:</h6>
      {skillsdata.map((url,index)=>{
        return(
          <>
          <img src={url} className="skill-icon col m-4 pl-2" alt="icon" />
          </>
        )
      })}
      </div>
      <div className='row'>
      <h6 className='m-4'> Backend:</h6>
      {skillsdata2.map((url,index)=>{
        return(
          <>
          <img src={url} className="skill-icon col m-4 pl-4" alt="icon" />
          </>
        )
      })}
      </div>
      </div>

      <div className='full-screen-text section-4' id = "contact">
      <h4>Contact Me</h4>

          <strong><i className="fas fa-envelope"></i> :</strong>
          <a href="mailto:syeruva2@buffalo.edu">syeruva2@buffalo.edu</a>
        
          <strong><i className="fas fa-phone"></i> :</strong>
          <a href="tel:+17169397219">+1 (716) 939-7219</a>
        
          <strong><i className="fab fa-linkedin"></i> :</strong>
          <a href="https://www.linkedin.com/in/saikiranreddyy/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
       
          <strong><i className="fab fa-github"></i> :</strong>
          <a href="https://github.com/saiyskr/" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        
          <strong>Address:</strong>
          Buffalo, New York , USA
        
      </div>
    </div>
  );
}

export default App;
