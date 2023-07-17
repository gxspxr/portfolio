import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false); // Estado del menú hamburguesa
  const [isAnimating, setIsAnimating] = useState(false); // Estado para la animación


  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setIsAnimating(true);

    // Detener la animación después de 1 segundo (ajusta el tiempo según tus necesidades)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <header className='flex z-20 justify-between items-center h-14 fixed top-0 left-0 right-0 bg-base'>
      <Link to="home" smooth={true} duration={900}>
        <h1 className="text-white w-1/4 mx-4 cursor-pointer">
          <span className="text-secondary">&lt;</span>Gaspar<span className="text-secondary">/</span>
          <span className="text-secondary">&gt;</span>
        </h1>
      </Link>

      {/* Menú hamburguesa */}
      <div className="lg:hidden">
        <button
          className={`text-white px-4 py-2 focus:outline-none ${isAnimating ? 'animate-menu' : ''}`}
          onClick={toggleMenu}
        >
          {/* Renderizar las líneas o la "X" dependiendo del estado del menú */}
          {!showMenu ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>

        {/* Menú desplegable */}
        {showMenu && (
          <div className="absolute right-1 top-10 w-full flex flex-col items-center gap-3 bg-base2">
            <ul className='text-white cursor-pointer'>
              <li className='hover:text-NameColor transition-all duration-300 ease-in-out'>
                <Link
                  to="about"
                  smooth={true}
                  duration={900}
                  onClick={toggleMenu}
                >
                  Sobre mí
                </Link>
              </li>
              <li className='hover:text-NameColor transition-all duration-300 ease-in-out'>
                <Link
                  to="exp"
                  smooth={true}
                  duration={900}
                  onClick={toggleMenu}
                >
                  Experiencia
                </Link>
              </li>
              <li className='hover:text-NameColor transition-all duration-300 ease-in-out'>
                <Link
                  to="proyects"
                  smooth={true}
                  duration={900}
                  onClick={toggleMenu}
                >
                  Proyectos
                </Link>
              </li>
              <li className='hover:text-NameColor transition-all duration-300 ease-in-out'>
                <Link
                  to="contact"
                  smooth={true}
                  duration={900}
                  onClick={toggleMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Menú en pantalla grande */}
      <div className="hidden lg:block">
        <div className="grid grid-flow-col-dense">
          <Link to="about" smooth={true} duration={900}>
            <h3 className="mx-4 group transition-all duration-300 ease-in-out text-white">
              <span className="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold">
                Sobre mí
              </span>
              <span className="text-secondary">/&gt;</span>
            </h3>
          </Link>
          <Link to="exp" smooth={true} duration={900}>
            <h3 className="mx-4 group transition-all duration-300 ease-in-out text-white">
              <span className="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold">
                Experiencia
              </span>
              <span className="text-secondary">/&gt;</span>
            </h3>
          </Link>
          <Link to="proyects" smooth={true} duration={900}>
            <h3 className="mx-4 group transition-all duration-300 ease-in-out text-white">
              <span className="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold">
                Proyectos
              </span>
              <span className="text-secondary">/&gt;</span>
            </h3>
          </Link>
          <Link to="contact" smooth={true} duration={900}>
            <h3 className="mx-4 group transition-all duration-300 ease-in-out text-white">
              <span className="bg-left-bottom bg-gradient-to-r from-secondary to-secondary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold">
                Contacto
              </span>
              <span className="text-secondary">/&gt;</span>
            </h3>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
