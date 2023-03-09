import { Datagrid, List, NumberField, TextField } from "react-admin";

export default function PokemonList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="small_img" />
        <TextField source="large_img" />
        <NumberField source="level" />
        <NumberField source="pv" />
        <TextField source="type" />
        <NumberField source="price" />
      </Datagrid>
    </List>
  );
}
