import ContactForm from "@components/ContactForm/ContactForm";
import NavBar from "@components/Navbar/NavBar";

import Style from "./style";

export default function Contact() {
  return (
    <Style>
      <NavBar />
      <div className="form">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </Style>
  );
}
