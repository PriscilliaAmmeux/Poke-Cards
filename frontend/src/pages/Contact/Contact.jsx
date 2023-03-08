import NavBar from "@components/Navbar/NavBar";
import { useState } from "react";
import Style from "./style";

export default function Contact() {
  const [isActive] = useState("Contact");
  return (
    <Style>
      <NavBar isActive={isActive} />
      <div className="form">
        <h1 className="titleForm">Contact Us</h1>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="message">
          Your request:
          <textarea name="message" id="message" cols="30" rows="10" />
        </label>
        <input className="submit" type="submit" value="Submit" />
      </div>
    </Style>
  );
}
