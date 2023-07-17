import React from 'react'
import Pokemon from './Projects/Pokemon'
import CrmProject from './Projects/CrmProject'
import Aim from './Projects/Aim'
const Proyects = () => {
  return (
    <main id="proyects" className='h-[120%] bg-base2'>
  <h1 className='text-5xl text-white ml-[6%]' data-Aos="fade-right">Proyectos<span className='text-secondary'>/</span><span className='text-secondary'>&gt;</span></h1>
  <section className='flex flex-col ml-[2%] mt-[5%]'>
    <div data-aos="fade-up-right">
      <CrmProject/>
      <div data-aos="fade-up-left" className='mt-[10%]' >
      <Pokemon/>
      </div>
      <div data-aos="fade-up-right" className='mt-[10%]'>
      <Aim/>
      </div>
    </div>
  </section>
</main>

  )
}

export default Proyects