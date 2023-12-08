import { useState } from "react";
import styles from "../components/Card.module.css";
import LinkButton from "./LinkButton/LinkButton";
import ProfileSection from "./ProfileSection/ProfileSection";
import Title from "./Title/Title";

export default function CardProfile({
  avatar,
  name,
  bio,
  phone,
  email,
  githubUrl,
  linkedinUrl,
  twitterUrl,
}) {
  // UseState ...
  // É definido num array ex: [variável , FunctionModificadora]

  const [followText, setFollowText] = useState("Follow");

  function handleClick(ev) {
    console.log(ev);
    ev.preventDefault();

    if (followText === "Follow") {
      setFollowText("Following");
    } else {
      setFollowText("Follow");
    }
  }

  const [likeCount, setLikeCount] = useState(0);

  function handleClickLike() {
    setLikeCount((count) => count + 1);
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt={name} />

      <Title>
        <span>{name}</span>
        <button onClick={handleClick}>{followText}</button>
        <button onClick={handleClickLike}>{likeCount}</button>
      </Title>

      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>
      <ProfileSection>{phone}</ProfileSection>

      <ProfileSection
        className={styles.links}
        id="links-section"
        data-test="some value"
        aria-label="social links"
      >
        <LinkButton href={githubUrl}>GitHub</LinkButton>
        <LinkButton href={linkedinUrl}>Linkedin</LinkButton>
        <LinkButton href={twitterUrl}>Twitter</LinkButton>
      </ProfileSection>
    </div>
  );
}
