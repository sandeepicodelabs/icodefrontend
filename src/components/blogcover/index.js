import React from 'react'
import Header from '../Header/Header';
import HeaderBar from '../headerbar';


export default function BlogCoverCard(props) {
    const { blogtitle, img, profilename, postdate, blogheading, blogdescription, CardProfile } = props;
   // console.log("blogcover", props)


    return (
        <>
            <div className="blog-card-box">
                <div className="blog-cover-image">
                    <img src={img} alt="St Logo" />
                </div>
                <div className="blog-card-data">
                    <h5 className="blog-card-title">{blogtitle}</h5>
                    <div className="blog-card-detail-box">
                        <div className="blog-profile-list">
                            <img src={CardProfile} />
                            <div className="card-profile-wrap">
                                <div className="profile-name"><span>Posted by :</span> {profilename} </div>
                                <div className="post-date">{postdate}</div>
                            </div>
                        </div>
                        <div className="blog-card-description">
                            {blogheading}
                        </div>
                    </div>
                    <div className="blog-description">
                        {blogdescription}
                    </div>
                </div>
            </div>
        </>
    )
}
