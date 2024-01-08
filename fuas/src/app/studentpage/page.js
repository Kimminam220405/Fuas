"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import "../static/student.css";
import ActionBar from "../components/actionBar";
import RemainingNumberofPeople from "../components/Remaining_number_of_people";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/route");
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error("데이터를 가져오는 도중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <ActionBar pageTitle="신청방" />
      <RemainingNumberofPeople remaingNumber={data} />
    </div>
  );
}
