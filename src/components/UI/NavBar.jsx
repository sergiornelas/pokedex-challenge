import { useRef } from "react";
import { useDispatch } from "react-redux";
import { getSearchInput } from "../../store/pokemon-slice";
import { useHistory } from "react-router-dom";
import classes from "./NavBar.module.css";
import searchIcon from "../../assets/Icons/Search.svg";
import backIcon from "../../assets/Icons/Back.svg";
import TopHeader from "../UI/TopHeader";

const NavBar = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const searchHandler = () => {
    const input = searchRef.current.value;
    dispatch(getSearchInput(input));
    history.push(`/${input}`);
  };

  const backHome = () => {
    history.push("/");
  };

  return (
    <nav className={classes.nav}>
      <button onClick={backHome} className={classes.searchBlueButton}>
        <img style={{ width: "100%" }} src={backIcon} alt="back" />
      </button>

      <TopHeader />

      <section className={classes.searchSection}>
        <label htmlFor="search"></label>
        <input
          placeholder="Search"
          required
          ref={searchRef}
          type="text"
          name="search"
          className={classes.search}
        />
        <button onClick={searchHandler} className={classes.blueButton}>
          <img style={{ width: "70%" }} src={searchIcon} alt="search" />
        </button>
      </section>
    </nav>
  );
};

export default NavBar;
