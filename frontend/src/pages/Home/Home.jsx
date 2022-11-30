import NavBar from "@components/Navbar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <button type="button">Deck</button>
      <button type="button">Play</button>
      <button type="button">Collection</button>
      <button type="button">Contact</button>
    </div>
  );
}
