import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import '../styles/Home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hola, soy Juan José</h2>
        <div className='prompt'>
          <p>
          "Transformar diseños en experiencias interactivas que cautivan y deleitan 
          a los usuarios, se logra con una línea de código a la vez."
          </p>
          <FaLinkedinIn/>
          <FaGithub/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
            ReactJS, HTML5, CSS3, Bootstrap, StyledComponets, Axios, Git, Github, TypeScript
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
            Mysql
            </span>
          </li>
          <li className='item'>
            <h2>Lenguajes</h2>
            <span>Php, Javascript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}
