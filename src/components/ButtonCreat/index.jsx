import TimeLine from "../Post/TimeLine";
import styles from "./styles.module.css";

export default function ButtonCreat() {
  return (
    <button
      onClick={TimeLine}
      className={styles.btn}
      type="submit"
      value="criar post"
    >
      Create
    </button>
  );
}
