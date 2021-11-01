import typeColor from "../UI/typeColors.js";
import classes from "./Type.module.css";

const Type = (props) => {
  return (
    <span
      className={classes.pokemonType}
      style={{ backgroundColor: typeColor[props.element] }}
    >
      {props.element}
    </span>
  );
};

export default Type;
