import styles from "./styles.module.scss";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className={styles.dotsContainer}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </section>
  );
}
