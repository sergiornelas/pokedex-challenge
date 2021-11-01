import Card from "../UI/Card";
import classes from "../Pokemons/Pokemon.module.css";
import Type from "./Type";

const Pokemon = (props) => {
  const { types, name, id, default_img } = props;

  let pokeNumber;
  if (id < 10) {
    pokeNumber = <p>00{id}</p>;
  }
  if (id >= 10 && id < 100) {
    pokeNumber = <p>0{id}</p>;
  }

  let pokeTypes = types.map((element) => {
    return (
      <Type
        key={types[element]}
        element={element.type.name}
        color={element.type}
      />
    );
  });

  return (
    <Card>
      <div className={classes.pokemon}>
        <h2>{name}</h2>
        {pokeNumber}
        <img src={default_img} alt="" style={{ width: "50%" }} />
        {pokeTypes}
      </div>
    </Card>
  );
};

export default Pokemon;
