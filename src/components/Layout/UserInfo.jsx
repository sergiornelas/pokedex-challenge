import userPic from "../../assets/avatar.png";
import classes from "./UserInfo.module.css";

const UserInfo = () => {
  return (
    <section className={classes.info}>
      <img className={classes.profileImg} src={userPic} alt="Ash" />
      <div>
        <h1 className={classes.userName}>ASHK123</h1>
        <h3 className={classes.userInfo}>Level 1</h3>
        <p className={classes.userInfo}>"Work hard on your test"</p>
      </div>
    </section>
  );
};

export default UserInfo;
