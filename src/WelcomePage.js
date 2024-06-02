// src/WelcomePage.js

import React from 'react';
import './WelcomePage.css'; // Importar estilos CSS

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <h1>Bienvenido a SoftwareVentas v1.0</h1>
      <p>Estamos encantados de tenerte aquí.</p>
      <button onClick={() => alert('¡Gracias por visitar nuestra aplicación!')}>
        Ingresar
      </button>
    </div>
  );
};

export default WelcomePage;
