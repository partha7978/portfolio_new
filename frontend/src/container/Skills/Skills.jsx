import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "education"]';
    const skillsQuery = '*[_type == "skills"]';
    client.fetch(query).then((data) => {
      // console.log(data);
      setEducation(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Education</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1], y: [50, 0] }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {education?.map((education) => (
            <motion.div className="app__skills-exp-item" key={education.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{education.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="app__skills-exp-work"
                    data-for={education.institution}
                    key={education.institution}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={`${
                      education.specialization ? "Specialization : " : ""
                    } ${education.specialization ?? education.specialization}`}
                  >
                    <h4 className="bold-text">{education.institution}</h4>
                    <p className="p-text">{education.degree}</p>
                    {/* <p className="p-text">{education.specialization ? education.specialization : ''}</p> */}
                    <p style={{ fontWeight: "600" }} className="p-text">
                      {education.marks}
                    </p>
                  </motion.div>
                  <ReactTooltip className="skills-tooltip" id="my-tooltip" />
                </>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
