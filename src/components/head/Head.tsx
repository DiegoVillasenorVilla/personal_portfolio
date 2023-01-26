import React from "react";
import { Github, Linkedln } from "../../assets/index";
import "./Head.css";

export const Head = () => {
  return (
    <div className="head-container">
      <h1 className="head-paragraph">Diego Villaseñor Villa</h1>
      <div className="rigth-container">
        <div className="icons-container">
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
    </div>
  );
};
