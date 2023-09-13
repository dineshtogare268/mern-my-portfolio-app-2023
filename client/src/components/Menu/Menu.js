import React from "react";
import "./menu.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcVideoProjector,
  FcReadingEbook,
  FcBusinessContact,
} from "react-icons/fc";
import ProfileImage from "../../assets/images/my-pic.png";
import { Link } from "react-scroll";

function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <>
          {/* Profile Picture */}
          <Zoom>
            <div className="navbar-profile-img">
              <img src={ProfileImage} alt="profile pic" />
            </div>
          </Zoom>
          {/* Profile Picture */}

          {/* Nav Items */}
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                {/* Home */}
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>

                {/* About */}
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>

                {/* Education */}
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>

                {/* Tech Stack */}
                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    {" "}
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>

                {/* Projects */}
                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>

                {/* Work Experience */}
                <div className="nav-link">
                  <Link
                    to="workexp"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcPortraitMode />
                    Work Experience
                  </Link>
                </div>

                {/* Contact  */}
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
          {/* Nav Items */}
        </>
      ) : (
        <>
          {/* Nav Items */}
          <div className="nav-items">
            <div className="nav-item" style={{ fontSize: "2rem" }}>
              {/* Home */}
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome title="Home" />
                </Link>
              </div>

              {/* About */}
              <div className="nav-link">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcAbout title="About" />
                </Link>
              </div>

              {/* Education */}
              <div className="nav-link">
                <Link
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcReadingEbook title="Education" />
                </Link>
              </div>

              {/* Tech Stack */}
              <div className="nav-link">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBiotech title="Tech Stack" />
                </Link>
              </div>

              {/* Projects */}
              <div className="nav-link">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcVideoProjector title="Projects" />
                </Link>
              </div>

              {/* Work Experience */}
              <div className="nav-link">
                <Link
                  to="workexp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcPortraitMode title="Work Experience" />
                </Link>
              </div>

              {/* Contact  */}
              <div className="nav-link">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcBusinessContact title="Contact" />
                </Link>
              </div>
            </div>
          </div>
          {/* Nav Items */}
        </>
      )}

      {/*       
      {toggle && (
        <div className="navbar-profile-img">
          <img src={ProfileImage} alt="profile pic" />
        </div>
      )} */}
    </>
  );
}

export default Menu;
