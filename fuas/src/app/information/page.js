import styles from "./page.module.css";
const modalb = document.querySelector(".b");
const dialog = document.querySelector(".dia");
modalb.addEventListener("click", () => {});

export default function information() {
  xx;
  return (
    <>
      <dialog className={styles.dia}>
        <ul>
          <b>이용규칙</b>
          <li>하루 최대 사용인원은 20명으로 하여</li>
          <li>순번이 20번이 되면 그날</li>
          <li>사용 인원 마감이 됩니다.</li>

          <li>AI 융합실은 음식물(음료포함)</li>
          <li>반입이 절대 금지입니다.</li>

          <li>마지막에 나가는 학생은 정리가 깨끗이 정리가 된</li>
          <li>AI융합실 전체 사진을 찍어</li>
          <li>올리고 퇴실합니다.</li>
          <li>우리모두 깨끗하게 함께</li>
          <li>사용할 수 있도록 합시다.</li>
        </ul>
        <button>확인</button>
      </dialog>
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
