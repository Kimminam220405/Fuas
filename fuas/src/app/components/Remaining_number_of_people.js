import React from "react";

function Remaining_number_of_people(props) {
  const { remaingNumber } = props;

  return (
    <div className="remaining_number_of_people">
      <div className="member_wrap">
        <p>남은인원</p>
        <p>{remaingNumber}</p>
      </div>
      <div className="move_to_section_wrap">
        <button className="move_to_section">공지방</button>
        <button className="move_to_section">제보방</button>
        <button className="move_to_section">인증방</button>
      </div>
    </div>
  );
}

export default Remaining_number_of_people;
