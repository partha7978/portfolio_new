import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      {/* using BEM methodology for className https://www.devbridge.com/articles/implementing-clean-css-bem-method/ */}
      <div className="app_navbar-logo">
        <span className="logo">Partha</span>
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Project", "Skills","Testimonial", "Contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "About", "Project", "Skills","Testimonial", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
