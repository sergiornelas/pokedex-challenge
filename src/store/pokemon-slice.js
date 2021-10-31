import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchPokemon: "sergio", pokemonList: [] };

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
  },
});

export const pokemonList = (state) => state.pokemon.pokemonList;
export const { getSearchInput, fetchPokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;
