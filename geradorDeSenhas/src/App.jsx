import { useState } from "react";
import Input from "./components/input";
import H3 from "./components/H3";
import Button from "./components/Button";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copiar");
  const [customSize, setCustomSize] = useState(8);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;

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
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>

      {showInput && (
        <Form>
          <label htmlFor="passawordSize2">Tamanho:</label>
          <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
        </Form>
      )}

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
