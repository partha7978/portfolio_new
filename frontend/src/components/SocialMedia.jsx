import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://github.com/partha7978" target="_blank" rel="noreferrer">
        <div>
          <AiFillGithub />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/partha-sarathi-muduli/" target="_blank" rel="noreferrer">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://www.instagram.com/parth.a___/" target="_blank" rel="noreferrer">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
