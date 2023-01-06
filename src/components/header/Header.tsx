import React from "react";
import portrait from "../../assets/img_cv.jpg";
import github from "../../assets/github.svg";
import linkedln from "../../assets/linkedln.svg";
import "./Header.css";

export const Header = () => {
  const link = "https://preguntarepuesta.com/crear-boton-html-actua-como-link";
  return (
    <section className="header-section">
      <div className="header-container">
        <div className="header-container_info">
          <h1>Diego Villaseñor Villa</h1>
          <p className="header-info_greetings">Nice to meet you!</p>
          <p className="header-info_name"> I'm Diego V.V</p>
          <p className="presentation">
            Software engineer recently graduated from the University of Colima
            <br />
            looking for opportunities to develop professionally, I like
            technology, <br />
            programming, specifically the Front-end and UI. I am a responsible
            person, <br />I like challenges, I am competitive and I know how to
            work in a team.
          </p>
          <button className="button_contact"> Contact Me</button>
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
