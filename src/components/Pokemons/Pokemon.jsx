import Card from "../UI/Card";
import classes from "../Pokemons/Pokemon.module.css";
import { useHistory } from "react-router-dom";
import Type from "./Type";

const Pokemon = (props) => {
  const { types, name, id, default_img } = props;
  const history = useHistory();

  let pokeNumber;
  if (id < 10) {
    pokeNumber = <p>00{id}</p>;
  }
  if (id >= 10 && id < 100) {
    pokeNumber = <p>0{id}</p>;
  }

  const pokeTypes = types.map((element) => {
    return (
      <Type
        key={types.indexOf(element)}
        element={element.type.name}
        color={element.type}
      />
    );
  });

  const showPokDetail = () => {
    history.push(`/${name}`);
  };

  return (
    <Card>
      <div onClick={showPokDetail} className={classes.pokemon}>
        <h2>{name}</h2>
        {pokeNumber}
        <img src={default_img} alt="name" style={{ width: "50%" }} />
        {pokeTypes}
      </div>
    </Card>
  );
};

export default Pokemon;
