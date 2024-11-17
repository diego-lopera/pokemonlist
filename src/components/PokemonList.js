import React from "react";
import { Link } from "react-router-dom";
import "./PokemonList.css";

const PokemonList = ({ pokemons, sortBy, setSortBy }) => {
  const handleSort = (key) => {
    const order = sortBy.key === key && sortBy.order === "asc" ? "desc" : "asc";
    setSortBy({ key, order });
  };

  const sortedPokemons = [...pokemons].sort((a, b) => {
    if (sortBy.order === "asc") return a[sortBy.key] - b[sortBy.key];
    return b[sortBy.key] - a[sortBy.key];
  });

  return (
    <div className="container">
      <div className="sort-buttons">
        <button onClick={() => handleSort("weight")}>Ordenar por peso</button>
        <button onClick={() => handleSort("id")}>Ordenar por numero</button>
        <button onClick={() => handleSort("height")}>Ordenar por altura</button>
      </div>
      <ul className="pokemon-list">
        {sortedPokemons.map((pokemon) => (
          <li className="pokemon-card" key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p className="pokemonName">{pokemon.name.toUpperCase()}</p>
              <p>Peso: {pokemon.weight}</p>
              <p>Altura: {pokemon.height}</p>
              <p>Numero: {pokemon.id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
