import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css'; // Estilos globales
import './App.css';   // Estilos específicos de la aplicación
import Header from './Componentes/Header';
import Hero from './Componentes/Hero';
import Features from './Componentes/Features';
import Confetti from 'react-confetti';
import Menu from './Componentes/Menu';
import Share from './Componentes/Share';
import Footer from './Componentes/Footer';

const App = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const confettiDuration = 5000; // 5 segundos
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, confettiDuration);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(to bottom, #ffffe6, #ffffff)', // Degradado neutro de amarillo pálido a beige cálido


        minHeight: '400vh',
        overflowX: 'hidden',
      }}
    >
      {/* Confeti */}
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* Dancers animados a los lados */}
      <>
        <img
          src="/images/dancer1.png"
          alt="Dancer 1"
          className="dancer dancer-left"
        />
        <img
          src="/images/dancer2.png"
          alt="Dancer 2"
          className="dancer dancer-right"
          style={{ transform: 'scale(1.2)' }} // Aumenta el tamaño de dancer2
        />
      </>

      <div
  id="banderines-left"
  style={{
    position: 'absolute',
    top: '50px',
    left: '-14%',
    width: '40%',
    height: '600px',
    backgroundImage: 'url(/images/banderines2.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: 'rotate(-30deg)',
    zIndex: 9999,
  }}
/>

<div
  id="banderines-right"
  style={{
    position: 'absolute',
    top: '50px',
    right: '-14%',
    width: '40%',
    height: '600px',
    backgroundImage: 'url(/images/banderines2.png)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transform: 'rotate(30deg)',
    zIndex: 9999,
  }}
/>

      <Header />
      <Hero />
      <Menu/>
      <Features />
      <Share />


      {/* Contenedor para Imagen de Santiago y Texto */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '600px',
          backgroundImage: 'url(/images/1.png)', // Ruta de la imagen de Santiago
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          display: 'flex',
          color:'#9f2020',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
         
        }}
      >   
      </div>
      <Footer/>
    </div>
  );
}

export default App;
