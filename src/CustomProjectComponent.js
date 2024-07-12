// CustomProjectComponent.jsx
import React from 'react';

function CustomProjectComponent({ title, svg, description, link }) {
    return (
        <div className="project-card-content">
            <div className="project-svg">
                {svg}
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default CustomProjectComponent;
