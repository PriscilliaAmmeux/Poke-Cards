import pokeball from "@assets/pokeball.png";
import pokeCardsGames from "@assets/pokeCardsGames.png";
import NavBar from "@components/Navbar/NavBar";
import { useState } from "react";
import Style from "./style";

export default function Home() {
  const [isActive] = useState("Home");
  return (
    <Style>
      <NavBar isActive={isActive} />

      <img src={pokeCardsGames} alt="Poke Cards Games" className="home-title" />
      <p className="welcome">Welcome !</p>
      <img className="pokeball" src={pokeball} alt="Pokeball" />
    </Style>
  );
}
