import React from "react";
import { useThame } from "../../context/ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "../Home/home.css";
import Fade from "react-reveal/Fade";
import Resume from "../../assets/docs/Dinesh_Togare_Resume.pdf";
import Typewriter from "typewriter-effect";

const Home = () => {
  const [theme, setTheme] = useThame();

  //Handle Theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        {/* Theme Button */}
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        {/* Theme Button */}

        <div className="container home-content">
          <Fade right>
            <h2>Hi 🙋‍♂️ I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer!",
                    "UI/UX Designer",
                    "Full Stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <div className="home-button">
            <a
              className="btn btn-hire"
              href="https:api.whatsapp.com/send?phone=8983617578"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>

            <a
              className="btn btn-cv"
              href={Resume}
              download="
            Dinesh Togare Resume.pdf
            "
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
