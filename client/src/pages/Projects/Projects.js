import React from "react";
import "../Projects/projects.css";
import Project1 from "../../assets/images/project1.png";

const Projects = () => {
  return (
    <>
      <div className=" project" id="projects">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h1>
        <hr />
        <p className="pb-3 text-center" style={{ fontSize: "1.3rem" }}>
          Here are my top few recent projects with live link and source code.
        </p>

        {/* Card Design */}
        <div className="row" id="ads">
          {/* Card  1 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1} alt="project1" />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-details-badge">Node</span>
                <span className="card-details-badge">Express</span>
                <span className="card-details-badge">React</span>
                <span className="card-details-badge">MongoDB</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    EasyShop E-Commerce Shopping App
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/dineshtogare268/mern-stack-ecommerce-app-2023"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* Card  2 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1} alt="project1" />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-details-badge">Node</span>
                <span className="card-details-badge">Express</span>
                <span className="card-details-badge">React</span>
                <span className="card-details-badge">MongoDB</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    EasyShop E-Commerce Shopping App
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/dineshtogare268/mern-stack-ecommerce-app-2023"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          {/* Card  3 */}
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Project1} alt="project1" />
              </div>

              <div className="card-image-overly m-auto mt-3">
                <span className="card-details-badge">Node</span>
                <span className="card-details-badge">Express</span>
                <span className="card-details-badge">React</span>
                <span className="card-details-badge">MongoDB</span>
              </div>

              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">
                    EasyShop E-Commerce Shopping App
                  </h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/dineshtogare268/mern-stack-ecommerce-app-2023"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Card Design */}
      </div>
    </>
  );
};

export default Projects;
