import Card from "../UI/Card";

const Pokemon = (props) => {
  return (
    <Card>
      <img src={props.default_img} alt="" />
      {props.name}
    </Card>
  );
};

export default Pokemon;
