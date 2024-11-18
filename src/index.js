import React from 'react'; // Importa React para usar JSX y React en general
import ReactDOM from 'react-dom/client'; // Importa ReactDOM para renderizar el componente en el DOM
import App from './App'; // Importa el componente principal App

// Crea la raíz del DOM donde se renderizará la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza el componente App dentro del DOM y lo envuelve en StrictMode para ayudar a detectar posibles problemas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
