import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import contact from "../../assets/images/contact-us.avif";
import "./contact.css";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Handle submit Button

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });

      // Validation success
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" contact" id="contact">
        <h1 className="col-12 mt-3 mb-1 text-center text-uppercase">Contact</h1>
        <hr />
        <div className="card card0 border-0">
          <div className="row">
            {/* First Column md-6 */}
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row ">
                  <img src={contact} alt="contact" className="image" />
                </div>
              </div>
            </div>

            {/* Second Column md-6 */}
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row mb-4 social-icons ">
                    <h6>
                      Contact With : 👉
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/in/dinesh-r-togare-79b592104/"
                        target="_ blank"
                        rel="noopener noreferrer"
                      >
                        <BsLinkedin
                          color=" #0A66C2"
                          size={40}
                          className="ms-2 m-2"
                        />
                      </a>
                      {/* GitHub */}
                      <a
                        href="https://github.com/dineshtogare268"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub
                          color="#333333"
                          size={40}
                          className="ms-2 m-2"
                        />
                      </a>
                      {/* Twitter */}
                      <a
                        href="https://twitter.com/dineshtogare"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsTwitter
                          color="#00acee"
                          size={40}
                          className="ms-2 m-2"
                        />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  {/* Name  */}
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                      value={name}
                      onChange={(events) => setName(events.target.value)}
                    />
                  </div>

                  {/* Email  */}
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      value={email}
                      onChange={(events) => setEmail(events.target.value)}
                    />
                  </div>

                  {/* Textarea  */}
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="msg"
                      placeholder="Write your message"
                      className="mb-3"
                      value={msg}
                      onChange={(events) => setMsg(events.target.value)}
                    />
                  </div>

                  {/* Button */}
                  <div className="row px-3">
                    <button className="button" onClick={handleSubmit}>
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
