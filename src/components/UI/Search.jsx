import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { getSearchInput } from "../../store/pokemon-slice";
import { useHistory } from "react-router-dom";

const Search = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const searchHandler = () => {
    const input = searchRef.current.value;
    dispatch(getSearchInput(input));
    history.push(`/${input}`);
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
