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

export default function TypesFilter() {
  return (
    <Style>
      <li className="filter">
        <button type="submit" className="filter" value="Lightning">
          <img src={elec} alt="electrical type" />
        </button>
      </li>
      <li className="filter">
        <button type="submit" className="filter" value="Fire">
          <img src={fire} alt="fire type" />
        </button>
      </li>
      <li className="filter">
        <button type="submit" className="filter" value="Psychic">
          <img src={psy} alt="psy type" />
        </button>
      </li>
      <li className="filter">
        <button type="submit" className="filter" value="Water">
          <img src={water} alt="water type" />
        </button>
      </li>
      <li className="filter">
        <button type="submit" className="filter" value="Grass">
          <img src={plant} alt="grace type" />
        </button>
      </li>
      <li className="filter">
        <button type="submit" className="filter" value="Dragon">
          <img src={dragon} alt="dragon type" />
        </button>
      </li>
      <li className="filter">
        <button type="submit" className="filter" value="Darkness">
          <img src={tenebre} alt="tenebre type" />
        </button>
      </li>
      <li className="filter">
        <button type="submit" className="filter" value="Metal">
          <img src={steel} alt="steel type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter" value="Fighting">
          <img src={combat} alt="fairy type" />
        </button>
      </li>
    </Style>
  );
}
