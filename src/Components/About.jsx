import React, { useEffect } from 'react';
import programmer from "../images/dev.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section id="about" className='flex h-full bg-base2'>
      <div className='flex flex-grow  flex-row xl:my-[20%] lg:my-[30%] md:my-[30%] xs:my-[40%]'>
        <div className='ml-[6%]  my-auto'>
          <h1 className='xl:text-5xl md:text-5xl lg:text-5xl xs:text-3xl text-white'data-Aos="fade-right">Sobre mí<span className='text-secondary'>/</span><span className='text-secondary'>&gt;</span></h1>
          <article className='flex w-11/12 flex-row gap-9'>
            <h2 className='mt-14 xl:text-3xl lg:text-2xl xs:text-2xl text-white' data-Aos="fade-right">
              Tengo 19 años, vivo en Buenos Aires, Argentina y soy un desarrollador
              Front-End.<br /> Demuestro habilidades en trabajo colaborativo y actualmente estoy en busca de nuevas oportunidades para poner en práctica mis habilidades y aprender de la industria.<br /> Me gusta afrontar retos, además de ser una persona muy creativa y con muchas ganas de aprender.
            </h2>
            <div className="hidden xl:block lg:block md:block sm:hidden xs:hidden ">
            <img className="" src={programmer} alt="" data-Aos="fade-left" />
          </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
