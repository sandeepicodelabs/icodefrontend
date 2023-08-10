import React from "react";
// import '../../assets/css/custom.css';

function companyapproachecard(props) {
  const { img, approachheading, approachsubheading } = props;
  // console.log('cardcompany',img)
  return (
    <>
      <div className="company-approach-box">
        <a href="/ourapproach">
          <div className="approach-logo">
            <img src={img} alt="St Logo" />
          </div>
          <div className="apporoach-description">
            <div className="approach-heading">{approachheading}</div>
            <div className="approach-subheading">{approachsubheading}</div>
          </div>
        </a>
      </div>
    </>
  );
}

export default companyapproachecard;
