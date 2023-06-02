import styles from "./style.module.css";

export default function Post(Props) {
  return <div className={styles.post}>{Props.children}</div>;
}
