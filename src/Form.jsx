import React, { useState } from "react";
import "./style.css";
const Form = () => {
  return (
    <div>
      <div id="container"></div>
      <h1 align="center">Contact Form</h1>
      <div id="container1">
        <h2 id="title"> Get in touch with us</h2>
        <form id="form">
          <div id="input">
            <label htmlFor="fname" id="fullname">
              FULL NAME:{" "}
            </label>
            <label htmlFor="email" id="mail">
              EMAIL ADDRESS:
            </label>
          </div>

          <input type="text" name="fname" id="fname" placeholder="Name"></input>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
          ></input>
          <br />
          <label htmlFor="subject">SUBJECT: </label>
          <br />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          ></input>
          <br />
          <label htmlFor="message">MESSAGE: </label>
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
