import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Routes>
      <Route {...rest}>{(props) => <Component {...props} />}</Route>
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
}
