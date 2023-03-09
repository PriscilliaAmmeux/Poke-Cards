import { Admin, EditGuesser, Resource } from "react-admin";
import dataProvider from "@services/dataProvider";
import userList from "@components/UsersList";
import PokemonList from "@components/PokemonList";

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="api/users" list={userList} edit={EditGuesser} />
      <Resource name="api/pokemon" list={PokemonList} />
    </Admin>
  );
}

export default App;
