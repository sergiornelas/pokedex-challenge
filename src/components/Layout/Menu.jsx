import classes from "./Menu.module.css";
import UserInfo from "./UserInfo";
import logo from "../../assets/logo.png";
import LogOutButton from "../../components/UI/LogOutButton";

const Menu = () => {
  return (
    <section className={classes.menu}>
      <img className={classes.logoImg} src={logo} alt="logo" />
      <UserInfo />
      <LogOutButton />
    </section>
  );
};

export default Menu;
