import React from "react";
//import { graphql } from "gatsby";
// import '../../assets/css/custom.css';

const WhyChooseCard = (props) => {
  // console.log('whychoosecard',props)

  const { img, subheading } = props;
  return (
    <>
      <div className="code-experience">
        <div className="experience-image">
          <img src={img} alt="St Logo" />
        </div>
        <div className="experience-subheading">{subheading}</div>
      </div>
    </>
  );
};

export default WhyChooseCard;

// export const query = graphql`
// query MyQuery {

// }
// `
