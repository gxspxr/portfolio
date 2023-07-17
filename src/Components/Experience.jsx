import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";
import {SiRedux, SiTailwindcss, SiReact, SiTypescript, SiJavascript, SiCss3, SiNodedotjs, SiMysql, SiHtml5,SiExpress, SiSequelize, SiFigma, SiCplusplus } from "react-icons/si"
const Experience = () => {
  return (
    <section id="exp" className='flex  h-full bg-base2 flex-col'>
      <div className='ml-[6%] my-auto mb-[5%]'>
    <h1 className='text-5xl text-white' >Experiencia<span className='text-secondary'>/</span><span className='text-secondary'>&gt;</span></h1>
      <VerticalTimeline lineColor='#131221'>
        <VerticalTimelineElement className='vertical-timeline-element--experience text-white'
        iconStyle={{background:"#131221", color:"#fff"}} icon={<FaSuitcase/>} date='Mayo 2023 - actualidad'
        >
          <div className='text-black'><h3 className='text-black'>Makisan Tech</h3>
          <p className=' text-transparent bg-clip-text bg-gradient-to-l from-cyan-300 via-cyan-700 to-cyan-900 italic'>Desarrollador Front-end</p><br />
          <h6 className='text-black'>Me desempeño en un equipo de 6 personas como front-end developer, trabajando en proyectos asignados por la empresa, 
          utilizando Vite, Redux-toolkit, tailwind, figma y TypeScript. </h6><br />
          <h6 className='gap-[1%] flex flex-row text-lg'><SiReact/><SiRedux/><SiTailwindcss/><SiTypescript/><SiFigma/></h6>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--experience text-white'
        iconStyle={{background:"#131221", color:"#fff"}} icon={<FaGraduationCap/>} date='Septiembre 2022 - Abril 2023'
        >
          <div className='text-black'><h3>Henry Bootcamp</h3>
          <p className=' text-transparent bg-clip-text bg-gradient-to-l from-yellow-300  to-yellow-700 italic'>Desarrollador Full Stack</p><br />
          <h6>+800 horas de aprendizaje tanto práctico como teórico, con tecnologáas como JavaScript, HTML, CSS, React, Redux, MySQL, Node y Express. </h6><br />
          <h6 className='gap-[1%] flex flex-row text-lg'><SiReact/><SiRedux/><SiCss3/><SiJavascript/><SiNodedotjs/><SiMysql/><SiHtml5/><SiExpress/><SiSequelize/></h6>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement className='vertical-timeline-element--experience text-white'
        iconStyle={{background:"#131221", color:"#fff"}} icon={<FaGraduationCap/>} date='Marzo 2022 - Septiembre 2022'
        >
          <div className='text-black'><h3>Universidad Abierta interamericana</h3>
          <p className=' text-transparent bg-clip-text bg-gradient-to-l from-green-300  to-green-700 italic'>Analista programador (Incompleto)</p><br />
          <h6>Aprendizaje de principios y lógica de programación utilizando PSeint como herramienta didáctica y aplicando esos conceptos en la programación con C++.</h6><br />
          <h6 className='gap-[1%] flex flex-row text-lg'><SiCplusplus/></h6>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
</div>
    </section>
  )
}
export default Experience