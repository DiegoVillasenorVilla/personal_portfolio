import React from "react";
import { Form } from "../form/Form";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-main_container">
      <div className="contact-left_container">
        <p>Contact</p>
        <span>
          I would love to hear about your project and how I <br/> could help. Please
          fill in the form, and I’ll get back <br/> to you as soon as possible.
        </span>
      </div>
      <Form />
    </div>
  );
};
