import React, { useState, useRef } from "react";
import "./Footer.css";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "emailjs-com";
import { createNotification } from "../../Shared/Notify";
import spinner from "../../../images/icons/spinner.gif";
const Footer = () => {
  const form = useRef();
  const [showSpin, setShowSpin] = useState(false);

  // Submit Contact form
  const sendEmail = (e) => {
    setShowSpin(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_auhhwli",
        "template_q71pdvw",
        form.current,
        "user_wkUA3K3NKqk77TbFuYl1b"
      )
      .then((result) => {
        setShowSpin(false);
        createNotification("success", "Successfully", "Thank for Message me ❤❤");
        setTimeout(() => {
          createNotification(
            "info",
            "Reply_auto",
            "I will reply as soon as possible."
          );
        }, 2000);
      })
      .catch((error) => {
        setShowSpin(false);
        createNotification("error", "Failed", "Someting went wrong!");
      });
  };
  return (
    <footer id="contact">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-4">
            <h2 className="titleHeading">
              Let us handle your
              <br />
              project, professionally.
            </h2>
            <p className="paragraph">
              With well written codes we build amazing app for of <br />
              planforms mobile and web app in geheral
            </p>
          </div>
          <div className="col-md-7">
            <div className="container">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  placeholder="Enter email address"
                  className="form-control "
                  type="email"
                  name="from_email"
                  required
                />
                <input
                  placeholder="Enter name / company's name"
                  className="form-control my-3"
                  type="text"
                  name="from_name"
                  required
                />
                <textarea
                  placeholder="Your message"
                  className="form-control mb-3"
                  rows="7"
                  name="message"
                  required
                ></textarea>
                {showSpin ? (
                  <button className="btn btn-dark send_btn" type="text">
                    <img
                      style={{ width: "30px", margin: "auto" }}
                      src={spinner}
                      alt="spinner"
                    />
                  </button>
                ) : (
                  <button className="btn btn-dark send_btn" type="submit">
                    Send
                    <SiMinutemailer />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
        <p className="text-center pt-5 mt-3 text-secondary">
          <small>copyright @mamun13525 Dev {new Date().getFullYear()}</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
