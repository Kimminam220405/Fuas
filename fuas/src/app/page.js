"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import "./static/main.css";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/route");
        const result = await response.json();
        setData(result.data);
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div className="header">
        <h1 className="title">
          Fusion Room <br /> Apply Service
        </h1>
        <p className="subTitle">
          <span className="briket"> [ </span> 모두의 융합실을 위하여 <span className="briket"> ] </span>
        </p>
      </div>

      <button type="button" className="startBtn" onClick={() => (location.href = "/studentpage")}>
        Get Started
      </button>
    </main>
  );
}
