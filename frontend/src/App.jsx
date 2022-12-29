import "reset-css";
import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import Deck from "@pages/Deck/Deck";
import Collection from "@pages/Collection/Collection";
import GamesPage from "@pages/GamesPage/GamesPage";
import Contact from "@pages/Contact/Contact";
import PledgeStore from "@pages/PledgeStore/PledgeStore";
import Style from "./style";

function App() {
  return (
    <Style>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/gamespage" element={<GamesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pledge" element={<PledgeStore />} />
      </Routes>
    </Style>
  );
}

export default App;
