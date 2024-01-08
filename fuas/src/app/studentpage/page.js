import React from "react";
import Image from "next/image";
import styles from "../page.module.css";
import backImg from "/public/Vector.png";
import ActionBar from "../components/actionBar";
import "../static/student.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className="backButton">
        <Image src={backImg} alt="뒤로가기" />
        <ActionBar pageTitle="신청방" />
      </div>
    </div>
  );
}
