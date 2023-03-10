import MyCollection from "@components/MyCollection/MyCollection";
import MyDeck from "@components/MyDeck/MyDeck";
import NavBar from "@components/Navbar/NavBar";
import User from "@pages/User/User";
import { useState } from "react";
import Style from "./style";

export default function Deck() {
  const [isActive] = useState("Deck");
  return (
    <Style>
      <NavBar isActive={isActive} />
      <User />
      <MyCollection />
      <MyDeck />
    </Style>
  );
}
