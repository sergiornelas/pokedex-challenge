import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchPokemon: "", pokemonList: [], singlePokemon: {} };

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    fetchPokemonList(state, action) {
      const pokemonList = action.payload;
      state.pokemonList = pokemonList;
    },
    getSearchInput(state, action) {
      const searchInput = action.payload;
      state.searchPokemon = searchInput;
    },
    fetchUrlPokemon(state, action) {
      const pokeData = action.payload;
      state.singlePokemon = pokeData;
    },
  },
});

export const pokemonList = (state) => state.pokemon.pokemonList;
export const searchPokemon = (state) => state.pokemon.searchPokemon;
export const singlePokemon = (state) => state.pokemon.singlePokemon;
export const { getSearchInput, fetchPokemonList, fetchUrlPokemon } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
