import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { TypeAnimation } from "react-type-animation";
import send from "../../assets/send.png";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div>
              <p className="p-text">
                Hello<span>👋</span>, I am
              </p>
              <h1 className="head-text">Partha Sarathi muduli</h1>
            </div>
            <div className="app__flex subHead">
              <hr></hr>
              <p className="head-subText">Frontend Engineer at Deloitte</p>
            </div>
            <div className="app__flex head-button">
              <a href="#contact" style={{ textDecoration: "none" }}>
                <button className="p-text app__flex">
                  Say Hello
                  <img src={send} alt="send" className="send-icon" />
                </button>
              </a>
            </div>
            {/* <div className="tag-cmp app__flex"> */}
            {/* <p className="p-text ">I love </p> */}
            {/* <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  500,
                  "Web Development",
                  500,
                  "React.js",
                  500,
                  "Open Source",
                  500,
                  "Gaming",
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 70 }}
                repeat={Infinity}
                className="p-text typed-text"
              /> */}
            {/* <p className="p-text">Web Developer</p>
            <p className="p-text">Competitive Coder</p> */}
            {/* </div> */}
          </div>
          <div className="header__image">
            <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  <stop id="stop1" stop-color="#030303" offset="0%"></stop>
                  <stop id="stop2" stop-color="#6b7688" offset="100%"></stop>
                </linearGradient>
              </defs>
              <mask id="mask" mask-type="alpha">
                <path
                  fill="url(#sw-gradient)"
                  d="M27.2,-31.8C35.1,-25.8,41.1,-17.1,43.3,-7.3C45.5,2.5,43.8,13.4,38.3,21.4C32.8,29.3,23.6,34.4,14.1,37.1C4.6,39.9,-5.1,40.3,-13.4,37.1C-21.8,34,-28.8,27.3,-34.4,19.1C-40.1,10.9,-44.3,1.2,-43.6,-8.5C-42.9,-18.2,-37.2,-27.9,-29.1,-33.8C-21,-39.8,-10.5,-42.1,-0.4,-41.6C9.7,-41.1,19.3,-37.8,27.2,-31.8Z"
                  width="100%"
                  height="100%"
                  transform="translate(50 50)"
                  stroke-width="0"
                  style={{ transition: "all 0.3s ease 0s" }}
                ></path>
              </mask>
              <g mask="url(#mask)">
                <path
                  fill="url(#sw-gradient)"
                  d="M27.2,-31.8C35.1,-25.8,41.1,-17.1,43.3,-7.3C45.5,2.5,43.8,13.4,38.3,21.4C32.8,29.3,23.6,34.4,14.1,37.1C4.6,39.9,-5.1,40.3,-13.4,37.1C-21.8,34,-28.8,27.3,-34.4,19.1C-40.1,10.9,-44.3,1.2,-43.6,-8.5C-42.9,-18.2,-37.2,-27.9,-29.1,-33.8C-21,-39.8,-10.5,-42.1,-0.4,-41.6C9.7,-41.1,19.3,-37.8,27.2,-31.8Z"
                  width="100%"
                  height="100%"
                  transform="translate(50 50)"
                  stroke-width="0"
                  style={{ transition: "all 0.3s ease 0s" }}
                ></path>
                <image
               // style={{
                //   filter: "grayscale(80%)",
               // }}
                  x="0"
                  y="-8"
                  width="110%"
                  height="110%"
                  href={images.profileImg}
                ></image>
              </g>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
