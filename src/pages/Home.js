import React, { useState, useEffect, useCallback } from "react";
import { useFetch } from "../hooks/useFetch"; // Importamos el custom hook useFetch
import PokemonList from "../components/PokemonList"; // Componente que renderiza la lista de pokemones
import "./Home.css"; // Archivo de estilos para la página

const Home = () => {
  // Estado para almacenar la lista de pokemones
  const [pokemons, setPokemons] = useState([]); 
  // Utilizamos el hook personalizado `useFetch` para hacer una solicitud a la API de Pokémon
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  // Estado para manejar la configuración de ordenamiento de los pokemones
  const [sortBy, setSortBy] = useState({ key: "id", order: "asc" });

  // Función que obtiene los detalles de los pokemones
  const fetchPokemons = useCallback(async () => {
    if (data.results) {
      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );
      return await Promise.all(promises); // Esperamos todas las promesas antes de continuar
    }
  }, [data]);

  // Cuando los datos de la API cambian, obtenemos los pokemones
  useEffect(() => {
    if (data.results) {
      fetchPokemons().then(setPokemons); // Establecemos los pokemones en el estado
    }
  }, [data, fetchPokemons]);

  // Condicionales para mostrar la información de carga o errores
  if (loading) return <p className="loading">Cargando...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="home-container">
      <h1>Mi lista de Pokémon</h1>
      <PokemonList pokemons={pokemons} sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default Home;
