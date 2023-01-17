import React from "react";
import "./ButtonLink.css";

interface ButtonProps {
  label: string;
  link?: string;
}

export const ButtonLink = ({ label, link }: ButtonProps) => {
  return (
    <>
      <button className="button_contact">
        <a href={link}>{label}</a>
      </button>
    </>
  );
};
