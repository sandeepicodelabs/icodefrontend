import React from "react"
//import {graphql } from "gatsby"
import '../../assets/css/custom.css';
// import Subtract from '../images/Subtract.png';

const TechnologyCard = (props) => {
  const { img, technologyheading, technologydescription } = props;
  // console.log('tec',props);

  return (
    
      <div className="technology-box">
        <div className="technology-image">
          <img src={img} alt="St Logo" />
          <span>{technologyheading}</span>
        </div>
        <div className="technology-body">
          <p>
            {technologydescription}
          </p>
        </div>
      </div>
   
  )

}


export default TechnologyCard
