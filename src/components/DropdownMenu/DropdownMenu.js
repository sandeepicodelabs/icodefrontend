import React, { useState, useRef, useEffect } from "react";
import "./DropdownMenu.scss";

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

  return (
    <div className="dropDownMenu" key={dropdownRef}>
      <div className="dropdownBtn" onClick={() => toggleDropdown()}>
        {props?.title} <span className="caret">&nbsp;</span>
      </div>
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
    </div>
  );
};

export default DropdownMenu;
