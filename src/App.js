import './App.css';
import React, { useEffect } from 'react';
// import {skillsdata,skillsdata2,projectsData} from './constants';
import CustomProjectComponent  from './CustomProjectComponent';
export const skillsdata = [{title:"Angular",url:"https://seeklogo.com/images/A/angular-logo-B76B1CDE98-seeklogo.com.png"},
{title:"React",url:"https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"},
{title:"HTML",url:"https://seeklogo.com/images/H/html5-logo-EF92D240D7-seeklogo.com.png"},
{title:"CSS",url:"https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"},
{title:"Bootstrap",url:"https://seeklogo.com/images/B/bootstrap-logo-3C30FB2A16-seeklogo.com.png"},
{title:"JavaScript",url:"https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png"}
]
export const skillsdata2=[
  {title:"Microsoft .NET",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_tTVTwDKCfrAwAZ9l-J4Cag90SDH1UEfDA&usqp=CAU"},
  {title:"Flask",url:"https://www.ivaylopavlov.com/wp-content/uploads/2019/02/2Python_flask-1280x720.jpg"},
  {title:"SQL",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBTckS-0NPzDxWfqMgLfD_cyCZQmudUOkESiGU4DQ-Ng&s"},
  {title:"Python",url:"https://www.svgrepo.com/show/376344/python.svg"}
]

export const projectsData = [
  {
    title: 'Wine Quality Prediction',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1j7OyBgjdGZcShe7Hh_6s2DqYxNlT40w_4pItCqCq-g&s',
    // image :"https://media.istockphoto.com/id/1329437819/vector/vector-wine-glass-cheers-illustration.jpg?s=612x612&w=0&k=20&c=VteUpSeoiD2SO5D6w1Y3f9LPGE5exXInf9WR-Vb3rtE=",
    description: 'Made using Flask and Machine Learning Libraries.',
    link: 'https://github.com/saiyskr/DICStage3',
  },
  {
    title: 'Chatbot using Rasa NLU',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFenaAiBSPNEYFKDWNo9ziKvbPoqhnr1JxQ&usqp=CAU',
    description: 'Made using Angular and Python.',
    link: 'https://github.com/saiyskr/Chatbot',
  },
];

 

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
      <div className='row' style={{ height: '100vh' }}>
        {projectsData.map((project, index) => (
          <div key={index} className="col-md-6 mb-4">
            <CustomProjectComponent
              title={project.title}
              image={project.image}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>

      <div className='full-screen-text section-3' id="skills">
      <h4 className='textcenter'>SKILLS</h4>
      <div className='row'>
      <h5 className='m-4'> Frontend:</h5>
      {skillsdata.map((item,index)=>{
        return(
          <>
          <img src={item.url} title={item.title} className="skill-icon col m-4 pl-2" alt="icon" />
          </>
        )
      })}
      </div>
      <div className='row'>
      <h5 className='m-4'> Backend:</h5>
      {skillsdata2.map((item,index)=>{
        return(
          <>
          <img src={item.url} title={item.title} className="skill-icon col m-4 p-2" alt="icon" />
          </>
        )
      })}
      </div>
      </div>

      <div className='full-screen-text section-4' id = "contact">
      <h4>Contact Me</h4>

          <strong><i className="fas fa-envelope bigger-icon"></i> :</strong>
          <a href="mailto:syeruva2@buffalo.edu"><span>syeruva2@buffalo.edu</span></a>
        
          <strong><i className="fas fa-phone bigger-icon"></i> :</strong>
          <a href="tel:+17169397219"><span>+1 (716) 939-7219</span></a>
        
          <strong><i className="fab fa-linkedin bigger-icon"></i> :</strong>
          <a href="https://www.linkedin.com/in/saikiranreddyy/" target="_blank" rel="noopener noreferrer"><span>LinkedIn Profile</span></a>
       
          <strong><i className="fab fa-github bigger-icon"></i> :</strong>
          <a href="https://github.com/saiyskr/" target="_blank" rel="noopener noreferrer"><span>GitHub Profile</span></a>
        
          <strong>Address:</strong>
          Buffalo, New York , USA
        
      </div>
    </div>
  );
}

export default App;
