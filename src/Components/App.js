import "../styles/App.css";
import Layout from "./Layout";
// import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        <Login />
      </Layout>
    </div>
  );
}

export default App;
