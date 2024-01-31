import React, { useState } from "react";

import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineContactMail, MdWorkOutline } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdPersonOutline } from "react-icons/md";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { IoCodeSlashSharp } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
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
          {[
            "Home",
            "Career",
            "Project",
            "Skills",
            "Testimonial",
            "Contact",
          ].map((item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
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
        <a href="#home">
          <div className="menubar__icon">
            <AiOutlineHome />
            <span className="menubar__text">Home</span>
          </div>
        </a>
        <a href="#career">
          <div className="menubar__icon">
            <MdWorkOutline />
            <span className="menubar__text">Career</span>
          </div>
        </a>
        <a href="#project">
          <div className="menubar__icon">
            <TbDeviceDesktopCode />
            <span className="menubar__text">Project</span>
          </div>
        </a>
        <a href="#skills">
          <div className="menubar__icon">
            <IoCodeSlashSharp />
            <span className="menubar__text">Skill</span>
          </div>
        </a>
        <a href="#contact">
          <div className="menubar__icon">
            <FiSend />
            <span className="menubar__text">Contact</span>
          </div>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
