import { Redirect, Route, Switch } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <>
      <Switch>
        <Route {...rest}>{(props) => <Component {...props} />}</Route>
      </Switch>
    </>
  ) : (
    <Redirect to="/" />
  );
}
