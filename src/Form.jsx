import React, { useState } from "react";
import "./style.css";
const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    onSubmit(formData);
  };
  return (
    <div>
      <div id="container"></div>
      <h1 align="center">Contact Form</h1>
      <div id="container1">
        <h2 id="title"> Get in touch with us</h2>
        <form id="form" onClick={handleSubmit}>
          <div id="input">
            <label htmlFor="fname" id="fullname">
              FULL NAME:
            </label>
            <label htmlFor="email" id="mail">
              EMAIL ADDRESS:
            </label>
          </div>

          <input
            type="text"
            name="fullName"
            id="fname"
            value={formData.fullName}
            placeholder="Name"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="subject">SUBJECT: </label>
          <br />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          ></input>
          <br />
          <label htmlFor="message">MESSAGE: </label>
          <br />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default Form;
