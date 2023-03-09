import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export default function userList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="pseudo" />
        <EmailField source="email" />
        <NumberField source="wallet" />
      </Datagrid>
    </List>
  );
}
