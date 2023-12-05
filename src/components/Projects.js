import React from "react";
import '../styles/Projects.css'

function Projects(){
    return (
        <section id="portfolio" className="portfolio">
          <div className="container">
    
            <div className="section-title">
              <h2 className="text-center">Projects</h2>
            </div>
    
            <div className="row portfolio-container">
              {/* Example Portfolio Item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src="https://i.postimg.cc/MKDC5gVX/ARC.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Advanced Rescue Communications</h4>
                    {/* <p>App</p> */}
                    <div className="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" className="portfolio-details-lightbox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Repeat for other portfolio items... */}
            </div>
    
          </div>
        </section>
      );
    };


export default Projects;