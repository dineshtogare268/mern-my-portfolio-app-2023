import React from "react";
import "../TechStack/techstack.css";
import { TechStackList } from "../../Utils/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className=" techstack" id="techstack">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h1>
        <hr />
        <p className="pb-3 text-center" style={{ fontSize: "1.1rem" }}>
          👉 Including Programming Languages , Frameworks , Databases ,
          Front-End and Back-End tools and APIs 👈
        </p>

        <div className="row">
          {TechStackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
