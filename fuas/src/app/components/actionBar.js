import React from "react";
import styles from "../page.module.css";

function Student(props) {
  const { pageTitle } = props;

  return (
    <div className={styles.actionBar}>
      <div>
        <h2 className={styles.pageTitles}>{pageTitle}</h2>
      </div>
    </div>
  );
}

export default Student;
