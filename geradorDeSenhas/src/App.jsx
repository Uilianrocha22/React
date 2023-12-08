import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import H3 from "./components/H3";
import ButtonCopy from "./components/ButtonCopy";
import ButtonGenerate from "./components/ButtonGenerate";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(10);

  function generatePassword() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";

    let newPassword = "";

    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }

    setPassword(newPassword);
    setCopy("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopy("Copiado!");
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>

      <Form>
        <label htmlFor="passawordSize2">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      </Form>

      <div className="caixaButton">
        <Button
          onClick={generatePassword}
          text={`Gerar senha de ${passwordSize} caracteres`}
        />

        <Button onClick={copyToClipboard} text={copy} />
      </div>

      <H3 password={password} />
    </div>
  );
}

export default App;
