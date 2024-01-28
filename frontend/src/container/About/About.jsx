import React, { useState, useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experience"]';
    client.fetch(query).then((data) => setExperience(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Work Experience</span> Section
      </h2>

      <motion.div
        className="experience__container"
        whileInView={{ y: [+100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {experience.map((experience, index) => (
          <React.Fragment key={experience?._id}>
            <div
              className={`experience__content ${
                index === 0 ? "align-top" : "align-bottom"
              }`}
            >
              <div className="experience__details">
                <div className="experience__header">
                  <div>
                    <img
                      src={urlFor(experience?.companyImage)}
                      alt={experience?.companyName}
                    />
                    <h3>{experience?.jobTitle}</h3>
                  </div>
                  <h4>
                    {experience?.startDate.split("-")[1] +
                      "/" +
                      experience?.startDate.split("-")[0]}{" "}
                    -{" "}
                    {typeof experience.endDate === "undefined"
                      ? "Present"
                      : experience?.endDate.split("-")[1] +
                        "/" +
                        experience?.endDate.split("-")[0]}
                  </h4>
                </div>
                <div className="topSkill__section">
                  <span>Key Skills : </span>
                  {experience?.skills?.map((item) => (
                    <motion.div
                      className="topSkill__item app__flex"
                      key={item._key}
                      initial={{ opacity: 0, y: 0 }}
                      whileInView={{
                        opacity: 1,
                        x: [+50, 0],
                        rotate: "720deg",
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        duration: 4,
                        type: "spring",
                        // delay: 0.7,
                      }}
                    >
                      <img
                        src={urlFor(item)}
                        alt="skill"
                        height={10}
                        width={30}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="experience__desc">
                  <span>{experience?.desc}</span>
                </div>
                <div className="experience__bar"></div>
              </div>
            </div>
            {index === 0 && <div className="bar"></div>}
          </React.Fragment>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "career",
  "app__primarybg"
);
