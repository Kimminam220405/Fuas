import styles from "./page.module.css";

export default function information() {
  return (
    <>
      <div className={styles.bg}></div>
      <div className={styles.All}>
        <ul className={styles.people}>
          <a href="#" className={styles.arrow}>
            ←
          </a>
          <p className={styles.test}>인공지능 융합실 신청 </p>
        </ul>
        <ul className="notice">
          <b className={styles.bt}>인적사항</b>
          <div className={styles.inputAll}>
            <li className={styles.name}>이름</li>
            <input type="text" placeholder="Ex)김○○" className={styles.ip}></input>
            <li className={styles.name}>학번</li>
            <input type="text" placeholder="Ex)20304" className={styles.ip}></input>
          </div>
        </ul>
        <ul>
          <b className={styles.bt}>시간</b>
          <div className={styles.timeAll}>
            <li className={styles.name}>시작시간</li>
            <input type="time" className={styles.ipt}></input>
            <li className={styles.name}>종료시간</li>
            <input type="time" className={styles.ipt}></input>
          </div>
        </ul>
      </div>
      <button className={styles.B}>이용규칙 확인하기</button>
    </>
  );
}
