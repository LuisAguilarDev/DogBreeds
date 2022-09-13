import "./App.css";
import Nav from "./Nav/Nav.jsx";
require("dotenv").config({ path: "../../.env" });

function App() {
  return (
    <div>
      <Nav />
      <h1>Components</h1>
    </div>
  );
}

export default App;
