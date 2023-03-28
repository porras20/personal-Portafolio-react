import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { MdReorder } from "react-icons/md";
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
    const location = useLocation()
    const [expandNavbar, setExpandNavbar] = useState(false);

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])
    
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button 
                onClick={() => {setExpandNavbar(!expandNavbar)}}>
                <MdReorder/>
            </button>
        </div>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar