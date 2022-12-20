import elec from "@assets/elec.png";
import fire from "@assets/fire.png";
import psy from "@assets/psy.png";
import water from "@assets/water.png";
import plant from "@assets/plant.png";
import dragon from "@assets/dragon.png";
import tenebre from "@assets/tenebre.png";
import steel from "@assets/steel.png";
import combat from "@assets/combat.png";
import "reset-css";
import Style from "./style";

export default function TypesFilter({ type, setType }) {
  const handleClick = (e) => {
    setType(e.target.value);
  };
  console.log(type);
  return (
    <Style>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={elec}
          className="filterradio"
          value="electric"
          onClick={handleClick}
        />
      </li>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={fire}
          className="filterradio"
          value="fire"
          onClick={handleClick}
        />
      </li>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={psy}
          className="filterradio"
          value="psychic"
          onClick={handleClick}
        />
      </li>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={water}
          className="filterradio"
          value="water"
          onClick={handleClick}
        />
      </li>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={plant}
          className="filterradio"
          value="plant"
          onClick={handleClick}
        />
      </li>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={dragon}
          className="filterradio"
          value="dragon"
          onClick={handleClick}
        />
      </li>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={tenebre}
          className="filterradio"
          value="tenebre"
          onClick={handleClick}
        />
      </li>
      <li className="filter">
        <input
          name="test"
          type="image"
          src={steel}
          className="filterradio"
          value="steel"
          onClick={handleClick}
        />
      </li>
      <li>
        <input
          name="test"
          type="image"
          src={combat}
          className="filterradio"
          value="combat"
          onClick={handleClick}
        />
      </li>
    </Style>
  );
}
