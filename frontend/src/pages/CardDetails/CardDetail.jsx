import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@components/Navbar/NavBar";
import PokeDetail from "@components/PokeDetail/PokeDetails";

export default function CardDetail() {
  const [pokeData, setPokeData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/pokemon/${id}`)
      .then(({ data }) => {
        setPokeData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <NavBar />
      <PokeDetail pokeData={pokeData} />
    </>
  );
}
