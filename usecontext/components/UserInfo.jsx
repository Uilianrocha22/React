import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function UserInfo() {
  const user2 = useContext(UserContext);
  return (
    <div>
      <h2>Informações do usuário:</h2>
      <p>Nome: {user2.name}</p>
      <p>Email: {user2.email}</p>
    </div>
  );
}
