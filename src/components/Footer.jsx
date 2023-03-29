import React from 'react'
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <MdFacebook/>
        <FaInstagram/>
        <FaLinkedinIn/>
        <FaGithub/>
        <FaYoutube/>
      </div>
      <p>&copy; 2023</p>
    </div>
  )
}
