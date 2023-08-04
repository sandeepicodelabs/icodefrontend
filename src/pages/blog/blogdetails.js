import React from "react";
import Header from "../../components/Header/Header";
import HeaderBar from "../../components/headerbar";
import Chronologyimg from "../../assets/images/Chronology.png";
import securityimage from "../../assets/images/securityimage.png";
import MostPopularCard from "../../components/Cards/mostpopularcard";
import SubscribeCard from "../../components/Cards/subscribe";
import Slider from "react-slick";
import AllArticleCard from "../../components/Cards/allarticlecard";
import Footer from "../../components/Footer/Footer";
import { Link, graphql } from "gatsby";
import Commentimg from "../../assets/images/comment.png";
import "./blog.scss";
import ReactMarkdown from "react-markdown";

const settings = {
  dots: false,
  centerMode: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 2,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export default function BlogPage({ data, pageContext }) {
  // console.log('artile',data)

  // const query = typeof window !== `undefined` ? window.location.search.slice(8) : null;
  //   const posts = data?.allStrapiArticle?.edges;
  //   const filteredData = posts?.filter(post => {
  //     const { Content, Title, Slug ,Type} = post.node
  //     return (
  //       Title?.toLowerCase()?.includes(query?.toLowerCase()) ||
  //       Slug?.toLowerCase()?.includes(query?.toLowerCase()) ||
  //       Content?.toLowerCase()?.includes(query?.toLowerCase())
  //     )
  //   })

  //   const article = posts?.find(item=>{return item?.node?.Slug === pageContext.article?.node?.Slug})
  //   // console.log('blog',article)

  const query =
    typeof window !== "undefined" ? window.location.search.slice(8) : null;
  const posts = data?.allStrapiArticle?.edges;
  const filteredData = posts?.filter((post) => {
    const { Content, Title, Slug, Type } = post.node;
    const validContent = typeof Content === "string" ? Content : "";
    const validTitle = typeof Title === "string" ? Title : "";
    const validSlug = typeof Slug === "string" ? Slug : "";

    return (
      validTitle.toLowerCase().includes(query?.toLowerCase()) ||
      validSlug.toLowerCase().includes(query?.toLowerCase()) ||
      validContent.toLowerCase().includes(query?.toLowerCase())
    );
  });

  const article = posts?.find((item) => {
    return item?.node?.Slug === pageContext.article?.node?.Slug;
  });

  //console.log('article',article)
  return (
    <div>
      <section className="blog-detail-box">
        <Header />
        <HeaderBar currentpage="Blog" pagetitle={article?.node?.Title} />
        <div className="cover-full-box">
          <div className="blog-detail-cover">
            <div className="blog-application-cover-image">
              <img src={article?.node?.Image[0].url} alt="St Logo" />
            </div>
            <div className="blog-description-data">
              <div className="blog-detail-title">{article?.node?.Type}</div>
              <div className="blog-detail-data">
                <div className="blog-card-date">{article?.node?.updatedAt}</div>

                <div className="blog-card-posted-name">
                  <span>Posted by :</span>john
                </div>
              </div>
            </div>
          </div>
          <div className="blog-detail-grid-wrap">
            <div className="blog-detail-body">
              {/* <div className="blog-detail-left-wrap">*/}
              <div className="detail-description-wrap">
                
                <ReactMarkdown>{article?.node?.Content.data.Content}</ReactMarkdown>
              </div>

              {/* </div> */}
              <div className="blog-detail-right-wrap">
                <div className="most-polular">
                  <h1>Most popular</h1>
                  <div className="popular-wrap-box">
                    {filteredData.map((item, i) => (
                      <Link to={"/blog/" + item.node?.Slug}>
                        <MostPopularCard
                          key={i}
                          //populartitle={item.node?.category.name}
                          // profilename={item.node?.user.displayName}
                          postdate={item.node?.publishedAt}
                          blogdescription={item.node?.Title}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="blog-detail-sidebar-subscribe">
                  <SubscribeCard />
                </div>
              </div>
            </div>
            <div className="blog-box-bottom-wrap">
              <div className="blog-hire-contact-box">
                <div className="hire-development-team-text">
                  Hire an experienced web development team?
                </div>
                <button>CONTACT NOW</button>
              </div>
              <div className="related-post-box">
                <span className="related-post-heading">Related Post</span>
                <div className="related-slider">
                  <Slider {...settings}>
                    {filteredData.map((item, i) => (
                      <Link to={"/blog/" + item.node?.Slug}>
                        <div className="article-slide">
                          <AllArticleCard
                            key={i}
                            img={item.node?.Image[0]?.url}
                            articleTitle={item.node?.Type}
                            articledescription={item.node?.Content.data.Content}
                            // postedname={item.node?.user.displayName}
                            postdate={item.node?.createdAt}
                            cardtitle={item.node?.Title}
                            //cardprofile={item.node?.user.profileimage?.publicURL}
                          />
                        </div>
                      </Link>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    allStrapiArticle(limit: 6, sort: { publishedAt: DESC }) {
      edges {
        node {
          Title
          Slug
          Type
          Content {
            data {
              Content
            }
          }
          createdAt(formatString: "DD MM YYYY")
          updatedAt(formatString: "DD MM YYYY")
          Promotext
          Image {
            url
          }
        }
      }
    }
  }
`;
