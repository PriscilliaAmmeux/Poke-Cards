import BattleGround from "@components/BattleGround/BattleGround";
import NavBar from "@components/Navbar/NavBar";
import { useState } from "react";

export default function GamesPage() {
  const [isActive] = useState("Play");
  return (
    <>
      <NavBar isActive={isActive} />
      <BattleGround />
    </>
  );
}
