import React from 'react';

const Home = () => {
  const handleViewResume = () => {
    window.open("https://drive.google.com/file/d/1dxGA56KFQBTMbJtow8Cr276AGRI8I07L/view?usp=sharing", '_blank');
  };

  return (
    <section className='home-section' id="home">
      <div className="content">
        <h3>Hi, I am <span>Sai Kiran Reddy</span>, a <strong>full-stack software developer</strong></h3>
        <h3>focused on creating responsive and user-friendly <strong>web applications</strong></h3>
        <h3>while writing clean code.</h3>
      </div>
      <br />
      <button className="btn btn-danger resume-btn m-5" onClick={handleViewResume}>
        View Resume
      </button>
    </section>
  );
};

export default Home;
