import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav.jsx";
import GlobalContainer from "./components/GlobalContainer/GlobalContainer";
import CreateBreed from "./components/CreateBreed/CreateBreed.jsx";
import BreedDetail from "./components/BreedDetail/BreedDetail.jsx";
require("dotenv").config({ path: "../../.env" });

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<GlobalContainer />} />
        <Route path="CreateBreed" element={<CreateBreed />} />
        <Route path="BreedDetail/:id" element={<BreedDetail />} />
        <Route path="/:search" element={<GlobalContainer />} />
      </Routes>
    </div>
  );
}

export default App;
