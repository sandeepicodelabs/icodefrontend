import React from "react"
import './style.css';

const ButtonBox = (props) => {
  const { type, buttonname, className } = props;
  return (
    <>
      <div className="button-box">
        <button
          type={type}
          className={className}
        > 
          {buttonname}
        </button>
      </div>
    </>
  )
}

export default ButtonBox;
