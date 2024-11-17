import React from "react";
import { Link } from "react-router-dom";

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
    <div>
      <div>
        <button onClick={() => handleSort("weight")}>Sort by Weight</button>
        <button onClick={() => handleSort("id")}>Sort by Number</button>
        <button onClick={() => handleSort("height")}>Sort by Height</button>
      </div>
      <ul>
        {sortedPokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              <p>Weight: {pokemon.weight}</p>
              <p>Height: {pokemon.height}</p>
              <p>Number: {pokemon.id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
