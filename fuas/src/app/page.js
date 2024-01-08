"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import styled from "styled-components";

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
  // const Btn = styled.button`
  //   color: ${(props) => props.cr};
  // `;
  return (
    <>
      <div className="bg"> </div>
      <ul className="user">
        {/* <Btn cr="blue">버튼</Btn> */}
        <li>
          <p className="name">당신은 어떤</p>
          <p className="name">사용자인가요?</p>
          <button className="buttons">
            <b>Teacher</b>
          </button>
          <button className="buttons">
            <b>Student</b>
          </button>
        </li>
      </ul>
    </>
  );
}
