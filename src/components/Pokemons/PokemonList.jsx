import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonData } from "../../store/pokemon-api-requests";
import { pokemonList } from "../../store/pokemon-slice";
import { useHttp } from "../../hooks/useHttp";
import Pokemon from "../Pokemons/Pokemon";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector(pokemonList);
  const pokeArray = useHttp();

  useEffect(() => {
    dispatch(fetchPokemonData(pokeArray));
  }, [dispatch, pokeArray]);

  return (
    <Fragment>
      {pokemonData.map((item) => {
        return (
          <Pokemon
            key={item.id}
            name={item.name}
            id={item.id}
            height={item.height}
            weight={item.weight}
            types={item.types}
            default_img={item.default_img}
            front_img={item.front_img}
            back_img={item.back_img}
            front_shiny={item.front_shiny}
            back_shiny={item.back_shiny}
          >{`${item.id}, ${item.name}`}</Pokemon>
        );
      })}
    </Fragment>
  );
};

export default PokemonList;
