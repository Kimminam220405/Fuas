"use client";
import React, { useEffect, useState } from "react";
import styles from "../page.module.css";
import ActionBar from "../components/actionBar";
import RemainingNumberofPeople from "../components/Remaining_number_of_people";
import UserData from "../components/UserData";
import "../static/student.css";

export default function Home() {
  const [totalCount, setTotalCount] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countResponse = await fetch("/api/count");
        const countData = await countResponse.json();
        setTotalCount(countData);

        const userResponse = await fetch("/api/userData");
        const userData = await userResponse.json();
        setUserData(userData);
      } catch (error) {
        console.error("데이터를 가져오는 도중 오류 발생:", error);
      }
    };

    if (userData.length === 0) {
      fetchData();
    }
  }, [userData]);

  return (
    <div className={styles.main}>
      <ActionBar pageTitle="신청방" />
      <RemainingNumberofPeople remaingNumber={totalCount} />

      {/* userData 배열의 각 요소에 대해 UserData 컴포넌트를 반복 생성 */}
      {userData.map((user) => (
        <UserData key={user.id} student_id={user.student_id} student_name={user.student_name} reservation={user.reservation} start_time={user.start_time} end_time={user.end_time} />
      ))}
    </div>
  );
}
