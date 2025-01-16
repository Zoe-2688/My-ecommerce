import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header-container');

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        header.style.position = 'fixed';
        header.style.top = '0';
      } else {
        header.style.position = 'fixed';
        header.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-bg text-blue p-2 mt-0">
      <div className="container mx-auto">
        <div className="header-container">
          {/* Logo */}
          <a href="/" className="logo-container">
            <img
              src="/images/jr.svg"
              alt="Mi eCommerce"
              className="logo-shadow"
            />
          </a>

          {/* Menú para pantallas grandes */}
          <nav className="nav-desktop">
            <a href="#">Menu</a>
            <a href="#">Sucursales</a>
            <a href="#">Contacto</a>
            <a href="#">Nosotros</a>
          </nav>

          {/* Botón "Ordena" y Menú hamburguesa */}
          <div className="menu-actions">
            <button className="order-button">Ordena</button>
            <button className="hamburger-menu" onClick={toggleMenu}>
              ☰
            </button>
          </div>
        </div>

        {/* Menú desplegable para pantallas pequeñas */}
        <nav className={`nav-items ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li className="nav-item"><a href="#">Menu</a></li>
            <li className="nav-item"><a href="#">Sucursales</a></li>
            <li className="nav-item"><a href="#">Contacto</a></li>
            <li className="nav-item"><a href="#">Nosotros</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
