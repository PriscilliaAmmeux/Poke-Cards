import axios from "axios";
import { useState, useEffect } from "react";
import Bucket from "@components/Bucket/Bucket";
import NavBar from "@components/Navbar/NavBar";
import PledgeCount from "@components/PledgeCount/PledgeCount";
import Style from "./style";

export default function PledgeStore() {
  const [purchaseValue, setPurchaseValue] = useState([]);
  const [user, setUser] = useState([]);
  // const [wallet, setWallet] = useState(2000000);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/1`)
      .then(({ data }) => {
        setUser(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/pokemon/3`)
      .then(({ data }) => {
        setPurchaseValue(data.price);
      });
  }, []);
  return (
    <Style>
      <NavBar />
      <section className="pledgeStore">
        <h1 className="titleStore">Pledge Store</h1>
        <div className="buyandcount">
          <Bucket />
          <PledgeCount
            user={user}
            purchaseValue={purchaseValue}
            // setWallet={setWallet}
            // wallet={wallet}
          />
        </div>
      </section>
    </Style>
  );
}
