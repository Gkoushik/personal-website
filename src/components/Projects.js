import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description of your first project.',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'Description of your second project.',
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Description of your third project.',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} className="project-link">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects; 