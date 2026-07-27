import React from "react";
import "./instruction.css";

import InstructionIcon from "../../assets/svg/instruction-svg/coin.svg";

const Instruction = (props) => {
  return (
    <div className="instruction-container">
      <div className="instruction-icon">
        <img src={InstructionIcon} alt="" />
      </div>
      <div className="instruction-text">{props.instruction}</div>
    </div>
  );
};
export default Instruction;
