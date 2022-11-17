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
        <img src={elec} alt="electrical type" />
      </li>
      <li>
        <img src={fire} alt="fire type" />
      </li>
      <li>
        <img src={fly} alt="fly type" />
      </li>
      <li>
        <img src={frozzen} alt="ice type" />
      </li>
      <li>
        <img src={insect} alt="insect type" />
      </li>
      <li>
        <img src={poison} alt="poison type" />
      </li>
      <li>
        <img src={psy} alt="psy type" />
      </li>
      <li>
        <img src={rock} alt="rock type" />
      </li>
      <li>
        <img src={water} alt="water type" />
      </li>
      <li>
        <img src={plant} alt="grace type" />
      </li>
      <li>
        <img src={dragon} alt="dragon type" />
      </li>
      <li>
        <img src={fairy} alt="fairy type" />
      </li>
      <li>
        <img src={tenebre} alt="tenebre type" />
      </li>
      <li>
        <img src={steel} alt="steel type" />
      </li>
      <li>
        <img src={sol} alt="sol type" />
      </li>
      <li>
        <img src={normal} alt="normal type" />
      </li>
      <li>
        <img src={combat} alt="fairy type" />
      </li>
    </Style>
  );
}
