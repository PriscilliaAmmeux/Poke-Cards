import axios from "axios";
import { useState } from "react";
import Style from "./style";

export default function RegisterForm() {
  const [newUser, setNewUser] = useState({
    pseudo: "",
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
    if (newUser.email === newUser.confirmEmail) {
      if (newUser.password === newUser.confirmPassword) {
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, newUser);
      } else {
        alert("Password is not same!!!");
      }
    } else {
      alert("Email is not same!!");
    }
  };
  return (
    <Style>
      <form className="registerform" onSubmit={hSubmit}>
        <h2 className="signupTitle">Sign Up</h2>
        <label className="registerLabel" htmlFor="pseudo">
          You pseudo:
          <input
            className="registerinput"
            type="text"
            name="pseudo"
            placeholder="pseudo"
            onChange={hChange}
            required="required"
          />
        </label>
        <label className="registerLabel" htmlFor="email">
          You email:
          <input
            className="registerinput"
            type="email"
            name="email"
            placeholder="email"
            onChange={hChange}
            required="required"
          />
        </label>
        <label className="registerLabel" htmlFor="confirEmail">
          Confirm You E-mail:
          <input
            className="registerinput"
            type="email"
            name="confirmEmail"
            placeholder="confir email"
            onChange={hChange}
            required="required"
          />
        </label>
        <label className="registerLabel" htmlFor="password">
          You password:
          <input
            className="registerinput"
            type="password"
            name="password"
            placeholder="password"
            onChange={hChange}
            required="required"
          />
        </label>
        <label className="registerLabel" htmlFor="confirmPassword">
          Confirm you password:
          <input
            className="registerinput"
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            onChange={hChange}
            required="required"
          />
        </label>
        <input className="registerSubmit" type="submit" value="Register" />
      </form>
    </Style>
  );
}
