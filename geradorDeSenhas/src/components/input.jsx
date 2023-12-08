export default function Input(props) {
  return (
    <input
      type="number"
      id="passawordSize2"
      min={1}
      value={props.passwordSize}
      onChange={(ev) => props.setPasswordSize(ev.target.value)}
    />
  );
}
