import React from "react";
import { v4 as uuidv4 } from "uuid";

function Remaining_number_of_people(props) {
  const { remaingNumber } = props;

  if (!Array.isArray(remaingNumber)) {
    return (
      <div className="remaining_number_of_people">
        <div className="member_wrap">
          <p>남은인원</p>
          <p>20명</p>
        </div>
        <div className="move_to_section_wrap">
          <button className="move_to_section">공지방</button>
          <button className="move_to_section">제보방</button>
          <button className="move_to_section">인증방</button>
        </div>
      </div>
    );
  }

  const uuids = remaingNumber.map(() => uuidv4());

  return (
    <div className="remaining_number_of_people">
      <div className="member_wrap">
        <p>남은인원</p>
        {remaingNumber.map((person, index) => (
          <p key={uuids[index]}>{20 - person.total_count}명</p>
        ))}
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
