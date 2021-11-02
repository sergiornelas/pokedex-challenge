import classes from "./Menu.module.css";
import UserInfo from "./UserInfo";
import logo from "../../assets/logo.png";
import LogOutButton from "../../components/UI/LogOutButton";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <section className={classes.menu}>
      <img className={classes.logoImg} src={logo} alt="logo" onClick={goHome} />
      <UserInfo />
      <LogOutButton />
    </section>
  );
};

export default Menu;
