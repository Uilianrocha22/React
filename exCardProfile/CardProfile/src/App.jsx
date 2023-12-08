import CardProfile from "./components/CardProfile";
import imgProfile from "./assets/foto-p.png";
import styles from "./components/Card.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <CardProfile
        avatar={imgProfile}
        name="Uilian rocha"
        bio="Desenvolvedor javascript front end react"
        email="Uilianoliveira126@gmail.com"
        phone="(+55) 1198333-1546"
        githubUrl="https://github.com"
        linkedinUrl="https://www.linkedin.com"
        twitterUrl="https://twitter.com"
      />
    </div>
  );
}
