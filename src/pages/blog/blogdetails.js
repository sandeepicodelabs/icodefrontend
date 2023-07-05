import React from 'react'
import Header from '../../components/Header/Header';
import HeaderBar from '../../components/headerbar';
import Chronologyimg from '../../assets/images/Chronology.png';
import securityimage from '../../assets/images/securityimage.png';
import MostPopularCard from '../../components/Cards/mostpopularcard';
import SubscribeCard from '../../components/Cards/subscribe';
import Slider from 'react-slick';
import AllArticleCard from '../../components/Cards/allarticlecard';
import Footer from '../../components/Footer/Footer';
import { Link, graphql } from 'gatsby';
 


const settings = {
    dots: false,
    centerMode: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
    ]
  };

export default function BlogPage({data,pageContext}) {
   // console.log('artile',data)

    const query = typeof window !== `undefined` ? window.location.search.slice(8) : null;
      const posts = data.allStrapiArticle.edges;
      const filteredData = posts.filter(post => {
        const { Content, Title, Slug } = post.node
        return (
          Title.toLowerCase().includes(query?.toLowerCase()) ||
          Slug.toLowerCase().includes(query?.toLowerCase()) ||
          Content.toLowerCase().includes(query?.toLowerCase())
        )
      })
     
      const article = posts.find(item=>{return item.node.Slug === pageContext.article.node.Slug})
       console.log('filter',article)
     
  return (
    
    <div>
    <section className="blog-detail-box">
      <Header />
      <HeaderBar currentpage="Blog" pagetitle="Developing Marketplace application with Sharetribe" />
      <div className="cover-full-box">
        <div className="blog-detail-cover">
          <div className="blog-application-cover-image">
            <img src={data?.node?.image.publicURL} alt="St Logo" />
          </div>
          <div className="blog-description-data">
            {/* <div className="blog-detail-title">{article?.node.category.name}</div> */}
            <div className="blog-detail-data">
              <div className="blog-card-date">{article?.node?.publishedAt}</div>
             
              {/* <div className="blog-card-posted-name"><span>Posted by :</span> {article?.node.user.displayName}</div> */}
            </div>
          </div>
        </div>
        <div className="blog-detail-grid-wrap">
          <div className="blog-detail-body">
            <div className="blog-detail-left-wrap">
              <div className="detail-description-wrap">
                <p>
                  {article?.node.Content.data.Content}
                </p>
              </div>
              <div className="blog-chronology-box">
                <div className="blog-box-wrap">
                  <div className="blog-chronology-heading">Chronology</div>
                  <div className="blog-image-chronology">
                    <img src={Chronologyimg} alt="St Logo" />
                  </div>
                </div>
                <div className="blog-web-box">
                  <div className="blog-chronology-heading">Practical Web development</div>
                  <ul>
                    <li>Basic</li>
                    <li>Testing</li>
                  </ul>
                </div>
                <div className="blog-web-box">
                  <div className="blog-chronology-heading">Security considerations</div>
                  <div className="blog-security-data">
                    <p>
                      Web development takes into account many security considerations,
                      such as data entry error checking through forms, filtering output, and encryption.
                      Malicious practices such as SQL injection can be executed by users with ill intent yet with only
                      primitive knowledge of Web development as a whole. Scripts can be used to exploit Web sites by
                      granting unauthorized access to malicious users that try to collect information such as email
                      addresses, passwords and protected content like credit card numbers.
                    </p>
                    <p>
                      Because new security holes are found in Web applications even after testing and launch,
                      security patch updates are frequent for widely used applications. It is often the job of Web
                      developers to keep applications up to date as security patches are released and new security concerns are discovered.
                    </p>
                  </div>
                  <div className="blog-security-image">
                    <img src={securityimage} alt="St Logo" />
                  </div>
                  <div className="blog-chronology-heading">Conclusion</div>
                  <div className="blog-conclusion-data">
                    <div className="conclusion-text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                      containing Lorem Ipsum passages, and more recently with desktop
                      publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                  </div>
                  <div className="blog-comment-section">
                     <img src={require('../../assets/images/comment.png')} alt="St Logo Commnent"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-detail-right-wrap">
              <div className="most-polular">
                <h1>Most popular</h1>
                <div className="popular-wrap-box">
                  {filteredData.map((item, i) => (
                    <Link to={"../blog/" + item.node?.Slug}>
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
              <div className="hire-development-team-text">Hire an experienced web development team?</div>
              <button>CONTACT NOW</button>
            </div>
            <div className="related-post-box">
              <span className="related-post-heading">Related Post</span>
              <div className="related-slider">
                <Slider {...settings}>
                  {filteredData.map((item, i) => (
                    <div className="article-slide">
                      <AllArticleCard
                        key={i}
                       // img={item.node?.image?.publicURL}
                       // articleTitle={item.node?.category.name}
                        articledescription={item.node?.Content.data.Content}
                       // postedname={item.node?.user.displayName}
                        postdate={item.node?.publishedAt}
                        cardtitle={item.node?.Title}
                        //cardprofile={item.node?.user.profileimage?.publicURL}
                      />
                    </div>
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
  )
}

export const query=graphql`
query MyQuery { 
    allStrapiArticle (limit: 6, sort: {publishedAt: DESC}) {
       edges {
         node {
           Title
           Slug
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

`