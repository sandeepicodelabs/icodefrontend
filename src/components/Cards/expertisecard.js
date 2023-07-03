import React from "react"  
import '../../assets/css/custom.css';
 
const ExpertiseCard = (props) => {
     
    const { img, expertisetitle } = props;  
    //console.log("card",expertisetitle)  
  return (
    <>
      <div className="expertise-box">
        {/* <a href="/trendingtechnologies"> */}
            <div className="expertise-card-box">
              <p className="expertise-card-title">{expertisetitle}</p>
              <span className="expertise-card-logo">
                <img src={img} alt="St Logo"/>
              </span>
            </div>
        {/* </a> */}
      </div>
    </>
       )
       
  }

export default ExpertiseCard
