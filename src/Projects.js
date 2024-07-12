import React from 'react';
import CustomProjectComponent from "./CustomProjectComponent";
import { WineSVG, ChatbotSVG } from './SVGComponents';

const projectsData = [
    {
      title: 'Fake News Detection using Deep Learning Models',
      svg: <WineSVG />,
      description: 'Made using PyTorch (Transformers,LSTMs and Attention mechanisms are used)',
      link: 'https://github.com/saiyskr/FakeNewsDetection',
    },
    {
        title: 'Wine Quality Prediction',
        svg: <WineSVG />,
        description: 'Made using Flask and Machine Learning Libraries.',
        link: 'https://github.com/saiyskr/DICStage3',
    },
    {
        title: 'Chatbot using Rasa NLU',
        svg: <ChatbotSVG />,
        description: 'Made using Angular and Python.',
        link: 'https://github.com/saiyskr/Chatbot',
    },
];

function Projects() {
    return (
        <section className='projects-section' id="projects">
            <h2 className='projects-section-header'>Some of my projects</h2>
            <div className='projects-grid'>
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <CustomProjectComponent
                            title={project.title}
                            svg={project.svg}
                            description={project.description}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
