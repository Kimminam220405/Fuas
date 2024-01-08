"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

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
    <>
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
    </>
  );
}
