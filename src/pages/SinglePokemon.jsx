import PokemonInfo from "../components/Pokemons/PokemonInfo";
import PokemonAppearance from "../components/Pokemons/PokemonAppearance";
import NavBar from "../components/UI/NavBar";
import classes from "./SinglePokemon.module.css";

import { useSelector, useDispatch } from "react-redux";
import { singlePokemon } from "../../src/store/pokemon-slice";
import { fetchSinglePokemon } from "../../src/store/pokemon-api-requests";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePokemon = () => {
  const pokObj = useSelector(singlePokemon);
  const dispatch = useDispatch();
  const params = useParams();
  const { pokeId } = params;
  const [typesReady, setTypesReady] = useState(false);

  useEffect(() => {
    dispatch(fetchSinglePokemon(pokeId));
  }, [dispatch, pokeId]);

  useEffect(() => {
    if (pokObj.types) {
      setTypesReady(true);
    }
  }, [pokObj.types]);

  return (
    <>
      <NavBar />
      <section className={classes.singlePokemon}>
        <PokemonAppearance
          default_img={pokObj.default_img}
          front_img={pokObj.front_img}
          back_img={pokObj.back_img}
          name={pokObj.name}
        />
        {typesReady && (
          <PokemonInfo
            id={pokObj.id}
            name={pokObj.name}
            types={pokObj.types}
            height={pokObj.height}
            weight={pokObj.weight}
            front_shiny={pokObj.front_shiny}
            back_shiny={pokObj.back_shiny}
          />
        )}
      </section>
    </>
  );
};

export default SinglePokemon;
