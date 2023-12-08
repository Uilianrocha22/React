import styles from "../App.module.scss";

export default function Title() {
  const tech = "React";
  return <h1 className={styles.Title}>{tech} is awesome !!!</h1>;
}
