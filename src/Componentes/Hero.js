import React from 'react';
import './Hero.css'; // Importa el CSS para este componente

const Hero = () => {
  return (
    <section className="hero h-screen flex items-start relative">
      {/* Contenedor principal con el contenido */}
      <div className="hero-container text-left relative z-10 p-20">
        <h1 className="text-8xl text-blue-800 font-regular mb-4 pacifico-regular hero-ofertas">Celebra con</h1>
        <h2 className="text-6xl text-red-800 mb-8 font-thin tsukimi-rounded-regular hero-heading">
          Clasico Americano
        </h2>

        {/* Imagen de hamburguesa sobre los dots */}
        <div className="hero-image absolute top-0 left-0 right-0 z-20">
          <img
            src="/images/clasic.webp"
            alt="Kids Mini"
            className="w-[100%] h-auto mb-12 rounded-lg"
          />
        </div>

        {/* Imagen de fondo con dots, ahora debajo de los encabezados */}
        <div className="bg-dots"></div>

        {/* Descripción del hero */}
        <p className="text-4xl text-blue-800 mb-8 roboto-flex-regular">
          Este Mes patrio ingrese a una era de nostalgia y disfrute de nuestras icónicas hamburguesas, batidos, papas fritas y diversión, elaborados con dedicación a los sabores duraderos que definen la comida estadounidense clásica.
        </p>

        {/* Botón de llamada a la acción */}
        <a href="#" className="bg-red-800 text-white hover:bg-blue-800 px-9 py-5 rounded-xl font-bold text-xl roboto-flex-regular border-none hero-button">
          Pide Online
        </a>
      </div>
    </section>
  );
}

export default Hero;
