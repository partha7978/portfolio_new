import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { TypeAnimation } from "react-type-animation";

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
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Partha</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text ">I love </p>
            <TypeAnimation
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
              speed={{type: 'keyStrokeDelayInMs', value: 70}}
              repeat={Infinity}
              className="p-text typed-text"
            />
            {/* <p className="p-text">Web Developer</p>
            <p className="p-text">Competitive Coder</p> */}
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profileImage} alt="profile_background" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {/* language icons will appear here as a floating icon */}
        {[images.react, images.javascript, images.html].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, "home");
