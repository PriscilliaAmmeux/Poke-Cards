import "reset-css";
import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home/Home";
import Deck from "@pages/Deck/Deck";
import Collection from "@pages/Collection/Collection";
import GamesPage from "@pages/GamesPage/GamesPage";
import Contact from "@pages/Contact/Contact";
import Style from "./style";

function App() {
  return (
    <Style>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/gamesPage" element={<GamesPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Style>
  );
}

export default App;
