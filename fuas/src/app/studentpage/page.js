import React from "react";
import styles from "../page.module.css";
import "../static/student.css";
import ActionBar from "../components/actionBar";
import Remaining_number_of_people from "../components/Remaining_number_of_people";

export default function Home() {
  return (
    <div className={styles.main}>
      <ActionBar pageTitle="신청방" />
      <Remaining_number_of_people />
    </div>
  );
}
