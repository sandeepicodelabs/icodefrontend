import React from 'react'
import './style.css'

export default function MostPopularCard(props) {
  const { populartitle, profilename, postdate, blogdescription } = props;
  return (
    <>
    <div className="popular-article-card-box">
      <div className="polular-card-data">
        <h5 className="popular-blog-card-title">{populartitle}</h5>
        <div className="blog-card-detail-box">
          <div className="popular-profile-list">
            <div className="popular-card-profile-wrap">
              <div className="popular-profile-name"><span>Posted by :</span> {profilename} </div>
              <div className="popular-post-date">{postdate}</div>
            </div>
          </div>
          <div className="blog-card-description">
            {blogdescription}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
