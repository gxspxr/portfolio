import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import svg from "./Resources/email.gif";
import Swal from 'sweetalert2';
const Conecta = () => {
  const formulario = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    const { user_name, user_email, message } = formulario.current;

    // Validación de campos obligatorios
    const newErrors = {};
    if (user_name.value.trim() === '') {
      newErrors.user_name = 'El campo Nombre es obligatorio';
    }
    if (user_email.value.trim() === '') {
      newErrors.user_email = 'El campo Email es obligatorio';
    }
    if (message.value.trim() === '') {
      newErrors.message = 'El campo Mensaje es obligatorio';
    }

    // Si hay errores, actualiza el estado y no envíes el formulario
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs.sendForm('service_tng62yd', 'template_leqdv24', formulario.current, 'fpmU4mzMou35nHliH')
      .then((result) => {
        Swal.fire(
          'Gracias!',
          'Te responderé en cuanto vea el mensaje!',
          'success'
        );
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <main id="contact" className='flex flex-col items-center h-auto w-full xl:gap-2 bg-base2'>
      <h1 className='text-5xl text-white italic xl:mt-[5%] md:mt-[5%] xs:mt-[5%]'>¡Contactame!</h1>
      <div className='bg-secondary w-[60%]   h-[2px]'></div>
      <article className='flex gap-11 xl:flex-row lg:flex-col md:flex-col xs:flex-col justify-center items-center m-auto'>
        <form ref={formulario} onSubmit={sendEmail}>
          <section className='flex flex-col transition-transform lg:mt-[5%] md:mt-[20%] xs:mt-[30%] duration-75 hover:shadow-md hover:shadow-NameColor bg-base-light xl:p-10 xl:px-20 lg:p-20 lg:px-36 md:p-14 md:px-20 xs:p-11 xs:px-16 rounded-lg gap-3 text-white'>
            <label>Nombre</label>
            <input className='text-black rounded-md transition-all duration-300 ease-in-out border-2 focus:border-base focus:outline-none focus:ring-0' type="text" name="user_name" />
            {errors.user_name && <span className="text-red-500">{errors.user_name}</span>}
            <label>Email</label>
            <input className='rounded-md text-black transition-all duration-300 ease-in-out border-2 focus:border-base focus:outline-none focus:ring-0' type="email" name="user_email" />
            {errors.user_email && <span className="text-red-500">{errors.user_email}</span>}
            <label>Mensaje</label>
            <textarea className='rounded-md text-black transition-all duration-300 ease-in-out border-2 focus:border-base focus:outline-none focus:ring-0' name="message" />
            {errors.message && <span className="text-red-500">{errors.message}</span>}
            <input className='p-1 bg-base rounded-full transition-all duration-300 ease-in-out cursor-pointer hover:scale-105' type="submit" value="Send" />
          </section> 
        </form>
        <img src={svg} className="select-none pointer-events-none" alt="Phone gif" />
      </article>
      <footer>
      <div className='w-screen  bg-base flex flex-col items-center justify-center'>
        <h1 className='text-white text-xl'>Diseñado y hecho por Gaspar Serna</h1>
        <h3 className='text-white text-md'>Todos los derechos reservados. © 2023</h3>
        </div>
      </footer>
    </main>
  );
};

export default Conecta;
