import StatusText from "./components/StatusText";
import { SubTitle } from "./components/SubTitle";
import Title from "./components/Title";
import styles from "./App.module.scss";
import poster from "./assets/poster-palmeiras.jpg";

export default function App() {
  return (
    <div className={styles.app}>
      <img
        className={styles.imgPoster}
        src={poster}
        alt="imagem poster palmeiras"
      />
      <div className={styles.conteudoPoster}>
        <Title />
        <SubTitle />
        <StatusText />
      </div>
    </div>
  );
}
