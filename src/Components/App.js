import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route element={<PublicRoute />}>
              <Route exact path="/signup" element={<Signup />} />
            </Route>
            <Route element={<PublicRoute />}>
              <Route exact path="/login" element={<Login />} />
            </Route>
            <Route exact path="/quiz" element={<PrivateRoute />}>
              <Route element={<Quiz />} />
            </Route>
            <Route exact path="/result" element={<PrivateRoute />}>
              <Route element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
