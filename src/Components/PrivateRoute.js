import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { currentUser } = useAuth();
  return currentUser ? <Route {...rest} /> : <Redirect to="/login" />;
}
