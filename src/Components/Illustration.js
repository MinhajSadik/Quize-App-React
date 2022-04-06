import signupImage from "../../assets/signup.svg";
import classes from "../styles/Illustration.module.scss";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupImage} alt="signup" />
    </div>
  );
}
