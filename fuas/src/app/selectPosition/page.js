import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function SelectPosition() {
  return (
    <main className={styles.main}>
      <div className="bg"> </div>
      <ul className="user">
        <li>
          <p>당신은 어떤</p>
          <p>사용자인가요?</p>
          <button>
            <b>Teacher</b>
          </button>
          <button>
            <b>Student</b>
          </button>
        </li>
      </ul>
    </main>
  );
}
