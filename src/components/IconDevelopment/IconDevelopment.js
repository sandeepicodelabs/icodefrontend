import React from "react";
import { string } from "prop-types";
import classNames from "classnames";

const IconDevelopment = (props) => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName, className);

  return (
    <svg
      className={classes}
      width="50"
      height="50"
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
          d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};

IconDevelopment.defaultProps = { className: null };

IconDevelopment.propTypes = {
  className: string,
  rootClassName: string,
};

export default IconDevelopment;
