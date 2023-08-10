import React from "react";
import { string } from "prop-types";
import classNames from "classnames";

const IconMission = (props) => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName, className);

  return (
    <svg
      className={classes}
      width="36"
      height="36"
      fill="#000000"
      viewBox="-6 0 32 32"
      version="1.1"
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
        <path d="M19.36 6.6c-0.4-0.4-0.92-0.56-1.48-0.6-2.36 0-5.96 3.4-8.44 5.96l-0.24 0.28c-0.36 0.28-2.2 0.2-3.28 0.16-1.6-0.080-3.12-0.12-4.12 0.24-0.52 0.2-1.16 0.92-1.56 1.48-0.24 0.32-0.24 0.76 0.040 1.080l2.76 3.28c-0.44 0.56-0.64 1.2-0.64 1.88 0 0.56 0.16 1.12 0.44 1.6l-0.48 0.48c-0.32 0.32-0.32 0.88 0 1.2 0.16 0.16 0.4 0.24 0.6 0.24s0.44-0.080 0.6-0.24l0.48-0.48c0.48 0.28 1.040 0.44 1.6 0.44 0.68 0 1.32-0.2 1.84-0.56l3.28 2.76c0.16 0.12 0.36 0.2 0.56 0.2s0.36-0.040 0.52-0.16c0.56-0.44 1.28-1.080 1.48-1.56 0.4-0.96 0.32-2.48 0.24-4.12-0.040-1.080-0.12-2.92 0.16-3.28l0.28-0.28c2.56-2.52 5.96-6.12 5.96-8.44-0.040-0.64-0.24-1.16-0.6-1.56zM12.76 15.36l-0.28 0.28c-0.76 0.76-0.72 2.24-0.64 4.56 0.040 1.28 0.12 2.72-0.12 3.36-0.040 0.080-0.24 0.28-0.44 0.44l-3.28-2.76c-0.16-0.12-0.36-0.2-0.56-0.2-0.040 0-0.040 0-0.080 0-0.24 0-0.44 0.12-0.56 0.32-0.040 0.040-0.080 0.080-0.080 0.12-0.56 0.56-1.56 0.56-2.16 0-0.28-0.28-0.44-0.68-0.44-1.080s0.16-0.8 0.44-1.080c0.040-0.040 0.080-0.080 0.12-0.080 0.16-0.16 0.28-0.36 0.32-0.56 0-0.24-0.040-0.44-0.2-0.64l-2.76-3.28c0.2-0.2 0.36-0.36 0.44-0.44 0.64-0.24 2.080-0.2 3.36-0.12 2.32 0.080 3.8 0.12 4.56-0.64l0.28-0.28c4.64-4.76 6.52-5.44 7.24-5.48 0.2 0 0.24 0.040 0.28 0.080s0.080 0.080 0.080 0.28c-0.040 0.64-0.76 2.56-5.52 7.2z"></path>{" "}
      </g>
    </svg>
  );
};

IconMission.defaultProps = { className: null };

IconMission.propTypes = {
  className: string,
  rootClassName: string,
};

export default IconMission;