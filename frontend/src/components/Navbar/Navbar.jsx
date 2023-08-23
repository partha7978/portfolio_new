import React, { useState } from "react";

import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineContactMail, MdWorkOutline } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { motion } from "framer-motion";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="app__navbar">
        {/* using BEM methodology for className https://www.devbridge.com/articles/implementing-clean-css-bem-method/ */}
        <div className="app_navbar-logo">
          <span className="logo">Partha</span>
        </div>
        <ul className="app__navbar-links">
          {["Home", "About", "Project", "Skills", "Testimonial", "Contact"].map(
            (item) => (
              <li className="app__flex p-text" key={`link-${item}`}>
                <div />
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>

        {/* <div className="app__navbar-menu">
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
      </div> */}
      </nav>

      <nav className="app__navbar-menu">
        <div className="menubar__icon">
          <a href="#home">
            <HiOutlineHome />
          </a>

          <span className="menubar__text">Menu</span>
        </div>
        <div className="menubar__icon">
          <a href="#project">
            <MdWorkOutline />
          </a>
          <span className="menubar__text">Work</span>
        </div>
        <div className="menubar__icon">
          <a href="#skills">
            <BsCodeSlash />
          </a>
          <span className="menubar__text">Skill</span>
        </div>
        <div className="menubar__icon">
          <a href="#contact">
            <MdOutlineContactMail />
          </a>
          <span className="menubar__text">Contact</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
