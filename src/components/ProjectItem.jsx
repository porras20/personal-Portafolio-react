import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function ProjectItem({image, name, id}) {
  const navigate = useNavigate()
  return (
    <div className='projectItem hvr-float-shadow' onClick={() => navigate(`/project/${id}`)}>
    <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  )
}
