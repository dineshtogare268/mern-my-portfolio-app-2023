import React, { useState } from "react";
import "../Layout/layout.css";
import Home from "../../pages/Home/Home";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Menu from "../Menu/Menu";

function Layout() {
  const [toggle, setToggle] = useState(true);

  // Chnage toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <FaAngleDoubleLeft size={30} />
              ) : (
                <FaAngleDoubleRight size={30} />
              )}
            </p>
          </div>

          {/* Menus Section */}
          <Menu toggle={toggle} />
          {/* Menus Section */}
        </div>

        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}

export default Layout;
