import React from "react";
import "../../../pages/StackToolsCard.scss";

const StackToolsCard = (props) => {
  const { name, techchild } = props;

  return (
    <div className="stack-card">
      <div className="stack-card-box">
        <div className="stack-label">{name}</div>
        <div className="stack-card-tech">
          <ul>
            {techchild?.map((i) => (
              <li key={i}>{i.stacktech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StackToolsCard;
