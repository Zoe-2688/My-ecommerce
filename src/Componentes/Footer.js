// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Asegúrate de tener un archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className="footer-bg ">
      <div className="footer-container mx-auto grid grid-cols-1 md:grid-cols-3 gap-40">
        <div>
          <ul className="font-bold text-xl mb-4">
            <li><a href="#">Menú</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Franquicia</a></li>
            <li><a href="#">Ordena Ahora</a></li>
          </ul>
        </div>

        {/* Nuestra Empresa */}
        <div>
          <h2 className="font-bold text-xl mb-4">Nuestra Empresa</h2>
          <ul>
            <li><a href="#">Nuestra Historia</a></li>
            <li><a href="#">Recaudación de Fondos</a></li>
            <li><a href="#">Franquicias</a></li>
            <li><a href="#">Socios</a></li>
            <li><a href="#">Co-marcas</a></li>
          </ul>
        </div>

        {/* Comida y Contacto */}
        <div>
          <h2 className="font-bold text-xl mb-4">Comida</h2>
          <ul>
            <li><a href="#">Nutrición y Alergias</a></li>
          </ul>
            </div>
            <ul>
            <h2 className="font-bold text-xl mb-4">Ponte en Contacto</h2>
            <li><a href="#">Únete a Nuestro Equipo</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        </div>

    

      <div className="terminos-container mx-auto text-center mt-10">
        <img
          src="/images/jr.svg"
          alt="Mi eCommerce"
          className="logo mx-auto"
        />
        <p className="mt-4">
          <a href="#" className="mr-4">Accesibilidad</a> 
          <a href="#" className="mr-4">Privacidad</a> 
          <a href="#" className="mr-4">Términos</a> 
          <a href="#">Términos y Condiciones</a>
        </p>
        <p className="mt-4">&copy; 2024 Mi eCommerce. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
