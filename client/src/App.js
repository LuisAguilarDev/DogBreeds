import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound/NotFound";
import GlobalContainer from "./components/GlobalContainer/GlobalContainer";
import CreateBreed from "./components/CreateBreed/CreateBreed.jsx";
import BreedDetail from "./components/BreedDetail/BreedDetail.jsx";
import Home from "./components/Home/Home.jsx";
require("dotenv").config({ path: "../../.env" });

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<GlobalContainer />} />
        <Route path="CreateBreed" element={<CreateBreed />} />
        <Route path="BreedDetail/:id" element={<BreedDetail />} />
        <Route path="/:search" element={<GlobalContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
