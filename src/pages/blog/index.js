import React from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/headerbar'
import profileimg from '../../assets/images/covercardprofile.png';
import BlogCover from '../../assets/images/blog-cover.png';
import BlogCoverCard from '../../components/blogcover';
import BlogArticleCard from '../../components/Cards/articlecard'; 
import MostPopularCard from '../../components/Cards/mostpopularcard';
import AllArticleCard from '../../components/Cards/allarticlecard';
import CardProfile from '../../assets/images/allarticleimg.png'
import BlogCoverImg from '../../assets/images/articlecardimg.png';
import CardProfileimg from '../../assets/images/covercardprofile.png';
import SearchIcon from '../../assets/images/searchicon.svg';
import './style.css';
import { graphql, Link } from 'gatsby' 

export default function Blog({data}) {
   console.log('blog',data)


  const query = typeof window !== `undefined` ? window.location.search.slice(8) : null;
  const posts = data?.allStrapiArticle?.edges;
  const filteredData = posts.filter(post => {
    const { Content, Title, Slug } = post.node
    return (
      Title.toLowerCase().includes(query?.toLowerCase()) ||
      Slug.toLowerCase().includes(query?.toLowerCase()) ||
      Content.toLowerCase().includes(query?.toLowerCase())
    )
  })
  console.log(filteredData, "filteredData")

  const articlecard = [
    {
      articleTitle: "Web development",
      articledescription: "Ahead of time is a key aspect to sustain and grow an existing business. Most of the time persistence to change or adapt as per the changing market leads to potential gaps that give opportunities for...",
      postedname: "John deo",
      postdate: "May 4,2022",
      cardtitle: "Developing Marketplace application with Sharetribe",
      img: CardProfile,
      cardprofile: profileimg
    },
  ]
  
  const blogcovercard = [
    {
      blogtitle: "Web development",
      img: BlogCover,
      profilename: "John deo",
      postdate: "May 4,2022",
      blogheading: "Developing Marketplace application with Sharetribe",
      blogdescription: "Ahead of time is a key aspect to sustain and grow an existing business. Most of the time persistence to change or adapt as per the changing market leads to potential gaps that give opportunities for...",
      CardProfile: profileimg,
    }
  ]
  
  const blogarticle = [
    {
      cardtitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      carddescription: "Developing Marketplace application with Sharetribe",
      img: BlogCoverImg
    },
    {
      cardtitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      carddescription: "Developing Marketplace application with Sharetribe",
      img: BlogCoverImg
    },
    {
      cardtitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      carddescription: "Developing Marketplace application with Sharetribe",
      img: BlogCoverImg
    },
    {
      cardtitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      carddescription: "Developing Marketplace application with Sharetribe",
      img: BlogCoverImg
    },
  ]
  
  const popularcard = [
    {
      populartitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      blogdescription: "Developing Marketplace application with Sharetribe"
    },
    {
      populartitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      blogdescription: "Developing Marketplace application with Sharetribe"
    },
    {
      populartitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      blogdescription: "Developing Marketplace application with Sharetribe"
    },
    {
      populartitle: "Web development",
      profilename: "John deo",
      postdate: "May 4,2022",
      blogdescription: "Developing Marketplace application with Sharetribe"
    }
  ]

  return (
    <div>
      <section className="blog-box">
        <Header />
        <HeaderBar currentpage="Blog" pagetitle="Blog" />
        <div className="cover-full-box">
          <div className="blog-wrap-data">
            <div className="blog-card-cover">
              {blogcovercard.map((item, i) => (
                <BlogCoverCard
                  key={i}
                  blogtitle={item.Title}
                  img={item.img}
                   profilename={item.profilename}
                  postdate={item.postdate}
                  blogheading={item.blogheading}
                  CardProfile={item.CardProfile}
                  blogdescription={item.blogdescription}
                />
              ))}
            </div>
            <div className="blog-card-article">
                    <div className="search-box">
                      <div className="input-box-wrap">
                        <input type="text" placeholder="Search Topics..." />
                        <span>
                          <img src={SearchIcon} alt="St Logo" />
                        </span>
                      </div>
                    </div>
                    <div className="article-box-wrap-card">
                      <div className="article-heading">Recent articles</div>
                      <div className="article-card">
                          {filteredData.map((item, i) => (
                          <Link>
                            <BlogArticleCard
                              key={i}
                              // cardprofileimg={item.node?.user.profileimage?.publicURL}
                              // img={item.node?.Image?.url}
                              cardtitle={item.node.Title}
                              // profilename={item.node?.user.displayName}
                              postdate={item.node?.publishedAt}
                              // carddescription={item.node?.Content}
                            />
                          </Link>
                        ))}  
                      </div>
                    </div>
              </div>
          </div>

          {/* <div className="article-main-box">
                  <div className="all-article-heading">
                    <h3>All articles</h3>
                  </div>
                  <div className="all-article-wrap">
                    <div className="article-list-wrap">
                      <div className="article-card-list-most">
                        {filteredData.map((item, i) => (
                          <Link to={"/blog/" + item.node?.slug}>
                            <AllArticleCard
                              key={i}
                              img={item.node?.Image?.url}
                              // cardprofile={item.node?.user.profileimage?.publicURL}
                              articleTitle={item.node?.Title}
                              articledescription={item.node?.Content}
                              //postedname={item.node?.user.displayName}
                              postdate={item.node?.publishedAt}
                              cardtitle={item.node?.Title}
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="most-popular-article">
                      <div className="most-polular">
                        <h1>Most popular</h1>
                        <div className="popular-wrap-box">
                          {filteredData.map((item, i) => (
                            <Link to={"/blog/" + item.node?.slug}>
                              <MostPopularCard
                                key={i}
                                populartitle={item.node?.Title}
                                //profilename={item.node?.user.displayName}
                                postdate={item.node?.publishedAt}
                                blogdescription={item.node?.Title}
                              />
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* <div className="subscribe-box">
                        <SubscribeCard />
                      </div> */}
                   
                  
        </div>
      </section>
    </div>
  )
}


export const query = graphql`
query MyQuery { 
  allStrapiArticle {
    edges {
      node {
        Title
        Slug
        Content {
          data {
            Content
          }
        }
        Image {
          url
        }
        createdAt
        publishedAt
      }
    }
  }
}
`


