import { createContext, useMemo, useState } from "react";
import propTypes from "prop-types";

const purchaseContext = createContext();

function Provider({ children }) {
  const [purchase, setPurchase] = useState({
    id: null,
    name: "test",
    img: null,
    price: null,
  });

  const context = useMemo(
    () => ({
      purchase,
      setPurchase,
    }),
    [purchase, setPurchase]
  );

  return (
    <purchaseContext.Provider value={context}>
      {children}
    </purchaseContext.Provider>
  );
}

export default Provider;
export { purchaseContext };

const PurchaseShape = {
  id: propTypes.number,
  name: propTypes.string,
  img: propTypes.string,
  price: propTypes.number,
};

Provider.propTypes = {
  children: propTypes.shape({
    purchase: propTypes.shape(PurchaseShape),
    setPurchase: propTypes.shape(PurchaseShape),
  }).isRequired,
};
