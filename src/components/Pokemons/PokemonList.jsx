import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonData } from "../../store/pokemon-api-requests";
import { pokemonList } from "../../store/pokemon-slice";

const PokemonList = () => {
  const dispatch = useDispatch();
  const showList = useSelector(pokemonList);
  console.log(showList);

  useEffect(() => {
    dispatch(fetchPokemonData());
  }, [dispatch]);

  return <Fragment>Pokemon List!</Fragment>;
};

export default PokemonList;
