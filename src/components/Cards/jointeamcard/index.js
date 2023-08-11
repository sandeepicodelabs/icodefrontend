import React from "react";
import "./jointeamcard.scss";

export default function WhyWeJoinCard(props) {
  const { img, teamdescription, teamheading } = props;
  console.log(props,"whywejoin")
  return (
    <>
      <div className="join-our-team">
        <span>
          <img src={img} alt="st logo" />
        </span>
        <h5>{teamheading}</h5>
        <p>{teamdescription}</p>
      </div>
    </>
  );
}
