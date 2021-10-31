import { fetchPokemonList } from "./pokemon-slice";
// const URL = "https://pokeapi.co/api/v2/pokemon/ditto";
const URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(URL);
      // if (!response.ok){}
      const data = await response.json();
      return data;
    };

    try {
      const pokemonData = await fetchData();
      dispatch(fetchPokemonList(pokemonData));
    } catch (e) {
      console.log(e);
    }
  };
};
