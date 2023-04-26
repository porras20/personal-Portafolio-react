import React from 'react'
import ProjectItem from '../components/ProjectItem'
import '../styles/projects.css'
import {projectList} from '../helpers/ProjectsList'
export default function Projects() {
  return (
    <div className='projects'>
      <h1 className='projectTitle'>My personal projects</h1>
      <div className='projectList'>
      {projectList.map( ({name, image}, index) => {
        return <ProjectItem name={name} image={image} id={index} key={index}/>
      })}
      </div>
    </div>
  )
}
