import classes from "../../styles/Signup.module.scss";
import Form from "../Form";
import Illustration from "../Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an Account</h1>
      <div className={classes.column}>
        <Illustration />
        <Form className={`${classes.signup} form`} />
      </div>
    </>
  );
}
