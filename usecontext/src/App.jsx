import Header from "../components/Header";
import UserInfo from "../components/UserInfo";
import UserContext from "../contexts/UserContext";

export default function App() {
  const user = {
    name: "João",
    email: "João@gamil.com",
  };

  return (
    <UserContext.Provider value={user}>
      <Header />
      <h1>Usando o UseContext</h1>
      <UserInfo />
    </UserContext.Provider>
  );
}
