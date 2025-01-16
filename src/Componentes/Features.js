import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      {/* Encabezado con frame2 */}


      {/* Nueva sección Nosotros */}
      <section className="about-us">
        <div className="about-us-content">
          {/* Video a la izquierda */}
          <video
            src="/images/fiestasvideo.mp4"
            className="about-us-video"
            loop
            autoPlay
            muted
          />

          {/* Contenido a la derecha */}
          <div className="about-us-text">
            <h1 className="text-[8rem] text-blue-800 font-regular mb-4 pacifico-regular">Chile!</h1>
            <h2 className="text-[3rem] text-blue-800 font-regular mb-4 pacifico-regular">Te celebramos</h2>
            <p className="text-[4rem] text-blue-800 mb-8 roboto-flex-regular">
              Johnny Rockets celebra con orgullo las Fiestas Patrias de Chile, honrando la rica cultura y tradiciones de este hermoso país. Nos llena de alegría ser parte de esta gran celebración, compartiendo momentos especiales con nuestras icónicas hamburguesas y el ambiente festivo que caracteriza a Chile en estas fechas. Este mes, tenemos ofertas especiales y premios exclusivos para que disfrutes aún más de la experiencia Johnny Rockets. Es nuestro honor ser parte de esta celebración, conectándonos con la pasión y el orgullo chileno. ¡Felices Fiestas Patrias, y no te pierdas nuestras promociones únicas durante este mes!
            </p>
            <a href="#more-info" className="read-more"> Ir a promociones y ofertas</a>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Features;
