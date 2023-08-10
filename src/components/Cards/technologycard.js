import React from "react";
import IconUIUXDesign from "../IconUIUXDesign/IconUIUXDesign";
import IconDevelopment from "../IconDevelopment/IconDevelopment";

const TechnologyCard = (props) => {
  const { img, technologyheading, technologydescription } = props;

  return (
    <div className="join-our-team">
      <span>
        <img src={img} alt="St Logo" />
        {/* <IconUIUXDesign /> */}
      </span>
      <h5>{technologyheading}</h5>
      <p>{technologydescription}</p>
    </div>
  );
};

export default TechnologyCard;
