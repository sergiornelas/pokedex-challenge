import { fetchPokemonList } from "./pokemon-slice";

export const fetchPokemonData = (pokeArray) => {
  return async (dispatch) => {
    dispatch(fetchPokemonList(pokeArray));
  };
};
