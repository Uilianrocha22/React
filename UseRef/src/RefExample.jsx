import { useRef } from "react";

export default function RefExample() {
  const inputRef = useRef("");

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "darkBlue";
    inputRef.current.placeholder = "Digite algo!";
  }

  return (
    <div>
      <label htmlFor="Ref">Ref:</label>
      <input p ref={inputRef} type="text" id="Ref" />
      <button onClick={handleClick}>Focar no input</button>
    </div>
  );
}
