import React from "react";
import { ButtonLink } from "../buttonLink/ButtonLink";
import "./ImageHover.css";

interface ImageProps {
  images: string[];
  position: number;
  projectName: string;
  technologies: string;
  linkToProject?: string;
  linkToCode?: string;
}

export const ImageHover = ({
  images,
  position,
  projectName,
  technologies,
  linkToProject,
  linkToCode,
}: ImageProps) => {
  return (
    <div className="image-hover_container">
      <figure className="figure-image">
        <img src={images[position]} className="project-image" />
        <div className="hidden-button_container">
          <button className="button-contact_project">
            <a href={linkToProject}>View Project</a>
          </button>
          <button className="button-contact_code">
            <a href={linkToCode}>View Code</a>
          </button>
        </div>
      </figure>
      <div className="project-info_container">
        <p>{projectName.toUpperCase()}</p>
        <span>{technologies.toUpperCase()}</span>
      </div>
    </div>
  );
};
