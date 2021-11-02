import logo from "../../assets/logo.png";
import menu from "../../../src/assets/Icons/Menu.svg";
import classes from "./TopHeader.module.css";
import { useHistory } from "react-router-dom";

const TopHeader = () => {
  const history = useHistory();
  const backHome = () => {
    history.push("/");
  };
  return (
    <nav className={classes.topHeader}>
      <img src={menu} alt="logo" />
      <img
        onClick={backHome}
        className={classes.topHeaderLogo}
        src={logo}
        alt="logo"
      />
    </nav>
  );
};

export default TopHeader;
