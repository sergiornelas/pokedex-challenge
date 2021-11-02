import Card from "../../../src/components/UI/Card";

const PokemonAppearance = (props) => {
  const { default_img, front_img, back_img, name } = props;

  return (
    <Card>
      <img src={default_img} alt={name} style={{ width: "50%" }} />
      <br />
      <img src={front_img} alt={name} style={{ width: "10%" }} />
      <img src={back_img} alt={name} style={{ width: "10%" }} />
    </Card>
  );
};

export default PokemonAppearance;
