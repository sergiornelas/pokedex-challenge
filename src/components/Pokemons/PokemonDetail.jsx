import { useSelector, useDispatch } from "react-redux";
import { searchPokemon, singlePokemon } from "../../store/pokemon-slice";
import { fetchSinglePokemon } from "../../store/pokemon-api-requests";
import { useEffect } from "react";
import Card from "../../components/UI/Card";

const PokemonDetail = () => {
  const id = useSelector(searchPokemon);
  const pokObj = useSelector(singlePokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSinglePokemon(id));
  }, [dispatch, id]);

  return (
    <Card>
      <img src={pokObj.default_img} alt={pokObj.name} /> {pokObj.name}{" "}
      {pokObj.height}
    </Card>
  );
};

export default PokemonDetail;
