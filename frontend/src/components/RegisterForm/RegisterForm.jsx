import axios from "axios";
import { useState } from "react";

export default function RegisterForm() {
  const [newUser, setNewUser] = useState({
    peudo: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const hChange = (evt) => {
    setNewUser({ ...newUser, [evt.target.name]: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, newUser);
  };
  return (
    <form onSubmit={hSubmit}>
      <input
        type="text"
        name="pseudo"
        placeholder="pseudo"
        onChange={hChange}
      />
      <input type="email" name="email" placeholder="email" onChange={hChange} />
      <input
        type="email"
        name="confirmEmail"
        placeholder="confir email"
        onChange={hChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={hChange}
      />
      <input
        type="password"
        name="confirPassword"
        placeholder="confirm password"
        onChange={hChange}
      />
      <input type="submit" value="Register" />
    </form>
  );
}
