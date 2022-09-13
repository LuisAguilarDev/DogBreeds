import "./App.css";
import Nav from "./Nav/Nav.jsx";
import SidePanel from "./SidePanel/SidePanel.jsx";
require("dotenv").config({ path: "../../.env" });

function App() {
  return (
    <div>
      <Nav />
      <SidePanel />
      <h1>Components</h1>
    </div>
  );
}

export default App;
