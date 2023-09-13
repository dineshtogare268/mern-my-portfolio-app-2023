import React from "react";
import "../About/about.css";
import Pulse from "react-reveal/Pulse";
import ProfileImage from "../../assets/images/profile-image.JPG";

const About = () => {
  return (
    <>
      <Pulse>
        <div className="about " id="about">
          <div className="row">
            <div className="col-md- col-xl-6 col-lg-6 col-xs-12  about-img">
              <img src={ProfileImage} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About Me</h1>
              <ul>
                <li>
                  {" "}
                  <p>
                    I am Dinesh R. Togare. I have 6+ years of working experience
                    in IT sector and 2+ years of working experience in Web
                    development using React, Redux, Javascript, Node JS, Express
                    JS, MongoDB , Material UI, Bootstrap, Git and Axios. I have
                    worked in different domains such as Retail, Ecommerce,
                    EdTech,Social and Insurance.
                  </p>
                </li>
                <li>
                  {" "}
                  <p>
                    I create successful websites that are fast, easy to use, and
                    built with best practice. I work to make a better web; one
                    that is fast,easy to use, beautiful,accessible to all, and
                    frustration-free.
                  </p>
                </li>
                <li>
                  <p>
                    Regardless of your specific business requirements, in
                    solving these challenges, you have a great chance of finding
                    success online.
                  </p>
                </li>
                <p>
                  <span style={{ fontWeight: "bold" }}>Name:</span> Dinesh R.
                  Togare
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
                  dineshtogare@gmail.com
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Phone:</span> 8983617578{" "}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </Pulse>
    </>
  );
};

export default About;
