import { useEffect, useState } from "react";
import axios from "axios";
import Style from "./style";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/1`)
      .then(({ data }) => {
        setUser(data);
      });
  }, []);

  return (
    <Style>
      <h1 className="pseudo-deck">Pseudo : {user.pseudo} </h1>
      <p className="wallet-deck">Wallet : {user.wallet} </p>
    </Style>
  );
}
