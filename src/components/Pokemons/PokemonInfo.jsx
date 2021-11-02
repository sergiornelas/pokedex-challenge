import Card from "../../../src/components/UI/Card";
import Type from "../../../src/components/Pokemons/Type";
import classes from "./PokemonInfo.module.css";

const PokemonInfo = (props) => {
  const { id, name, types, height, weight, front_shiny, back_shiny } = props;

  const pokeTypes = types.map((element) => {
    return (
      <Type
        key={types.indexOf(element)}
        element={element.type.name}
        color={element.type}
      />
    );
  });

  return (
    <Card>
      <section className={classes.pokemonInformation}>
        <h1 className={classes.infoName}>{name}</h1>
        {pokeTypes}
        <p className={classes.infoP}>Pokedex Number</p>
        {id}
        <hr />
        <p className={classes.infoP}>Height</p>
        {height}
        <hr />
        <p className={classes.infoP}>Weight</p>
        {weight}
        <hr />
        <p className={classes.infoP}>Shiny</p>
        <img src={front_shiny} alt={name} className={classes.shinyImg} />
        <img src={back_shiny} alt={name} className={classes.shinyImg} />
      </section>
    </Card>
  );
};

export default PokemonInfo;
