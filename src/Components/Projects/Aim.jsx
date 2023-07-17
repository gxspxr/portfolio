import React from 'react'
import aim from "../../images/Aimtra.svg"
const Aim = () => {
  return (
    <article className="flex xl:flex-row lg:flex-col md:flex-col md:items-center xs:flex-col xs:items-center lg:m-auto gap-[9%]">
    <img
      src={aim}
      className="xl:saturate-0 lg:mb-[6%] xs:scale-75 xs:hover:hover:scale-100 xs:rotate-x-25 xs:-rotate-z-12 xs:-rotate-y-35  md:scale-75 md:hover:scale-100 hover:saturate-100  transition-all duration-1000 ease-in-out shadow-lg rounded-2xl xl:rotate-x-25 xl:-rotate-z-12 xl:-rotate-y-35 lg:rotate-x-25 lg:-rotate-z-12 lg:-rotate-y-35 transform shadow-base-light lg:scale-75 md:hover:-rotate-x-10 md:hover:rotate-y-20 xs:hover:-rotate-x-10 xs:hover:rotate-y-20 lg:hover:scale-100 xl:scale-100 xl:hover:scale-105 hover:shadow-xl  hover:shadow-NameColor"
      alt=""
    />
      <figure  className='flex lg:m-auto text-white h-full xl:w-[25%] lg:w-[50%] md:w-[50%] xs:w-[70%]  mt-[4%] bg-base rounded-xl flex-col items-center overflow-hidden gap-3'>
      <h1 className='underline underline-offset-1 text-xl font-semibold'>Aim Trainer</h1>
      <h3 className='px-[9%]'>Proyecto creado con el fin de mejorar habilidades logicas de JavaScript y mejorar Tailwind.
      Cuenta con sonidos al acertar el click en el circulo y al fallar. Se puede cambiar los colores tanto del fondo como del circulo.
      Incluye contador de puntos de aciertos y fallos
      </h3>
      <div className='flex flex-row gap-4 mb-[5%]'>
      <a href="" className='p-[5%] bg-base-light rounded-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-secondary hover:bg-NameColor hover:rounded-lg'>Deploy</a>
      <a href="" className='p-[5%] bg-base-light rounded-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-secondary hover:bg-NameColor hover:rounded-lg'>Repositorio</a>
      </div>
      </figure>
      </article>
  )
}

export default Aim