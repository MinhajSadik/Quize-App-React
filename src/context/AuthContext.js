import React, { useContext, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  //signup function
  function signup() {
    return;
  }
  return (
    <AuthContext.Provider value={AuthContext}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
