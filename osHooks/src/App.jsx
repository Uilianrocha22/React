import useCounter from "./hooks/useCounter";

function App() {
  const { count, increment } = useCounter();

  return (
    <>
      <button onClick={increment}>{`count é ${count}`}</button>
    </>
  );
}

export default App;
