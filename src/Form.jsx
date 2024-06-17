import React from "react";
import "./style.css";
const Form = () => {
  return (
    <div>
      <div id="container"></div>
      <h1 align="center">Contact Form</h1>
      <div id="container1">
        <h2 id="title"> Get in touch with us</h2>
        <form id="form">
          <label for="fname">FULL NAME: </label>
          <label for="email">EMAIL ADDRESS: </label>
          <br />
          <input type="text" name="fname" id="fname" placeholder="Name"></input>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          ></input>
          <br />
          <label for="subject">SUBJECT: </label>
          <br />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          ></input>
          <br />
          <label for="message">MESSAGE: </label>
          <br />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <br />
        </form>

        <button>Send Message</button>
      </div>
    </div>
  );
};
export default Form;
