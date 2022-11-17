import Style from "./style";

export default function NavBar() {
  return (
    <Style>
      <ul className="navbar">
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="My Deck">My Deck</a>
        </li>
        <li>
          <a href="Collection">Collection</a>
        </li>
        <li>
          <a href="Play">Play</a>
        </li>
        <li>
          <a href="Contact">Contact</a>
        </li>
      </ul>
    </Style>
  );
}
