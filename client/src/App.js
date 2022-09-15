import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import GlobalContainer from "./components/GlobalContainer/GlobalContainer";
require("dotenv").config({ path: "../../.env" });

function App() {
  return (
    <div>
      <Nav />
      <GlobalContainer />
    </div>
  );
}

export default App;
