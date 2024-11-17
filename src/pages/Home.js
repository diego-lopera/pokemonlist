import React, { useState, useEffect, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const { data, loading, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const [sortBy, setSortBy] = useState({ key: "id", order: "asc" });

  const fetchPokemons = useCallback(async () => {
    if (data.results) {
      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );
      return await Promise.all(promises);
    }
  }, [data]);

  useEffect(() => {
    if (data.results) {
      fetchPokemons().then(setPokemons);
    }
  }, [data, fetchPokemons]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Pokemon List</h1>
      <PokemonList pokemons={pokemons} sortBy={sortBy} setSortBy={setSortBy} />
    </div>
  );
};

export default Home;
