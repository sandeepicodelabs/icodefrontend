import React from 'react'
import Header from '../../components/Header/Header';
import HeaderBar from '../../components/headerbar';
import Footer from "../../components/Footer/Footer";
import profileimg from '../../assets/images/covercardprofile.png';
import BlogCover from '../../assets/images/blog-cover.png';
import BlogCoverCard from '../../components/blogcover';
import BlogArticleCard from '../../components/Cards/articlecard';
import MostPopularCard from '../../components/Cards/mostpopularcard';
import AllArticleCard from '../../components/Cards/allarticlecard';
import SubscribeCard from '../../components/Cards/subscribe';
import PaginationBox from '../../components/pagination';
import CardProfile from '../../assets/images/allarticleimg.png';
import BlogCoverImg from '../../assets/images/articlecardimg.png';
import CardProfileimg from '../../assets/images/covercardprofile.png';
import SearchIcon from '../../assets/images/searchicon.svg';
import './style.css';
import { graphql, Link } from 'gatsby'
import paginationNext from '../../assets/images/pagination-next-icon.png';
import paginationprev from '../../assets/images/pagination-prev-icon.png';

export default function Blog({ data, pageContext }) {


  const { currentPage, count } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === count;
  const prevPage = currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`;
  const nextPage = `/blog/${currentPage + 1}`;
  //console.log("blog", data)

  const query = typeof window !== 'undefined' ? window.location.search.slice(8) : null;
  const posts = data?.allStrapiArticle?.edges;
  const filteredData = posts?.filter(post => {
    const { Content, Title, Slug, Type } = post.node;
    const validContent = typeof Content === 'string' ? Content : '';
    const validTitle = typeof Title === 'string' ? Title : '';
    const validSlug = typeof Slug === 'string' ? Slug : '';

    return (
      validTitle.toLowerCase().includes(query?.toLowerCase()) ||
      validSlug.toLowerCase().includes(query?.toLowerCase()) ||
      validContent.toLowerCase().includes(query?.toLowerCase())
    );
  });



  // const query = typeof window !== `undefined` ? window.location.search.slice(8) : null;
  // const posts = data?.allStrapiArticle?.edges;
  // const filteredData = posts.filter(post => {
  //   const { Content, Title, Slug, publishedAt, Type } = post.node
  //   return (
  //     Title?.toLowerCase()?.includes(query?.toLowerCase()) ||
  //     Slug?.toLowerCase()?.includes(query?.toLowerCase()) ||
  //     Content?.toLowerCase()?.includes(query?.toLowerCase())

  //   )
  // });


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
                  <div>
                    {filteredData.map((item, i) => (
                      <div>
                        <Link to={"../blog/" + item?.node?.Slug}> </Link>
                        <BlogArticleCard
                          key={i}
                          // cardprofileimg={item.node?.user.profileimage?.publicURL}
                           img={item.node?.Image[0]?.url}
                          cardtitle={item.node?.Title}
                          // profilename={item.node?.user.displayName}
                          postdate={item.node?.publishedAt}
                        // carddescription={item.node?.Content}
                        />

                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="article-main-box">
            <div className="all-article-heading">
              <h3>All articles</h3>
            </div>
            <div className="all-article-wrap">
              <div className="article-list-wrap">
                <div className="article-card-list-most">
                  {filteredData && filteredData.map((item, i) => (
                   // console.log('map',item?.node?.Image[0]?.url)
                    <div key={i}>
                      <AllArticleCard
                         img={item?.node?.Image[0]?.url}
                        // cardprofile={item.node?.user.profileimage?.publicURL}
                        articleTitle={item.node?.Type}
                        // articledescription={item.node?.Content}
                        //postedname={item.node?.user.displayName}
                        postdate={item.node?.publishedAt}
                        cardtitle={
                          <Link to={"/blog/" + item?.node?.Slug}>
                            {item.node?.Title}
                          </Link>
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="most-popular-article">
                <div className="most-polular">
                  <h1>Most popular</h1>
                  <div className="popular-wrap-box">
                    {filteredData.map((item, i) => (
                      <div className="popular-list">
                        <Link to={"../blog/" + item?.node?.Slug}>{item?.node?.Title}
                          <MostPopularCard
                            key={i}
                            //profilename={item.node?.user.displayName}
                            postdate={item.node?.publishedAt}
                          //blogdescription={item.node?.Title}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="subscribe-box">
                  <SubscribeCard />
                </div>

              </div>
            </div>
            <div className="pagination-box">
              <div className="pagination">
                {!isFirst && (
                  <Link to={prevPage} className="page-navigate-icon">
                    <img src={paginationprev} alt="Previous Page" />
                  </Link>
                )}
                {Array.from({ length: count }, (_, i) => (
                  <Link
                    key={`pagination-number${i + 1}`}
                    to={`/blog/${i === 0 ? "" : i + 1}`}
                    className={`pagination-count ${i + 1 === currentPage ? "active" : ""}`}
                  >
                    {i + 1}
                  </Link>
                ))}
                {!isLast && (
                  <Link to={nextPage} className="page-navigate-icon">
                    <img src={paginationNext} alt="Next Page" />
                  </Link>
                )}
              </div>
            </div>


            {/* <div className="pagination-box">
              <PaginationBox  
              /> */}

          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const query = graphql`
query MyQuery { 
 allStrapiArticle (  sort: {publishedAt: DESC}) {
    edges {
      node {
        Title
        Slug
        Type
        Image {
          url
        }

        Content {
          data {
            Content
          }
        }
        createdAt(formatString: "DD MMMM, YYYY")
        publishedAt(formatString: "DD MMMM, YYYY")
      }
    }
  }
}
`;