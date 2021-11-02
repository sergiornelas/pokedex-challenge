import { useSelector, useDispatch } from "react-redux";
import { singlePokemon } from "../../store/pokemon-slice";
import { fetchSinglePokemon } from "../../store/pokemon-api-requests";
import { useEffect } from "react";
import Card from "../../components/UI/Card";
import { useParams } from "react-router-dom";
import Type from "./Type";

const PokemonDetail = () => {
  const pokObj = useSelector(singlePokemon);
  const dispatch = useDispatch();
  const params = useParams();
  const { pokeId } = params;

  useEffect(() => {
    dispatch(fetchSinglePokemon(pokeId));
  }, [dispatch, pokeId]);

  const { id, name, default_img, types, height, weight } = pokObj;
  console.log(pokObj);

  const PokeImages = () => {
    return (
      <Card>
        <img src={default_img} alt={name} style={{ width: "50%" }} />
      </Card>
    );
  };

  //   const PokeInfo = () => {
  //     const pokeTypes = types.map((element) => {
  //       return (
  //         <Type
  //           key={types.indexOf(element)}
  //           element={element.type.name}
  //           color={element.type}
  //         />
  //       );
  //     });

  //     return (
  //       <Card>
  //         <section>
  //           <h1>{name}</h1>
  //           {pokeTypes}
  //           <h3>Pokedex Number</h3>
  //           {id}
  //           <hr />
  //           <h3>Height</h3>
  //           {height}
  //           <hr />
  //           <h3>Weight</h3>
  //           {weight}
  //           <hr />
  //           <h3>Shiny</h3>
  //         </section>
  //       </Card>
  //     );
  //   };

  return (
    <>
      <PokeImages />
    </>
  );
};

// <PokeInfo />
export default PokemonDetail;
