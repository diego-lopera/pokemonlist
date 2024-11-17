import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const PokemonPage = () => {
  const { id } = useParams();
  const {
    data: pokemon,
    loading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
    </div>
  );
};

export default PokemonPage;
