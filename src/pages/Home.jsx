import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGit,
  FaHtml5,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiPhp,
  SiStyledcomponents,
  SiJavascript,
} from "react-icons/si";
import { DiMysql } from "react-icons/di";

import "../styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hola, soy Juan José</h2>
        <div className="prompt">
          <p>
            "Transformar diseños en experiencias interactivas que cautivan y
            deleitan a los usuarios, se logra con una línea de código a la vez."
          </p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/juan-jos%C3%A9-porras-0b4301236/"
              target="__blank"
            >
              <FaLinkedinIn className="hvr-grow-shadow" />
            </a>
            <a href="https://github.com/porras20" target="__blank">
              <FaGithub className="hvr-grow-shadow" />
            </a>
            <a href="https://www.youtube.com/@jupoweb3906" target="__blank">
              {" "}
              <FaYoutube className="hvr-grow-shadow" />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <div className="frontend_skills">
              <FaReact />
              <FaBootstrap />
              <SiTailwindcss />
              <FaHtml5 />
              <FaCss3 />
              <FaGit />
              <FaGithub />
              <SiRedux />
              <SiStyledcomponents />
            </div>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <div className="frontend_skills">
              <DiMysql />
            </div>
          </li>
          <li className="item">
            <h2>Lenguajes</h2>
            <div className="frontend_skills">
              <SiPhp />
              <SiJavascript />
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
