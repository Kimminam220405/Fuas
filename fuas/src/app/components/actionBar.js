import React from "react";
import Image from "next/image";
import backImg from "/public/Vector.png";

function Student(props) {
  const { pageTitle } = props;

  return (
    <div className="actionBar">
      <div className="backButton">
        <Image src={backImg} alt="뒤로가기" />
      </div>
      <div>
        <h2 className="pageTitles">{pageTitle}</h2>
      </div>
    </div>
  );
}

export default Student;
