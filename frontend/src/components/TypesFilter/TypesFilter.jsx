import elec from "@assets/elec.png";
import fire from "@assets/fire.png";
import fly from "@assets/fly.png";
import frozzen from "@assets/frozzen.png";
import insect from "@assets/insect.png";
import poison from "@assets/poison.png";
import psy from "@assets/psy.png";
import rock from "@assets/rock.png";
import water from "@assets/water.png";
import plant from "@assets/plant.png";
import dragon from "@assets/dragon.png";
import fairy from "@assets/fairy.png";
import tenebre from "@assets/tenebre.png";
import steel from "@assets/steel.png";
import sol from "@assets/sol.png";
import normal from "@assets/normal.png";
import combat from "@assets/combat.png";
import Style from "./style";

export default function TypesFilter() {
  return (
    <Style>
      <li>
        <button type="submit" className="filter">
          <img src={elec} alt="electrical type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={fire} alt="fire type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={fly} alt="fly type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={frozzen} alt="ice type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={insect} alt="insect type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={poison} alt="poison type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={psy} alt="psy type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={rock} alt="rock type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={water} alt="water type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={plant} alt="grace type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={dragon} alt="dragon type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={fairy} alt="fairy type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={tenebre} alt="tenebre type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={steel} alt="steel type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={sol} alt="sol type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={normal} alt="normal type" />
        </button>
      </li>
      <li>
        <button type="submit" className="filter">
          <img src={combat} alt="fairy type" />
        </button>
      </li>
    </Style>
  );
}
