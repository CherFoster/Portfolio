import React from "react";
import '../styles/Projects.css'

function Projects({ onHideOverlay }){
    return (
        <section id="portfolio" className="portfolio">
            <button onClick={onHideOverlay} className="btn btn-secondary">
          Back
        </button>
          <div className="container">
    
            <div className="section-title">
              <h2 className="text-center text-white">Projects</h2>
            </div>
    
            <div className="row portfolio-container my-3">
              <div className="col-lg-4 col-md-4 portfolio-item">
                <div className="portfolio-wrap">
                  <img src="https://i.postimg.cc/MKDC5gVX/ARC.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Advanced Rescue Communications</h4>
                    <p>A web application designed to assist in the communication of rescue teams during emergencies.</p>
                  </div>
                </div>
                <p className="my-4">JavaScript, React, Python, Flask, Redux, Bootstrap, Formik, Bcrypt, HTML, CSS</p>
              </div>

              <div className="col-lg-4 col-md-4 portfolio-item">
                <div className="portfolio-wrap">
                  <img src="https://i.postimg.cc/nz5LGyJh/Bookhub-1.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>BookHub</h4>
                    <p>A user-centric platform for discovering, managing, and reviewing books</p>
                  </div>
                </div>
                <p className="my-4">JavaScript, React, Python, Flask, Bootstrap, Formik, Bcrypt, HTML, CSS</p>
              </div>

              <div className="col-lg-4 col-md-4 portfolio-item">
                <div className="portfolio-wrap">
                  <img src="https://i.postimg.cc/nz66X6Sf/airbook.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>AirBook</h4>
                    <p>A command-line application for viewing and managing flight, passenger, and reservation details, including creating and deleting reservations</p>
                  </div>
                </div>
                <p className="my-4">Python, SQL, SQLAlchemy, Alembic</p>
              </div>

              {/* <div className="col-lg-4 col-md-4 portfolio-item">
                <div className="portfolio-wrap">
                  <img src="https://i.postimg.cc/MKDC5gVX/ARC.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Advanced Rescue Communications</h4>
                    <p>A web application designed to assist in the communication of rescue teams during emergencies.</p>
                  </div>
                </div>
                <p className="my-4">dfsdf</p>
              </div> */}
  
            </div>
    
          </div>
        </section>
      );
    };


export default Projects;