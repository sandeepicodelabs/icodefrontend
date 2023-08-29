import React, { useState, useEffect } from "react";
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
import "../blog.scss";
import ReactMarkdown from "react-markdown";
import InputBox from "../../components/input";
import userImg from "../../assets/images/user.png";
import Emailicon from "../../assets/images/email.png";
import ButtonBox from "../../components/button";
import messageimg from "../../assets/images/message.png";
import axios from "axios";
import bigInt from "big-integer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Popup from "../../components/Popup/Modal"; 
import { Button, Form, Modal, ModalBody, ModalHeader } from "reactstrap";
import IconBack from "../../components/IconBack/IconBack";

const settings = {
  dots: false,
  centerMode: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    typeof window != "undefined" && window.scrollTo(0, 0);
  }, []);

  const handleOnChange = (value) => {
    // Handle the value change
    // console.log("New phone number:", value);
    setPhoneNumber(value);
  };

  // for enquiry form
  const handleSubmit = (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z\s]+$/; // Regular expression for alphabetic characters and spaces  
    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    } else if (!namePattern.test(name)) {
      newErrors.name = "Please enter a valid name with alphabetic characters.";
    }

    if (email.trim() === "") {
      newErrors.email = "Please enter email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
      console.log("s")
    }
    // Get the form data from the event target
    const formData = new FormData(e.target);
    console.log(formData, "formData");
    const contactData = {
      data: {
        Name: name,
        Email: email,
        Message: message,
        MobileNo: phoneNumber,

      },
    };
    console.log(contactData, "contactData");
    // Make the POST request to your Strapi backend
    axios
      .get(
        `https://icodelabsbackend-qr8y.onrender.com/api/sendingemails?name=${name}&email=${email}&message=${message}
        &phoneNumber=${phoneNumber}`
      )
      .then(async (response) => {
        console.log("Form data sent successfully:", response);
        setShowSuccessPopup(true); // Show success popup
        return axios.post(
          "https://icodelabsbackend-qr8y.onrender.com/api/contact-uses",
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
    // Clear the form
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setErrors({});
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

  const article =
    posts &&
    posts?.find((item) => {
      return item?.node?.Slug === pageContext.article?.node?.Slug;
    });
  // console.log("all data", filteredData);
  //console.log("article", article);
  return (
    <div>
      <section className="blog-detail-box">
        <Header />

        <HeaderBar currentpage="Blog" pagetitle={article?.node?.Title} />
        <div className="cover-full-box contentWidth">
          <Link to="/blog" className="goBack">
            <IconBack /> Back
          </Link>
          <div className="article-main-box">
            <div className="all-article-wrap">
              <div className="article-list-wrap">
                <div className="blog-detail-cover">
                  <div className="blog-application-cover-image">
                    <img src={article?.node?.Image[0].url} alt="St Logo" />
                  </div>
                  <div className="blog-description-data">
                    <div className="blog-detail-title">
                      {article?.node?.Type}
                    </div>
                    <div className="blog-detail-data">
                      <div className="blog-card-date">
                        {article?.node?.createdAt}
                      </div>

                      <div className="blog-card-posted-name">
                        <span>Posted by :</span>
                        {article?.node?.Author}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-detail-grid-wrap">
                  <div className="blog-detail-body">
                    <div className="detail-description-wrap">
                      <ReactMarkdown>
                        {article?.node?.Content?.data?.Content}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <div className="estimate-section-wrap">
                    <div className="estimate-contact">
                      <div className="estimate-content">
                        <h3>Hire an experienced web development team?</h3>
                      </div>
                      <a href="/contact">
                        <ButtonBox
                          buttonname="contact now"
                          className="estimate-submit"
                        />
                      </a>
                    </div>
                    <div className="related-post-box">
                      <h2 className="related-post-heading">Related Post</h2>
                      <div className="related-slider">
                        <Slider {...settings}>
                          {filteredData &&
                            filteredData.map((item, i) => {
                              return (
                                <Link className="article-slide">
                                  <AllArticleCard
                                    img={item.node?.Image[0]?.url}
                                    key={i}
                                    slug={item?.node?.Slug}
                                    articleTitle={item.node?.Type}
                                    articledescription={
                                      item?.node?.Content?.data?.Content
                                    }
                                    postedname={item?.node?.Author}
                                    postdate={item.node?.createdAt}
                                    cardtitle={item.node?.Title}
                                  //cardprofile={item.node?.user.profileimage?.publicURL}
                                  />
                                </Link>
                              );
                            })}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="most-popular-article">
                <div className="most-polular">
                  <h1>Most popular</h1>
                  <div className="popular-wrap-box">
                    {filteredData.slice(0, 6).map((item, i) => (
                      <div className="popular-list">
                        <Link to={"/blog/" + item?.node?.Slug}>
                          <MostPopularCard
                            key={i}
                            //populartitle={item.node?.category.name}
                            profilename={item?.node?.Author}
                            postdate={item?.node?.createdAt}
                            blogdescription={item.node?.Title}
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                {showSuccessPopup && (
                  <Modal isOpen={showSuccessPopup} toggle={() => setShowSuccessPopup(false)}>
                    <ModalHeader toggle={() => setShowSuccessPopup(false)}>Success!</ModalHeader>
                    <ModalBody>
                      Form Submit Successfully.Thanks!
                    </ModalBody>
                  </Modal>
                )}
                <div className="blog-detail-sidebar-subscribe">
                  {/* <SubscribeCard /> */}
                  <form className="contact-right" onSubmit={handleSubmit}>
                    <div className="contact-form">
                      <h1>Let’s Build Your Dream App!</h1>
                      <div className="input-wrap">
                        <InputBox
                          type="text"
                          placeholder={"Full Name"}
                          className="contact-inputs"
                          img={userImg}
                          name="name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && (
                          <p className="error-message">{errors.name}</p>
                        )}
                      </div>
                      <div className="input-wrap">
                        <InputBox
                          type="email"
                          placeholder={"Email"}
                          className="contact-inputs"
                          img={Emailicon}
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                          <p className="error-message">{errors.email}</p>
                        )}
                      </div>
                      <div className="input-wrap">
                        <PhoneInput
                          placeholder="Enter phone number"
                          countryCode="+91"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                          name="phoneNumber"
                        />
                      </div>
                      <div className="input-wrap">
                        <textarea
                          placeholder="What's your Project about?"
                          rows={5}
                          name="message"
                          onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    allStrapiArticle(limit: 100, skip: 0, sort: { Title: DESC }) {
      edges {
        node {
          Title
          Author
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
