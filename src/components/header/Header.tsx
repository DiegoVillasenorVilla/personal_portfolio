import React from "react";
import { ButtonLink } from "../buttonLink/ButtonLink";
import { Github, Linkedln, Portrait } from "../../assets";
import "./Header.css";

export const Header = () => {
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-container_info">
          <h1 className="header-info_greetings">
            Nice to meet you! <br /> <strong> I'm Diego V.V</strong>
          </h1>
          <p className="presentation">
            Based in the UK, I’m a front-end developer <br /> passionate about
            building accessible web <br /> apps that users love.
          </p>
          <ButtonLink label="Contact Me" />
        </div>
        <div className="header-container_portrait">
          <div>
            <img src={Portrait} className="portrait" />
          </div>
        </div>
      </div>
    </section>
  );
};
