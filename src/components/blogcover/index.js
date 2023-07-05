import React from 'react'
import Header from '../Header/Header';
import HeaderBar from '../headerbar';
import { graphql } from 'gatsby';


export default function BlogCoverCard(props) {
    const { blogtitle, img, profilename, postdate, blogheading, blogdescription, CardProfile } = props;
    //console.log("blogcover", data?.allStrapiArticle?.edges?.node?.Title)
//    const query = typeof window !== `undefined` ? window.location.search.slice(8) : null;
//   const posts = data?.allStrapiArticle?.edges;
//   const filteredData = posts.filter(post => {
//     const { Content, Title, Slug, publishedAt } = post.node
//     return (
//       Title.toLowerCase().includes(query?.toLowerCase()) ||
//       Slug.toLowerCase().includes(query?.toLowerCase()) ||
//       Content.toLowerCase().includes(query?.toLowerCase())

//     )
//   })


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


// export const query=graphql`
// query MyQuery {
//     allStrapiArticle(limit: 1, sort: {publishedAt: DESC}) {
//       edges {
//         node {
//           Title
//           Slug
//           Content {
//             data {
//               Content
//             }
//           }
//           createdAt(formatString: "DD MMMM, YYYY")
//           publishedAt(formatString: "DD MMMM, YYYY")
//         }
//       }
//     }
//   }

// `