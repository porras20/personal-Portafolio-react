import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSchool } from "react-icons/fa";
import { MdWork } from "react-icons/md";
export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 -2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Servicio nacional de aprendizaje, Guadalajara de Buga
          </h3>
          <p>Tecnólogo en análisis y desarrollo de sistemas de información</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021 -2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Cervalle, Guadalajara de Buga
          </h3>
          <p>Como Auxiliar de Sistemas con experiencia en mesa de ayuda, he desarrollado habilidades 
          para brindar soluciones técnicas en tiempo y forma a los usuarios finales, con el fin de garantizar 
          la continuidad operativa de los sistemas. Mi capacidad de trabajo en equipo, mi orientación al 
          cliente y mi proactividad son cualidades que me permiten adaptarme a entornos de alta presión y 
          seguir aprendiendo constantemente en un entorno tecnológico en constante evolución.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Actualmente"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            Desarrollador Front End
          </h3>
          <p>Javascript, Typescript, React js, Redux Toolkit, Bootstrap </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Actualmente"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Creador de contenido
          </h3>
          <p>Soy un creador de contenido especializado en desarrollo web y me dedico a producir videos para Youtube 
          que abordan temas relacionados con esta área. Mi enfoque principal es enseñar a los espectadores cómo 
          construir sitios web, aplicaciones y otras herramientas digitales mediante tutoriales prácticos y entretenidos. 
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
