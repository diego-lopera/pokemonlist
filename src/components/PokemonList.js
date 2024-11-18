import React from "react";
import { Link } from "react-router-dom"; // Importamos el componente Link de React Router para la navegación
import "./PokemonList.css"; // Importamos los estilos específicos para la lista de pokemones

/**
 * Componente para mostrar una lista de pokemones con opciones de ordenamiento.
 * @param {Array} props.pokemons - Lista de objetos de pokemones.
 * @param {Object} props.sortBy - Objeto que contiene la clave y el orden de clasificación.
 * @param {Function} props.setSortBy - Función para cambiar el estado del criterio de ordenamiento.
 */
const PokemonList = ({ pokemons, sortBy, setSortBy }) => {

  /**
   * Función para manejar el cambio de criterio de ordenamiento.
   * Alterna entre ascendente y descendente según el criterio seleccionado.
   * @param {string} key - La clave por la cual se ordenarán los pokemones (peso, altura, número).
   */
  const handleSort = (key) => {
    // Cambiar el orden dependiendo del criterio actual
    const order = sortBy.key === key && sortBy.order === "asc" ? "desc" : "asc";
    setSortBy({ key, order });
  };

  // Ordenamos los pokemones según el criterio y el orden definidos
  const sortedPokemons = [...pokemons].sort((a, b) => {
    if (sortBy.order === "asc") return a[sortBy.key] - b[sortBy.key];
    return b[sortBy.key] - a[sortBy.key];
  });

  return (
    <div className="container">
      {/* Contenedor para los botones de ordenamiento */}
      <div className="sort-buttons">
        <button onClick={() => handleSort("weight")}>Ordenar por peso</button>
        <button onClick={() => handleSort("id")}>Ordenar por número</button>
        <button onClick={() => handleSort("height")}>Ordenar por altura</button>
      </div>
      
      {/* Lista de pokemones ordenada */}
      <ul className="pokemon-list">
        {sortedPokemons.map((pokemon) => (
          <li className="pokemon-card" key={pokemon.id}>
            {/* Enlace que lleva al detalle del pokemon */}
            <Link to={`/pokemon/${pokemon.id}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p className="pokemonName">{pokemon.name.toUpperCase()}</p>
              <p>Peso: {pokemon.weight}</p>
              <p>Altura: {pokemon.height}</p>
              <p>Número: {pokemon.id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
