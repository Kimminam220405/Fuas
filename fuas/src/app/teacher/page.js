import styles from "./page3.module.css";

export default function teacher() {
  return (
    <>
      <div className={styles.bg}></div>
      <p className={styles.BT}>←</p>
      <p className={styles.text}>로그인 해주세요</p>
      <img src="../google.png" alt="google" className={styles.img} />
    </>
  );
}
