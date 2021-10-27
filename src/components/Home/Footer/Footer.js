import React, { useState, useRef } from "react";
import "./Footer.css";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "emailjs-com";
import { createNotification } from "../../Shared/Notify";
const Footer = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    name: "",
    message: "",
  });
  const form = useRef();
  //Form Change Value
  const formChange = (e) => {
    const valueName = e.target.name;
    const value = e.target.value;
    setFormValue({ ...formValue, [valueName]: value });
  };

  // Submit Contact form
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_auhhwli",
        "template_q71pdvw",
        form.current,
        "user_wkUA3K3NKqk77TbFuYl1b"
      )
      .then(
        (result) => {
          createNotification("success", result);
        },
        (error) => {
          createNotification("error", "Failed", "Someting went wrong!");
        }
      );
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
                  type="text"
                  name="email"
                  id=""
                  onChange={(e) => formChange(e)}
                  required
                />
                <input
                  placeholder="Enter name / company's name"
                  className="form-control my-3"
                  type="text"
                  name="name"
                  onChange={(e) => formChange(e)}
                  required
                />
                <textarea
                  placeholder="Your message"
                  className="form-control mb-3"
                  rows="7"
                  name="message"
                  onChange={(e) => formChange(e)}
                  required
                ></textarea>
                <button className="btn btn-dark send_btn" type="submit" id="">
                  Send <SiMinutemailer />
                </button>
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
