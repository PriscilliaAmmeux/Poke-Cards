import Sorts from "@components/Sorts/Sorts";
import Description from "@components/Description/Description";
import HeaderCards from "@components/HeaderCards/HeaderCards";
import Weakness from "@components/Weahness/Weakness";

export default function Card() {
  return (
    <div>
      <HeaderCards />
      <Description />
      <Sorts />
      <Weakness />
    </div>
  );
}
