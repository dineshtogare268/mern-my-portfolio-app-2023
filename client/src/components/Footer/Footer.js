import React from "react";
import "./footer.css";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="footer  pb-3  ms-3">
        <div className="row text-center social-icons ">
          <h6>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/dinesh-r-togare-79b592104/"
              target="_ blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin color=" #0A66C2" size={40} className="ms-2 m-2" />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/dineshtogare268"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub color="#333333" size={40} className="ms-2 m-2" />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/dineshtogare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter color="#00acee" size={40} className="ms-2 m-2" />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/dinesh.togare1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook color="#3b5998" size={40} className="ms-2 m-2" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dinesh_togare/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram color="#ac2bac" size={40} className="ms-2 m-2" />
            </a>
          </h6>
        </div>
        <h4 className="text-center mt-3">
          Dinesh R. Togare &copy; 2023 || All Rights Reserved
        </h4>
      </div>
    </>
  );
};

export default Footer;
