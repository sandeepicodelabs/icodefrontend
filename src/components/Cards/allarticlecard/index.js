import React from "react";
import "./allarticlecard.scss";
import { Link } from "gatsby";

export default function AllArticleCard(props) {
  const {
    articleTitle,
    articledescription,
    postedname,
    postdate,
    cardtitle,
    img,
    cardprofile,
    slug,
  } = props;
  //console.log("article image",img)
  return (
    <Link to={"/blog/" + slug}>
      <div className="all-article-card-box">
        <div className="all-article-cover-image">
          <img src={img} alt="St Logo" />
        </div>
        <div className="all-article-card-data">
          <h5 className="all-article-card-title">{articleTitle}</h5>
          <div className="all-article-card-detail-box">
            <div className="all-article-profile-list">
              {/* <img src={cardprofile} alt="st logo" /> */}
              <div className="all-article-profile-wrap">
                <div className="all-article-name">
                  <span>Posted by :</span> {postedname}
                </div>
                <div className="all-article-post-date">{postdate}</div>
              </div>
            </div>
            <div className="all-article-card-description">{cardtitle}</div>
          </div>
          {/* <div className="all-article-description">
          {articledescription}
        </div> */}
        </div>
      </div>
    </Link>
  );
}
