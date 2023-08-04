import React from 'react'
import './style.css'

export default function BlogArticleCard(props) {
    const { cardtitle, img, cardprofileimg, profilename, postdate, carddescription } = props; 

  return (
    <>
            <div className="article-card-box">
              <div className="blog-cover-image">
                <img src={img} alt="St Logo" />
              </div>
              <div className="blog-card-data">
                <h5 className="blog-card-title">{cardtitle}</h5>
                <div className="blog-card-detail-box">
                  <div className="blog-profile-list">
                    <img src={cardprofileimg} alt=' '/>
                    <div className="card-profile-wrap">
                      <div className="profile-name"><span>Posted by :</span> {profilename}</div>
                      <div className="post-date">{postdate} </div>
                    </div>
                  </div>
                  <div className="blog-card-description">
                    {carddescription}
                  </div>
                </div>
              </div>
            </div>
          </>
  )
}
