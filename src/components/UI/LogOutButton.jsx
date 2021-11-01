import classes from "./LogOutButton.module.css";
import logOut from "../../assets/Icons/Logout.svg";

const LogOutButton = () => {
  return (
    <button className={classes.logOutButton}>
      <img className={classes.logOutIcon} src={logOut} alt="logOut" />
      LOG OUT
    </button>
  );
};

export default LogOutButton;
