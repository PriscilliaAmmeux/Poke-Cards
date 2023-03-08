import propTypes from "prop-types";
import { createContext, useMemo, useState } from "react";

const userContext = createContext();

function Provider({ children }) {
  const [userInfo, setUserInfo] = useState({
    lastname: "LadyBugs",
    firstname: "Sax59",
    email: null,
    id: null,
  });

  const context = useMemo(
    () => ({
      userInfo,
      setUserInfo,
    }),
    [userInfo, setUserInfo]
  );

  return (
    <userContext.Provider value={context}>{children}</userContext.Provider>
  );
}

export default Provider;
export { userContext };
const UserInfoShape = {
  lastname: propTypes.string,
  firstname: propTypes.string,
  email: propTypes.string,
  id: propTypes.number,
};

Provider.propTypes = {
  children: propTypes.shape({
    userInfo: propTypes.shape(UserInfoShape),
    setUserInfo: propTypes.shape(UserInfoShape),
  }).isRequired,
};
