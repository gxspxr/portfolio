import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Technologies = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <main id="tech" className='flex flex-grow h-screen bg-base2 flex-col' >
        <section className='ml-20 mt-[5%]' >
     <h1 className='text-5xl text-white'  data-aos="fade-up">Teconologias y herramientas<span className='text-secondary'>/</span><span className='text-secondary'>&gt;</span></h1>
     <article className='mt-[15%] mb-[15%]  'data-aos="fade-down" >
     </article>
     </section>
    </main>
  )
}

export default Technologies