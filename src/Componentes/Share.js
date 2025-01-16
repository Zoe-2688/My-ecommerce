import React, { useState, useEffect } from 'react';
import './Share.css';

const Share = () => {
  // Array de URLs de imágenes
  const images = [
    '/images/share JR 1.jpg',
    '/images/share JR 2.jpg',
    '/images/share JR 3.webp',
    '/images/share JR 4.webp',
    '/images/share JR 5.jpg',
    '/images/share JR 6.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Intervalo para cambiar la imagen cada 5 segundos (5000ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambia a la siguiente imagen
    }, 5000);

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  // Duplicar las imágenes para crear el efecto infinito
  const extendedImages = [
    images[images.length - 1], // Última imagen al inicio
    ...images,
    images[0], // Primera imagen al final
  ];

  return (
    <div className="share-container">
      <section className="share-text container text-center p-10 bg-white-100">
      <h1 className="text-6xl font-bold text-blue-800 mb-4 custom-font">Comparte con nosotros</h1>
      <h2 className="text-5xl font-semibold mb-8 h2">Celebra tus fiestas con nosotros</h2>
        
        {/* Carrusel de imágenes */}
        <div className="carousel-container overflow-hidden relative">
          <div 
            className="carousel-images"
            style={{
              transform: `translateX(-${(currentIndex + 1) * 33.33}%)`, // Mover una imagen a la vez
            }}
          >
            {extendedImages.map((image, index) => (
              <div key={index} className="carousel-image w-full flex-shrink-0 p-2">
                <img
                  src={image}
                  alt={`Carousel ${index}`}
                  className="w-full h-full rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Share;
