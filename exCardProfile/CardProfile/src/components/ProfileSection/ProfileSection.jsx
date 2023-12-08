import styles from "./Profile.module.css";

export default function ProfileSection({ children, ...props }) {
  return (
    <div {...props} className={`${styles.wrapper} ${props.className}`}>
      {children}
    </div>
  );
}
