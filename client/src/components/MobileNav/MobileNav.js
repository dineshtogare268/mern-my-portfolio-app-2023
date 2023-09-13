import React, { useState } from "react";
import { ImMenu3, ImMenu4 } from "react-icons/im";
import "./mobileNav.css";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcVideoProjector,
  FcReadingEbook,
  FcBusinessContact,
} from "react-icons/fc";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //   Handle open
  const handleopen = () => {
    setOpen(!open);
  };

  //   Handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <ImMenu3
              size={30}
              className="mobile-nav-icon"
              onClick={handleopen}
            />
          ) : (
            <ImMenu4
              size={30}
              className="mobile-nav-icon"
              onClick={handleopen}
            />
          )}

          <span className="mobile-nav-title">My Portfolio </span>
        </div>

        {open && (
          /* Nav Items  */
          <div className="mobile-nav-menu">
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
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
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

          /* Nav Items */
        )}
      </div>
    </>
  );
};

export default MobileNav;
