import NavBar from "@components/Navbar/NavBar";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Style from "./style";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_rvb51jb",
      "template_ehbe1bk",
      form.current,
      "SZ3K--33UQN71Zi6Z"
    );
    e.target.reset();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message send",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [isActive] = useState("Contact");
  return (
    <Style>
      <NavBar isActive={isActive} />
      <div className="form">
        <h1 className="titleForm">Contact Us</h1>
        <form ref={form} onSubmit={sendEmail} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name/pseudo"
            className="label"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="label"
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            className="label"
            required
          />
          <button type="submit" className="btn-submit btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </Style>
  );
}
