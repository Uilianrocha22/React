import Button from "./Button";
import styles from "./styles.module.css";

export default function Card({ img, title, p, textButton }) {
  return (
    <div className={styles.container}>
      <img src={img} alt="poster palmeiras" />
      <div>
        <h2>{title}</h2>
        <p>{p}</p>
        <Button>
          <span>{textButton}</span>
        </Button>
      </div>
    </div>
  );
}
