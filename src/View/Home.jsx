import React from 'react';
import Principal from '../Components/Principal';
import About from '../Components/About';
import Experience from '../Components/Experience';
import Nav from '../Components/Nav';
import Proyects from '../Components/Proyects';
import Conecta from '../Components/Conecta';
const Home = () => {
  return (
    <main className="overflow-x-hidden w-full flex-col">
      <Nav/>
      {/* seccion principal */}
      <Principal />
      {/* seccion sobre mi */}
      <About />
      {/* seccion experience*/}
      <Experience />
      {/* seccion proyectos */}
      <Proyects />
       {/* seccion conecta */}
       <Conecta/>
    </main>
  );
};

export default Home;
