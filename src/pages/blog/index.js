import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeaderBar from "../../components/headerbar";
import Footer from "../../components/Footer/Footer";
import MostPopularCard from "../../components/Cards/mostpopularcard";
import AllArticleCard from "../../components/Cards/allarticlecard";
import SearchIcon from "../../assets/images/searchicon.svg";
import "../blog.scss";
import { graphql, Link } from "gatsby";
import InputBox from "../../components/input";
import userImg from "../../assets/images/user.png";
import Emailicon from "../../assets/images/email.png";
import ButtonBox from "../../components/button";
import messageimg from "../../assets/images/message.png";
import axios from "axios";
import bigInt from "big-integer";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


export default function Blog({ data, pageContext }) {
  const { allStrapiArticle } = data;
  const [page, setPage] = useState(1);
  const { pageInfo } = allStrapiArticle; 
  const [phoneNumber, setPhoneNumber] = useState("+91");

  const handleOnChange = (value) => {
    // Handle the value change
   // console.log("New phone number:", value);
    setPhoneNumber(value);
  };


  // console.log(pageInfo, "pagination");

  const query =
    typeof window !== "undefined" ? window.location.search.slice(8) : null;
  const posts = data?.allStrapiArticle?.edges;
  let filteredData = posts?.filter((post) => {
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

  // for enquiry form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get the form data from the event target
    const formData = new FormData(e.target);
    console.log(formData, "formData");
    const contactData = {
      data: {
        Name: formData.get("name"),
        Email: formData.get("email"),
        Message: formData.get("message"),
        MobileNo:phoneNumber,
      },
    };
    console.log(contactData, "contactData");
    // Make the POST request to your Strapi backend
    axios
      .get(
        `https://icodelabsbackend.onrender.com/api/sendingemails?name=${formData.get(
          "name"
        )}&email=${formData.get("email")}&message=${formData.get(
          "message"
        )}&phoneNumber=${formData.get("phoneNumber")}`
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
      setPhoneNumber("+91");
    e.target.reset();
  };

  // <<<<<<<<<<<<< prev and next Button Pagination >>>>>>>>>
  let pageNum = +page;
  let size = 6;
  let startIndex = (pageNum - 1) * size;
  let endIndex =
    filteredData.length > startIndex + size - 1
      ? startIndex + size - 1
      : filteredData.length - 1;
  filteredData =
    filteredData.length > size
      ? filteredData.filter(
          (lt, index) => index >= startIndex && index <= endIndex
        )
      : filteredData;

  return (
    <>
      <section className="blog-box">
        <Header />
        <HeaderBar currentpage="Blog" pagetitle="Blog" />
        <div className="cover-full-box contentWidth">
          <div className="article-main-box">
            {/* <div className="all-article-heading">
              <h3>All articles</h3>
            </div> */}
            <div className="all-article-wrap">
              <div className="article-list-wrap">
                <div className="article-card-list-most">
                  {filteredData &&
                    filteredData.map((item, i) => (
                      // console.log('map',item?.node?.Image[0]?.url)
                      <div className="all-article-card" key={i}>
                        <AllArticleCard
                          img={item?.node?.Image[0]?.url}
                          // cardprofile={item.node?.user.profileimage?.publicURL}
                          articleTitle={item?.node?.Type}
                          // articledescription={item.node?.Content}
                          postedname={item?.node?.Author}
                          postdate={item?.node?.createdAt}
                          cardtitle={item.node?.Title}
                          slug={item.node?.Slug}
                        />
                      </div>
                    ))}
                </div>

                <div className="custom-pagination-box">
                  {/* <<<<<<<<<< Prev And Next Button for Pagination  >>>>>>>>>>>>>>>>> */}
                  <button
                    type="button"
                    onClick={() => {
                      setPage(pageNum - 1);
                    }}
                    className={`prev  ${startIndex > 0 ? "active" : null}`}
                  >
                    Prev
                  </button>

                  <button
                    type="button"
                    buttonname="next"
                    onClick={() => {
                      console.log("khusxa");
                      setPage(pageNum + 1);
                    }}
                    className={`next  ${
                      endIndex < posts.length - 1 ? "active" : null
                    }`}
                  >
                    Next
                  </button>

                  
                </div>
              </div>
              <div className="most-popular-article">
                <div className="search-box">
                  <div className="input-box-wrap">
                    <input type="text" placeholder="Search Topics..." />
                    <span>
                      <img src={SearchIcon} alt="St Logo" />
                    </span>
                  </div>
                </div>
                <div className="most-polular">
                  <h1>Most popular</h1>
                  <div className="popular-wrap-box">
                    {filteredData &&
                      filteredData.map((item, i) => (
                        <div className="popular-list">
                          <Link to={"/blog/" + item?.node?.Slug}>
                            <h5 className="popular-blog-card-title">
                              {" "}
                              {item?.node?.Title}
                            </h5>
                            <MostPopularCard
                              key={i}
                              profilename={item?.node?.Author}
                              postdate={item?.node?.createdAt}
                              //blogdescription={item.node?.Title}
                            />
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="blog-detail-sidebar-subscribe">
                  {/* <SubscribeCard /> */}
                  <form className="contact-right" onSubmit={handleSubmit}>
                    <div className="contact-form">
                      <h1>Let’s Build Your Dream Web/App!</h1>
                      <div className="input-wrap">
                        <InputBox
                          type="text"
                          placeholder={"Full Name"}
                          className="contact-inputs"
                          img={userImg}
                          name="name"
                        />
                      </div>
                      <div className="input-wrap">
                        <InputBox
                          type="email"
                          placeholder={"Email"}
                          className="contact-inputs"
                          img={Emailicon}
                          name="email"
                        />
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
          </div>
        </div>
      </section>

      <Footer />
    </>
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
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
        totalCount
      }
    }
  }
`;
