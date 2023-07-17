import React from 'react'
import pokemon from "../../images/PokemonP.webp"
import {SiRedux, SiTailwindcss, SiReact, SiTypescript, SiJavascript, SiCss3, SiNodedotjs, SiMysql, SiHtml5,SiExpress, SiSequelize, SiFigma, SiCplusplus } from "react-icons/si"
const Pokemon = () => {
  return (
    <article className="flex xl:flex-row xs:flex-col xs:items-center lg:flex-col md:flex-col md:items-center lg:m-auto gap-[9%]">
      <img
      src={pokemon}
      className=" xl:saturate-0 xs:scale-75 xs:hover:scale-100 xs:rotate-x-25 xs:-rotate-z-12 xs:rotate-y-25  md:scale-75 md:hover:scale-100 xl:scale-100 lg:scale-75 hover:saturate-100 transition-all duration-1000 ease-in-out shadow-lg rounded-2xl xl:rotate-x-25 xl:-rotate-z-12 xl:rotate-y-25 lg:rotate-x-25 lg:-rotate-z-12 lg:rotate-y-25 transform shadow-base-light hover:-rotate-x-10 xl:hover:rotate-y-20 xl:hover:scale-105 lg:hover:scale-100 hover:shadow-xl hover:shadow-yellow-600"
      alt=""
    />
      <figure  className='flex lg:m-auto text-white h-full xl:w-[30%] lg:w-[50%] md:w-[60%] xs:w-auto mt-[4%] bg-base rounded-xl flex-col items-center overflow-hidden gap-3'>
      <h1 className='underline underline-offset-1 text-xl font-semibold'>Pokemon PI</h1>
      <h3 className='px-[9%]'>Una plataforma en línea dedicada a proporcionar información y recursos sobre el mundo de Pokémon, incluidos detalles sobre 
        los diferentes tipos y la opción de crear tu propio Pokémon.
        {" "}<br/><br/>
      <span className='flex flex-row gap-3'>Teconologías:<SiReact/><SiJavascript/><SiRedux/><SiHtml5/><SiExpress/><SiMysql/><SiCss3/><SiNodedotjs/></span> 
      </h3>
      <div className='flex flex-row justify-center mb-[5%]'>
      <a href="" className='p-[5%] bg-base-light rounded-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-secondary hover:bg-NameColor hover:rounded-lg'>Repositorio</a>
      </div>
      </figure>
      </article>
  )
}

export default Pokemon