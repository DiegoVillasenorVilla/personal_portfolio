import React from "react";
import { ButtonLink } from "../buttonLink/ButtonLink";
import portrait from "../../assets/img_cv.jpg";
import github from "../../assets/github.svg";
import linkedln from "../../assets/linkedln.svg";
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
            <a>
              <img src={github} alt="github" />
            </a>
            <a>
              <img src={linkedln} alt="linkedin" />
            </a>
          </div>
          <div>
            <img src={portrait} className="portrait" />
          </div>
        </div>
      </div>
    </section>
  );
};
