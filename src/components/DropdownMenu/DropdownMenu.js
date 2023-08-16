import React, { useState, useRef, useEffect } from "react";
import "./DropdownMenu.scss";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const DropdownMenu = (props) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(!activeDropdown);
  };

  const handleClickOutside = (event) => {
    if (event.target !== dropdownRef.current) {
      setActiveDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const { width } = useWindowDimensions();
  const isMobileLayout = width < 1024;
  return (
    <div className="dropDownMenu" key={dropdownRef}>
      <div className="dropdownBtn" onClick={() => toggleDropdown()}>
        {props?.title} <span className="caret">&nbsp;</span>
      </div>
      {isMobileLayout ? (
        <>
          {activeDropdown && (
            <div className="menuList">
              {props?.options.map((option) => {
                return (
                  <a key={option.text} href={option.link}>
                    {option.text}
                  </a>
                );
              })}
            </div>
          )}
        </>
      ) : (
        <div className="menuList">
          {props?.options.map((option) => {
            return (
              <a key={option.text} href={option.link}>
                {option.text}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
