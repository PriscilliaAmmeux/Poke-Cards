import Bucket from "@components/Bucket/Bucket";
import NavBar from "@components/Navbar/NavBar";
import PledgeCount from "@components/PledgeCount/PledgeCount";
import Style from "./style";

export default function PledgeStore() {
  return (
    <Style>
      <NavBar />
      <section className="pledgeStore">
        <h1 className="titleStore">Pledge Store</h1>
        <div className="buyandcount">
          <Bucket />
          <PledgeCount />
        </div>
      </section>
    </Style>
  );
}
