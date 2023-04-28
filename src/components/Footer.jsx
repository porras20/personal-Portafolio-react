import React from 'react'
import {GrMail} from 'react-icons/gr'
import { FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <FaLinkedinIn/>
        <a href="mailto:juanjoseporras2019@gmail.com"><GrMail/></a>
        <FaGithub/>
        <FaYoutube/>
      </div>
      <p>&copy; 2023</p>
    </div>
  )
}
