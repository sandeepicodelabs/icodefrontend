import React from "react";
import "./style.scss";

const ButtonBox = (props) => {
  const { type, buttonname, className } = props;
  return (
    <>
      <div className="button-box">
        <button type={type} className={className}>
          <span className="rippleEffect">&nbsp;</span>
          {buttonname}
        </button>
      </div>
    </>
  );
};

export default ButtonBox;
