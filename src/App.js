import React from "react"; // Importa React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa los componentes necesarios de react-router-dom
import Home from "./pages/Home"; // Importa el componente Home
import PokemonPage from "./pages/PokemonPage"; // Importa el componente PokemonPage

/**
 * Componente principal de la aplicación que gestiona las rutas.
 */
const App = () => {
  return (
    <Router> {/* Proporciona el contexto de enrutamiento a la aplicación */}
      <Routes> {/* Contenedor que agrupa todas las rutas */}
        {/* Ruta principal que renderiza la página de inicio */}
        <Route path="/" element={<Home />} />
        
        {/* Ruta dinámica que muestra la página de detalles de un Pokémon específico */}
        <Route path="/pokemon/:id" element={<PokemonPage />} />
      </Routes>
    </Router>
  );
};

export default App;
