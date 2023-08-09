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
import InputBox from "../../components/input";
import userImg from "../../assets/images/user.png";
import Emailicon from "../../assets/images/email.png";
import ButtonBox from "../../components/button"; 
import messageimg from "../../assets/images/message.png";
import axios from "axios";
import bigInt from 'big-integer'

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

  // for enquiry form
  const handleSubmit = (e) => { 
    e.preventDefault();
    // Get the form data from the event target
    const formData = new FormData(e.target);
    console.log(formData,"formData")
    const contactData = {
      data: {
        Name: formData.get("name"),
        Email: formData.get("email"),
        Message: formData.get("message"),
        MobileNo: bigInt(formData.get("mobileno"))
      },
    };
    console.log(contactData,"contactData")
    // Make the POST request to your Strapi backend
    axios
      .get(
        `https://icodelabsbackend.onrender.com/api/sendingemails?name=${formData.get("name")}&email=${formData.get("email")}&message=${formData.get("message")}&mobileno=${formData.get("mobileno")}`
      )
      .then(async (response) => {
        console.log("Form data sent successfully:", response);
        return axios.post(
          "https://icodelabsbackend.onrender.com/api/contact-uses",
          contactData
        );
      })
      .then((response2) => {
        console.log(response2, "response2");
      })
      .catch((error) => {
        console.log("Error sending form data:", error);
        // Optionally, you can show an error message here or handle the error gracefully
      });  
      e.target.reset();

  };

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
                <div className="blog-card-date">{article?.node?.createdAt}</div>

                {/* <div className="blog-card-posted-name">
                  <span>Posted by :</span>{article?.node?.Author}
                </div> */}
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
                          postdate={item.node?.createdAt}
                          blogdescription={item.node?.Title}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="blog-detail-sidebar-subscribe">
                  {/* <SubscribeCard /> */}
                  <form className="contact-right" onSubmit={handleSubmit} >
              <div className="contact-form">
                <h1>Let’s Build Your Dream App!</h1>
                <div className="input-wrap">
                <div className="input-box">
              <div className="form-box">
                
                  <InputBox
                    type="text"
                    placeholder={"Full Name"}
                    className="contact-inputs"
                    img={userImg}
                    name="name"
                  /> 
                </div> 
                  </div>
                </div>
                <div className="input-wrap">
                  {/* <input type="text" placeholder='Email'  />
									<span className="input-icon">
										<img src={require('../../assets/images/email.png')} alt="St Logo"/>
									</span> */}
                  <InputBox
                    type="email"
                    placeholder={"Email"}
                    className="contact-inputs"
                    img={Emailicon}
                    name="email"
                  />
                </div>
                <div className="input-wrap"> 
                  <InputBox
                    type="number"
                    placeholder={"Mobile No"}
                    className="contact-inputs"
                    //img={Emailicon}
                    name="mobileno"
                  />
                </div>
                <div className="input-wrap">
                  <textarea
                    placeholder="Write a message here"
                    rows={5}
                    name="message"
                  ></textarea>
                  <span className="input-icon">
                    <img src={messageimg} alt="St Logo" name="message" />
                  </span>
                </div>
               
                <div className="send-button">
                  <ButtonBox type="submit" buttonname="Send message" />
                </div>
              </div>
            </form>
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
    allStrapiArticle (limit: 6, sort: {Title: DESC}){
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
          createdAt(formatString: "DD MMMM, YYYY")
          updatedAt(formatString: "DD MMMM, YYYY")
          Promotext
          Image {
            url
          }
        }
      }
    }
  }
`;
