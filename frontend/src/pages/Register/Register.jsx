import RegisterForm from "@components/RegisterForm/RegisterForm";
import Style from "./Style";

export default function Register() {
  return (
    <Style>
      <h1 className="registerTitle">PokeCard Game</h1>
      <RegisterForm />
    </Style>
  );
}
