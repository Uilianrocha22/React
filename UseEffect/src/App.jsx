import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`o efeito colateral foi ativado`);
  }, [counter]);

  return (
    <div>
      <h2>Conhecendo o UseEffect</h2>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Contador: {counter}
      </button>
    </div>
  );
}

export default App;
