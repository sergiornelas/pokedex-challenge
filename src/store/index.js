import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemon-slice";

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice,
  },
});

export default store;
