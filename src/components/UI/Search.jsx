import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { getSearchInput } from "../../store/pokemon-slice";
// import { Link } from "react-router-dom";

const Search = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();
  // const [pokemonUrl, setPokemonUrl] = useState("");

  // let input;
  const searchHandler = () => {
    const input = searchRef.current.value;
    // setPokemonUrl(input);
    dispatch(getSearchInput(input));
    // <Link to={`/:${input}`}>Welcome</Link>;
  };

  return (
    <Fragment>
      <label htmlFor="search"></label>
      <input required ref={searchRef} type="text" name="search" />
      <button onClick={searchHandler}>Search!</button>
    </Fragment>
  );
};

export default Search;
