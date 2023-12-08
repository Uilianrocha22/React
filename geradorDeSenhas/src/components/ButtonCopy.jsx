export default function ButtonCopy(props) {
  return <button onClick={props.copyToClipboard}>{props.copy}</button>;
}
