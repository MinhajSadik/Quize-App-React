import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Layout>
        <Quiz />
        {/* <Home />
        <Signup /> */}
        {/* <Login /> */}
      </Layout>
    </div>
  );
}

export default App;
