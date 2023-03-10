import Form from "@components/Form/Form";
import NavBar from "@components/Navbar/NavBar";
import { useState } from "react";
import Style from "./style";

export default function Contact() {
  const [isActive] = useState("Contact");
  return (
    <Style>
      <NavBar isActive={isActive} />
      <div className="display-form-contact">
        <Form />
      </div>
    </Style>
  );
}
