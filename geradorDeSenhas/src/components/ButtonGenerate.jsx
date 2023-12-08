export default function ButtonGenerate(props) {
  return <button onClick={props.generatePassword}>{props.passwordSize}</button>;
}
