import React, { useState, useEffect, Children } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState("");

  const { name, email, message } = formData;

  useEffect(() => {
    !messageValid || !emailValid
      ? setShowErrorMessage(
          `Enter a valid ${!emailValid ? "email" : ""} 
           ${!messageValid ? ", message" : ""}`
        )
      : setShowErrorMessage("");
  }, [formData, emailValid, messageValid]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, email, message, "form data");
    if (name === "email") {
      const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
      !isValid ? setEmailValid(false) : setEmailValid(true);
    } else if (name === "message") {
      value.length < 1 ? setMessageValid(false) : setMessageValid(true);
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };
  return (
    <>
      <h2 className="head-text app__footer">Chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto: parthasarathimuduli10@gmail.com" className="p-text">
            parthasarathimuduli10@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 7978640184" className="p-text">
            +91-7978640184
          </a>
        </div>
      </div>

      {/* form part */}
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              required
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>
          <div id="error-message">
            <p>{showErrorMessage}</p>
          </div>
          {email.length > 1 && !showErrorMessage && (
            <button type="button" className="p-text" onClick={handleSubmit}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          )}
        </div>
      ) : (
        <div>
          <h3 className="head-text"> Thank you for getting in touch.</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
