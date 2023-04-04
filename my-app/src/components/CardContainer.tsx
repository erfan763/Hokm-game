import styles from "../styles/Card.module.css";

export default function CardContainer({ children }: { children?: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
