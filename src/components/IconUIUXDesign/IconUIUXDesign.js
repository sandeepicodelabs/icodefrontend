import React from "react";
import { string } from "prop-types";
import classNames from "classnames";

const IconUIUXDesign = (props) => {
  const { className, rootClassName } = props;
  const classes = classNames(rootClassName, className);

  return (
    <svg
      fill="#ffffff"
      className={classes}
      width="50"
      height="50"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      stroke="#ffffff"
      strokeWidth={2}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="2"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M446.707,104.261H325.832V0h-135.03v104.261H65.294L3.226,164.005l62.068,59.73h125.506v26.016H65.295L3.225,309.487 l62.069,59.735h125.506v15.498l67.515,127.28l67.516-127.28V223.735h120.875l62.068-59.73L446.707,104.261z M190.802,338.004 H77.878l-29.632-28.516l29.632-28.517h112.924V338.004z M190.802,192.516H77.876l-29.631-28.514l29.632-28.523h112.925V192.516z M258.317,445.378l-29.684-55.959H288L258.317,445.378z M294.613,358.2h-72.592V249.751V92.616h72.592V358.2z M294.613,61.397 h-72.592V31.219h72.592V61.397z M434.126,192.516H325.832V135.48h108.293l29.632,28.523L434.126,192.516z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

IconUIUXDesign.defaultProps = { className: null };

IconUIUXDesign.propTypes = {
  className: string,
  rootClassName: string,
};

export default IconUIUXDesign;
