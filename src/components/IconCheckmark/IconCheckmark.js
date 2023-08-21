import React from "react";
import { string } from "prop-types";
import classNames from "classnames";

const IconCheckmark = (props) => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName, className);

  return (
    <svg
      className={classes}
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M4 12.6111L8.92308 17.5L20 6.5"
          stroke="#005b58"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

IconCheckmark.defaultProps = { className: null };

IconCheckmark.propTypes = {
  className: string,
  rootClassName: string,
};

export default IconCheckmark;
