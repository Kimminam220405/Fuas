"use client";
import React from "react";
import styles from "../page.module.css";
import "../static/selectPosition.css";

export default function SelectPosition() {
  return (
    <main className={styles.main}>
      <div className="content_wrap">
        <div className="title">
          <h1>
            당신은 어떤
            <br />
            사용자인가요?
          </h1>
        </div>
        <div className="selectPositionWrap">
          <button className="selectPosition teacher">Teacher</button>
          <button className="selectPosition student" onClick={() => (location.href = "/studentpage")}>
            Student
          </button>
        </div>
      </div>
    </main>
  );
}
