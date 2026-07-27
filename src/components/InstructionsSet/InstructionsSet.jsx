import React from "react";
import "./instructions-set.css";
import INST_LIST from "../../assets/instructions/INST_LIST";
import Instruction from "../Instruction/Instruction";

const InstructionsSet = () => {
    const instructionlist = INST_LIST.map((instruction, index) => (
        <Instruction instruction={instruction.instruction} key={index}/>
    ))
    return(
        <div className="instructions-container">
            <a id="instructions"></a>
            <div className="instructions-heading">
                <div className="instructions-heading-text"><h1>INSTRUCTIONS</h1></div>
                <hr className="instructions-heading-hr"/>
            </div>
            <div className="instructions-set">
                {instructionlist}
            </div>
        </div>
    )
}
export default InstructionsSet;