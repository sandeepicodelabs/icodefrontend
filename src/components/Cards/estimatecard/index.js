import React from "react";
import ButtonBox from "../../button";

const EstimateCard = (props) => {
  //const { type, buttonname, className } = props;

  return (
    <>
      <div className="estimate-contact">
        <div className="estimate-content">
          <h3>Send your proposal now and get FREE analysis & estimation!</h3>
        </div>
        <a href="/contact">
          <ButtonBox buttonname="contact now" className="estimate-submit" />
        </a>
      </div>
    </>
  );
};

export default EstimateCard;
