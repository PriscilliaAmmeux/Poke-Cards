import { purchaseContext } from "@services/context/purchaseContext";
import { useContext } from "react";

export default function Test() {
  const { purchase } = useContext(purchaseContext);
  return (
    <>
      <p>Name: {purchase.name}</p>
      <p>img:</p>
      <p>Price:</p>
    </>
  );
}
