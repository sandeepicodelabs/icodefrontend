import React from "react";
import "./blogcover.scss";

export default function BlogCoverCard(props) {
  const {
    blogtitle,
    img,
    profilename,
    postdate,
    blogheading,
    blogdescription,
    CardProfile,
  } = props;
  return (
    <>
      <div className="blog-card-box">
        {/* {filteredData.map((item,i)=> (
                    <p> {item.node?.Title}</p> 
                ) 
                )} */}
        <div className="blog-cover-image">
          <img src={img} alt="St Logo" />
        </div>
        <div className="blog-card-data">
          <h5 className="blog-card-title">{blogtitle}</h5>
          <div className="blog-card-detail-box">
            <div className="blog-profile-list">
              <img src={CardProfile} alt="st logo" />
              <div className="card-profile-wrap">
                <div className="profile-name">
                  <span>Posted by :</span> {profilename}{" "}
                </div>
                <div className="post-date">{postdate}</div>
              </div>
            </div>
            <div className="blog-card-description">{blogheading}</div>
          </div>
          <div className="blog-description">{blogdescription}</div>
        </div>
      </div>
    </>
  );
}
