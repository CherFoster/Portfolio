import React, { useState } from "react";
import { projectDetails } from "./ProjectDetails";
import '../styles/Projects.css'
function Projects({ onHideOverlay }){
  const [selectedProject, setSelectedProject] = useState(null);

  function handleProjectClick(projectName) {
    const project = projectDetails.find(p => p.name === projectName);
    setSelectedProject(project);
  };

  return (
    <section id="portfolio" className="portfolio">
      {selectedProject ? (
        // Render the selected project's details
        <div className="portfolio-details">
          <button onClick={() => setSelectedProject(null)} className="btn btn-secondary my-5">
            Back
            </button>
          <div className="container">
            <h3 className="portfolio-title">{selectedProject.icon} {selectedProject.name}</h3>
            <div className="portfolio-info">
              <img alt='project-logo' className="project-image" src={selectedProject.image} />
              <p>{selectedProject.summary}</p>
              <p>{selectedProject.description}</p>
              <p>Technologies: {selectedProject.technologies}</p>
              <p>Check out my Github repository and video walkthrough:</p>
              <div className="project-links">
              <a href={selectedProject.github} className="github">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href={selectedProject.video} className="github">
                    <i class="bi bi-youtube"></i>
                  </a>
                
                  </div>
            </div>
          </div>
        </div>
      ) : (
        // Render the list of all projects
        <div className="container">
          <button onClick={onHideOverlay} className="btn btn-secondary details-button">Back</button>
          <div className="section-title">
            <h2 className="text-center text-white">Projects</h2>
          </div>
          <div className="row portfolio-container my-3">
            {projectDetails.map(project => (
              <div key={project.name} className="col-lg-4 col-md-4 portfolio-item" onClick={() => handleProjectClick(project.name)}>
                <div className="portfolio-wrap">
                  <img src={project.image} className="img-fluid" alt={project.name} />
                  <div className="portfolio-info">
                    <h4>{project.name}</h4>
                    <p>{project.summary}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;