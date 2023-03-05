import { useContext } from "react";
import { userContext } from "@services/context/userContext";

export default function Test() {
  const { userInfo } = useContext(userContext);
  return (
    <section>
      <p>Name:{userInfo.lastname}</p>
    </section>
  );
}
