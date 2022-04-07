import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <Layout>
        <Result />
        {/* <Home />
        <Signup /> */}
        {/* <Login /> */}
      </Layout>
    </div>
  );
}

export default App;
