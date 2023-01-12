import React from "react";
import { ButtonLink } from "../buttonLink/ButtonLink";
import "./ImageHover.css";

interface ImageProps {
  images: string[];
  position: number;
  projectName: string;
  technologies: string;
}

export const ImageHover = ({
  images,
  position,
  projectName,
  technologies,
}: ImageProps) => {
  return (
    <div className="image-hover_container">
      <figure className="figure-image">
        <img src={images[position]} className="project-image" />
        <div className="hidden-button_container">
          <ButtonLink label="View Project" />
          <ButtonLink label="View Code" />
        </div>
      </figure>
      <div className="project-info_container">
        <p>{projectName}</p>
        <span>{technologies}</span>
      </div>
    </div>
  );
};
