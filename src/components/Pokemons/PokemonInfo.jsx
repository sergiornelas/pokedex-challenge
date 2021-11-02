import Card from "../../../src/components/UI/Card";
import Type from "../../../src/components/Pokemons/Type";

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
      <section>
        <h1>{name}</h1>
        {pokeTypes}
        <h3>Pokedex Number</h3>
        {id}
        <hr />
        <h3>Height</h3>
        {height}
        <hr />
        <h3>Weight</h3>
        {weight}
        <hr />
        <h3>Shiny</h3>
        <img src={front_shiny} alt={name} />
        <img src={back_shiny} alt={name} />
      </section>
    </Card>
  );
};

export default PokemonInfo;
