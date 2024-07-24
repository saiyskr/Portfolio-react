import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const handleViewResume = () => {
    window.open("https://drive.google.com/file/d/1dxGA56KFQBTMbJtow8Cr276AGRI8I07L/view?usp=sharing", '_blank');
  };

  return (
    <section className='home-section' id="home">
      <div className="content">
        <h3>
          Hi, I am <span>Sai Kiran Reddy</span>, a{' '}
          <strong>
            <Typewriter
              words={['full-stack software developer', 'enthusiastic coder', 'tech enthusiast']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </strong>
        </h3>
        <h3>
          focused on creating responsive and user-friendly{' '}
          <strong>
            <Typewriter
              words={['web applications','software solutions']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </strong>
        </h3>
        <h3>while writing clean code.</h3>
      </div>
      <br />
      <button className="btn btn-danger m-5" onClick={handleViewResume}>
        View Resume
      </button>
    </section>
  );
};

export default Home;
