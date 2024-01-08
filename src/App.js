import './App.css';
import React, { useEffect } from 'react';
// import {skillsdata,skillsdata2,projectsData} from './constants';
import Contact from './Contact';
import Skills from './Skills';
import Projects from './Projects';
import Home from './Home';

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
      {/* <img src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/416120378_2364014253804894_2691228165330858802_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=T8aB2xMMLKYAX-h_h2-&_nc_ht=scontent-lga3-1.xx&oh=00_AfBNW0pt7YHhrEoWBNFmRXyftBys7GVYrYueFuS4bqFnhA&oe=659A26A9' className='photo photo-img' alt='pic' /> */}
      <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
