import React from "react";
import { ButtonLink } from "../buttonLink/ButtonLink";
import{Github, Linkedln, Portrait} from "../../assets";
import "./Header.css";

export const Header = () => {
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-container_info">
          <p className="name-paragraph">Diego Villaseñor Villa</p>
          <h1 className="header-info_greetings">
            Nice to meet you! <br /> <strong> I'm Diego V.V</strong>
          </h1>
          <p className="presentation">
            Software engineer recently graduated from the University of Colima
            <br />
            looking for opportunities to develop professionally, I like
            technology, <br />
            programming, specifically the Front-end and UI. I am a responsible
            person, <br />I like challenges, I am competitive and I know how to
            work in a team.
          </p>
          <ButtonLink label="Contact Me" />
        </div>
        <div className="header-container_portrait">
          <div className="icons-container">
            <a href="https://github.com/DiegoVillasenorVilla" style={{cursor:"pointer"}}>
              <img src={Github} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/diego-villase%C3%B1or-villa-b653b822b/" style={{cursor:"pointer"}}>
              <img src={Linkedln} alt="linkedin" />
            </a>
          </div>
          <div>
            <img src={Portrait} className="portrait" />
          </div>
        </div>
      </div>
    </section>
  );
};
