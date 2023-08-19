import React from "react";
// import "../../assets/css/custom.css";

export default function testimonialcard(props) {
  const { testimonialmessage, img, clientname, clientaddress, commaimage } =
    props;
  // console.log("testimonial",props)
  return (
    <>
      <div className="testimonial-box">
        <div className="shadow-box">
          <div className="testimonial-message">{testimonialmessage}</div>
          <div className="testimonial-profile">
            <div className="testimonial-detail">
              {/* <img src={img} alt="St Logo" /> */}
              <div className="testimonial-data">
                <h5>{clientname}</h5>
                <p>{clientaddress}</p>
              </div>
            </div>
            <div className="icon-box">
              <img src={commaimage} alt="St Logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
