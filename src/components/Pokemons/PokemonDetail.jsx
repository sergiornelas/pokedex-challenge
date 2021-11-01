import { useSelector, useDispatch } from "react-redux";
import { singlePokemon } from "../../store/pokemon-slice";
import { fetchSinglePokemon } from "../../store/pokemon-api-requests";
import { useEffect } from "react";
import Card from "../../components/UI/Card";
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const pokObj = useSelector(singlePokemon);
  const dispatch = useDispatch();
  const params = useParams();
  const { pokeId } = params;

  useEffect(() => {
    dispatch(fetchSinglePokemon(pokeId));
  }, [dispatch, pokeId]);

  return (
    <Card>
      <img src={pokObj.default_img} alt={pokObj.name} /> {pokObj.name}{" "}
      {pokObj.id}
    </Card>
  );
};

export default PokemonDetail;
