import { fetchPokemonList } from "./pokemon-slice";
import { fetchUrlPokemon } from "./pokemon-slice";

const URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchPokemonData = (pokeArray) => {
  return async (dispatch) => {
    dispatch(fetchPokemonList(pokeArray));
  };
};

export const fetchSinglePokemon = (input) => {
  return async (dispatch) => {
    fetch(`${URL}/${input}`)
      .then((jsonData) => jsonData.json())
      .then((data) => {
        const obj = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          types: data.types,
          default_img: data.sprites.other["official-artwork"].front_default,
          front_img: data.sprites.front_default,
          back_img: data.sprites.back_default,
          front_shiny: data.sprites.front_shiny,
          back_shiny: data.sprites.back_shiny,
        };
        return obj;
      })
      .then((sendObj) => {
        dispatch(fetchUrlPokemon(sendObj));
      })
      .catch((error) => {
        console.log(error);
        alert("Write a correct pokemon name or ID");
      });
  };
};
