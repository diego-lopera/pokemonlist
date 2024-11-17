import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./PokemonPage.css";

const PokemonPage = () => {
  const { id } = useParams();
  const { data: pokemon, loading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  if (loading) return <p>Loading...</p>;
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
        <h2>Estadisticas</h2>
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

      <button className="back-button" onClick={() => window.history.back()}>
        Regresar
      </button>
    </div>
  );
};

export default PokemonPage;
