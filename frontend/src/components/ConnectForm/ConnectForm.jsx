import { useState } from "react";
import Style from "./style";

export default function ConnectForm() {
  const [newConnect, setNewConnect] = useState({
    pseudo: "",
    password: "",
  });
  const hChange = (evt) => {
    setNewConnect({ ...newConnect, [evt.target.name]: evt.target.value });
  };
  const hsubmit = (evt) => {
    evt.preventDefault();
  };
  return (
    <Style onSubmit={hsubmit}>
      <h2>Connect</h2>
      <label className="connectLabel" htmlFor="pseudo">
        Pseudo:
        <input
          className="connectInput"
          type="text"
          name="pseudo"
          onChange={hChange}
        />
      </label>
      <label className="connectLabel" htmlFor="password">
        Password:
        <input
          className="connectInput"
          type="password"
          name="password"
          onChange={hChange}
        />
      </label>
      <input className="connectSubmit" type="submit" value="Connect" />
    </Style>
  );
}
