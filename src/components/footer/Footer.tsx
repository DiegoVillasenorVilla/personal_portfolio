import React from "react";
import { Github, Linkedln } from "../../assets";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="main-footer">
      <hr className="horizontal-line" />
      <div className="main-footer_container">
        <h1>Diego Villaseñor Villa</h1>
        <div className="icons-footer_container">
          <a
            href="https://github.com/DiegoVillasenorVilla"
            style={{ cursor: "pointer" }}
          >
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/diego-villase%C3%B1or-villa-b653b822b/"
            style={{ cursor: "pointer" }}
          >
            <img src={Linkedln} alt="linkedin" />
          </a>
        </div>
      </div>
    </footer>
  );
};
