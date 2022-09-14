import "./App.css";
import Nav from "./Nav/Nav.jsx";
import GlobalContainer from "./GlobalContainer/GlobalContainer";
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
