import Card from "../../../src/components/UI/Card";
import classes from "./PokemonAppearance.module.css";

const PokemonAppearance = (props) => {
  const { default_img, front_img, back_img, name } = props;

  return (
    <div style={{ height: "200px;" }}>
      <Card>
        <div className={classes.pokemonAppereance}>
          <img
            className={classes.imageAppereance}
            src={default_img}
            alt={name}
          />
          <br />
          <img src={front_img} alt={name} style={{ width: "50%" }} />
          <img src={back_img} alt={name} style={{ width: "50%" }} />
        </div>
      </Card>
    </div>
  );
};

export default PokemonAppearance;
