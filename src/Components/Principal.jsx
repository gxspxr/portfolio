import React from 'react';
import {useEffect} from "react"
import { Link } from 'react-scroll';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';
import LightsSvg from './Resources/LightSVG';
import img from "../images/imgLanding.webp"
import { SiGithub, SiLinkedin } from 'react-icons/si';
import Aos from "aos";
import "aos/dist/aos.css";
const Principal = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="home" className=' bg-base flex flex-row h-screen'>
      <div className='animate-pulse pointer-events-none'>
        <LightsSvg />
      </div >
      <div className='mx-24 my-auto' >
        <div data-aos="fade-right">
          <div className='mb-[5%]'><h3 className='xl:text-5xl lg:text-4xl md:text-4xl xs:text-2xl text-white opacity-70'>¡Hola! 👋</h3>
        <h2 className=' xl:text-7xl lg:text-6xl md:text-6xl xs:text-4xl text-white xl:whitespace-nowrap'>
          Mi nombre es <span className='text-NameColor xl:text-8xl lg:text-7xl md:text-7xl xs:text-5xl'>Gaspar</span>
        </h2></div>
        <h2 className='flex xl:text-3xl lg:text-3xl md:text-3xl xs:text-xl text-white flex-row gap-3'>
          <span className='select-none text-white'></span>{"Y"}
          <span className='text-NameColor italic'>
            <TypeAnimation
              sequence={[
                'Soy Desarrollador Front-End',
                3000,
                'Creo experiencias digitales que conectan y cautivan',
                3000,
                'Construyo puentes entre el diseño y la funcionalidad',
                3000,
              ]}
              wrapper='span'
              cursor={true}
              repeat={Infinity}
            />
          </span>
          </h2>
          </div>
          <article className='flex flex-row gap-[2%] mb-[15%] text-white mt-[5%]' data-aos="fade-up">
            <a href="./CvGaspar.pdf" target="_blank" rel="noreferrer" className='text-sm bg-base-light hover:bg-NameColor transition-all duration-700 hover:scale-105 ease-in-out hover:rounded-lg flex justify-center items-center h-[2em] shadow-sm shadow-black w-[15%] rounded-sm  '>
            Ver CV
            </a>
          <a href="https://github.com/gxspxr" target="_blank" rel="noreferrer" className='text-3xl transition-all duration-300 hover:scale-110  ease-in-out hover:text-violet-600'><SiGithub/></a>
          <a href="https://www.linkedin.com/in/gaspar-serna-8a0945215/" rel="noreferrer" target="_blank" className='text-3xl transition-all duration-300  hover:scale-110  ease-in-out hover:text-sky-700'><SiLinkedin/></a>
          </article>
        
        <Link to='about' smooth={true} duration={900}>
          <button className=' text-secondary text-4xl animate-bounce '>
            <AiOutlineArrowDown />
          </button>
        </Link>
      </div>
      <div className=" w-[40%] h-[70%] xl:block lg:hidden md:hidden sm:hidden xs:hidden  m-auto " data-aos="fade-left">
      <img src={img} alt="" className='  animate-float' />
      </div>
    </section>
  );
};

export default Principal;
