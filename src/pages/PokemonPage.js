import React from "react";
import { useParams } from "react-router-dom"; // Importamos useParams para acceder a los parámetros de la URL
import { useFetch } from "../hooks/useFetch"; // Importamos el hook personalizado useFetch
import "./PokemonPage.css"; // Estilos para la página de detalle del Pokémon

/**
 * Componente que muestra la información detallada de un Pokémon específico.
 */
const PokemonPage = () => {
  // Obtenemos el id del Pokémon desde los parámetros de la URL
  const { id } = useParams();
  // Utilizamos el hook `useFetch` para obtener los detalles del Pokémon a partir de la API
  const { data: pokemon, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  // Si los datos están cargando, mostramos un mensaje de carga
  if (loading) return <p>Loading...</p>;
  // Si ocurre un error, mostramos un mensaje de error
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="info-container">
      <div className="info-card">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
        <div className="info-details">
          <h1 className="pokemon-name">{pokemon.name.toUpperCase()}</h1>
          <p>ID: {pokemon.id}</p>
          <p>Peso: {pokemon.weight}</p>
          <p>Altura: {pokemon.height}</p>
          <p>Experiencia Base: {pokemon.base_experience}</p>
          <p>Tipo(s): {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          <p>
            Habilidades:{" "}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </p>
        </div>
      </div>

      <div className="stats-section">
        <h2>Estadísticas</h2>
        <ul className="stats-list">
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name.toUpperCase()}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>

      <div className="moves-section">
        <h2>Movimientos</h2>
        <p>
          {pokemon.moves.slice(0, 10).map((move) => move.move.name).join(", ")}...
        </p>
      </div>

      {/* Botón para regresar a la página anterior */}
      <button className="back-button" onClick={() => window.history.back()}>
        Regresar
      </button>
    </div>
  );
};

export default PokemonPage;
