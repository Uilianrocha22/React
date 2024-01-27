import { useEffect, useState } from "react";
import "./App.css";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`o efeito colateral foi ativado`);

    return () => {
      console.log(`fazendo a limpeza`);
      console.log(`componente desmontado!`);
    };
  }, []);

  return (
    <button onClick={() => setCounter((counter) => counter + 1)}>
      Contador: {counter}
    </button>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h2>Conhecendo o UseEffect</h2>
      <div>
        <label htmlFor="show">Exibir</label>
        <input
          type="checkbox"
          id="show"
          value={show}
          onChange={() => setShow((state) => !state)}
        />
      </div>
      {show ? <Counter /> : null}
    </div>
  );
}
