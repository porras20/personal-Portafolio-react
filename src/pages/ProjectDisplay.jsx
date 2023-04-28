import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/ProjectsList';
import { GitHub } from '@mui/icons-material';
import { RemoveRedEye } from '@mui/icons-material'
import '../styles/ProjectsDisplay.css';
export default function ProjectDisplay() {
     const {id} = useParams();
     const project = projectList[id]
     
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image} alt="" />
        <p><b>Skills: </b>{project.skills}</p>
        <div className='icons'>
        <a href={project.repositorio} target='_black'><GitHub/></a>
        <a href={project.demo} target='__black'><RemoveRedEye/></a>     
        </div>
    </div>
  )
}
