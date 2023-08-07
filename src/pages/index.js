import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import ButtonBox from "../components/button";
import companyaboutimg from "../assets/images/companyabout.png";
import covercode from "../assets/images/cover-code.png";
import meanstack from "../assets/images/meanstack.png";
// import webimg from '../assets/images/web.png';
// import messageimg from '../assets/images/message.png';

import WhyChooseCard from "../components/Cards/whychoosecard";
import TechnologyCard from "../components/Cards/technologycard";
import ExpertiseCard from "../components/Cards/expertisecard";
import CompanyApproachCard from "../components/Cards/companyapproachecard";
import TestimonialCard from "../components/Cards/testimonialcard";
import testimonialPicture from "../assets/images/testimonialPic.png";
import commaimage from "../assets/images/comma.png";
import webimg from "../assets/images/web.png";
import userImg from "../assets/images/user.png";
import Emailicon from "../assets/images/email.png";
import messageimg from "../assets/images/message.png";
import InputBox from "../components/input";
import Slider from "react-slick";
import "../assets/css/slick/slick-theme.css";
import "../assets/css/slick/slick.css";
// import "../assets/css/custom.css";
// import "../assets/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import "../assets/css/carousel.css";
import axios from "axios";
import contactimg from "../assets/images/contact-img.png";
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./style.scss";
import "./TypingEffect.js";

const IndexPage = ({ data }) => {
  const companylogo = data?.allStrapiCompanyLogo?.edges;
  const choosecard = data?.allStrapiExperiencesProcesse?.nodes;
  const technologyPartners = data?.allStrapiTechnologyPartner?.edges;
  const expertTech = data?.allStrapiExpertise?.edges;
  const process = data?.allStrapiProcess?.edges;
  const ourApproaches = data?.allStrapiOurapproache.edges;

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
      },
    };
    console.log(contactData, "contactData");
    // Make the POST request to your Strapi backend
    axios
      .get(
        `https://icodelabsbackend.onrender.com/api/sendingemails?name=${formData.get(
          "name"
        )}&email=${formData.get("email")}&message=${formData.get("message")}`
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

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 3,
          centerMode: true,
        },
      },
    ],
  };

  var technologyslide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonialCard = [
    {
      testimonialmessage:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      img: testimonialPicture,
      clientname: "Sophia",
      clientaddress: "Raver fans,uk",
      commaimage: commaimage,
    },
  ];

  const testimonialslide = {
    dots: false,
    arrows: true,
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 1000,
        },
      },
    ],
  };
  const workSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: true,
    dots: false,
    speed: 300,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: false,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <div className="pageWrapper">
      <Header />
      <section className="heroSection">
        <div className="cover-background">
          <div className="contentWidth">
            <div className="cover-logo-box">
              <img src={covercode} alt="St Logo" />
            </div>
            <div className="cover-heading-text">
              <h1>
                We build bespoke mobile & web applications driven by Innovation.{" "}
              </h1>
            </div>
            <div className="subtext-box">
              <p className="cover-sub-text">
                Commited to deliver quality & performance oriented apps.
              </p>
            </div>
            <div className="cover-stack-heading">
              <img src={meanstack} alt="St Logo" />
              {/* <span className="cover-stack">Mean stack development</span> */}
              <a
                href=""
                class="typewrite"
                data-period="2000"
                data-type='[ "Flutter App Development", "Angular Development", "MEAN Stack Development", "MERN Stack Development", "JAM Stack Development", "React Native Development" ]'
              >
                <span class="cover-stack"></span>
              </a>
            </div>
            <div className="booking-button">
              <a href="https://calendly.com/jaytiwary">
                <ButtonBox
                  type="button"
                  buttonname="Book a free consultation"
                  className="btn"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="trusted-brands">
          <div className="contentWidth">
            <h5>Trusted By 50+ Companies</h5>
            <div className="trusted-brand-box">
              <Slider {...settings}>
                {/* <GatsbyImage image={image} alt=" "  />  */}

                {companylogo &&
                  companylogo.map((item, key) => (
                    <div className="brand-logo">
                      <img src={item?.node?.logo?.url} />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="our-company-about">
        <div className="contentWidth">
          <div className="company-description">
            <div className="sectionHeading">
              <h2>ICode Labs: Igniting Ideas And Engineering Excellence.</h2>
              <span className="line">&nbsp;</span>
            </div>
            <p>
              iCode Labs Solutions is a leading digital solutions provider
              specializing in Web & Custom Software Development, Mobile App
              Development (iOS & Android), Marketplace Development, UI/UX
              Design, Sharetribe Flex, and Digital Marketing services.
            </p>
            <p>
              Our team of skilled professionals is dedicated to delivering
              high-quality digital design and development products for
              businesses of all sizes and budgets. With a focus on adaptation
              and growth, we understand the challenges small businesses face and
              offer tailored solutions to help them succeed in the online
              marketplace.
            </p>
          </div>
          <div className="company-images">
            <img src={companyaboutimg} alt="St Logo" />
          </div>
        </div>
      </section>

      <section id="about">
        <div className="contentWidth why-choose-us">
          <div className="heading-main">
            <div className="sectionHeading">
              <h1 className="choose-heading">Why Choose Icode Labs?</h1>
              <span className="line">&nbsp;</span>
            </div>
            <div className="choose-subheading">
              Empowering Business Success through Passionate Development
            </div>
            <p className="choose-description">
              Take your digital presence to new heights with user-friendly
              experiences and robust security, delivering unparalleled results
              customized for your business.
            </p>
          </div>
          <div className="choose-card-wrap-box">
            <div className="choose-card-main">
              {choosecard &&
                choosecard.map((item, i) => (
                  <WhyChooseCard
                    key={i}
                    subheading={item.title}
                    img={item?.icon?.url}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="service">
        <div className="tech-partner">
          <div className="service-content-wrapper contentWidth">
            <div className="partner-content">
              <div className="sectionHeading">
                <h1>
                  Accelerating Your Business Growth with Cutting-Edge Digital
                  Solutions
                </h1>
                <span className="line">&nbsp;</span>
              </div>
              <p>
                We are a top-notch software development company, recognized for
                our excellence, delivering tangible outcomes through
                cutting-edge technology, empowering our clients to stay ahead in
                the competitive landscape and achieve remarkable success.
              </p>
            </div>
            <div className="partner-slider">
              {/* <Slider {...technologyslide}>
                {technologyPartners &&
                  technologyPartners.map((item, i) => (
                    <TechnologyCard
                      key={i}
                      technologyheading={item?.node?.Title}
                      img={item?.node?.Image[0]?.url}
                      technologydescription={
                        item?.node?.Description?.data?.Description
                      }
                    />
                  ))}
              </Slider> */}
              {technologyPartners &&
                technologyPartners.map((item, i) => (
                  <TechnologyCard
                    key={i}
                    technologyheading={item?.node?.Title}
                    img={item?.node?.Image[0]?.url}
                    technologydescription={
                      item?.node?.Description?.data?.Description
                    }
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technologies">
        <div className="our-expertise">
          <div className="contentWidth">
            <div className="sectionHeading">
              <h1>We expertise in </h1>
              <span className="line">&nbsp;</span>
            </div>
            <p>trending technologies the world is looking at</p>

            <div className="our-expertise-tech">
              {expertTech &&
                expertTech.map((item, i) => (
                  // <Link to={"/trendingtechnologies/" + item.node.slug}>
                  <ExpertiseCard
                    expertisetitle={item.node?.Title}
                    img={item?.node?.Image[0]?.url}
                  />
                  // </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process">
        <div className="how-do-we-do">
          <div className="inner-timeline-box contentWidth">
            <div className="timeline-heading">
              <div className="sectionHeading ">
                <h1>How Do We Work?</h1>
                <span className="line">&nbsp;</span>
              </div>
              <p>Process in 5 easy step</p>
            </div>
            <div className="timeline-content">
              <div className="timeline">
                {process &&
                  process.map((item, i) => (
                    <div className="container-wrap-box steps">
                      <div className="content">
                        <h3>{item.node?.Title}</h3>
                        <p>{item.node?.Description.data.Description}</p>
                      </div>
                      <div className="date-month-box border-steps">
                        <div className="month">step</div>
                        <div className="month-date">{i + 1}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="our-approach">
            <div className="contentWidth">
              <div className="company-approach-card">
                {ourApproaches &&
                  ourApproaches.map((item, i) => (
                    <CompanyApproachCard
                      approachheading={item?.node?.Title}
                      img={item?.node?.Image[0]?.url}
                      approachsubheading={
                        item.node?.Description?.data?.Description
                      }
                    />
                  ))}
              </div>
              <div className="approach-button">
                <a href="../ourapproach">
                  <ButtonBox
                    type="button"
                    buttonname="know more our approach"
                    className="approach-button-box btn"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about-client-box">
          <div className="contentWidth">
            <div className="about-client">
              <div className="sectionHeading">
                <h1 className="client-heading">
                  What clients say <br /> about us
                </h1>
                <span className="line">&nbsp;</span>
              </div>
              <ButtonBox type="button" buttonname="Reade more reviews" />
            </div>
            <div className="about-slide">
              <Slider {...testimonialslide}>
                {testimonialCard.map((item, i) => (
                  <TestimonialCard
                    key={i}
                    testimonialmessage={item.testimonialmessage}
                    img={item.img}
                    clientname={item.clientname}
                    clientaddress={item.clientaddress}
                    commaimage={item.commaimage}
                  />
                ))}
              </Slider>

              <ButtonBox type="button" buttonname="Reade more reviews" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="recent-work">
          <div className="contentWidth work-box">
            <div className="sectionHeading">
              <h1>our recent work</h1>
              <span className="line">&nbsp;</span>
            </div>
            <div className="work-slider">
              <Slider {...workSlider}>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-1"
                    src={webimg}
                    data-index="1"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-2"
                    src={webimg}
                    data-index="2"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-3"
                    src={webimg}
                    data-index="3"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-4"
                    src={webimg}
                    data-index="4"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-5"
                    src={webimg}
                    data-index="5"
                  />
                </div>
              </Slider>
              {/* <div className="gallery">
                <div className="gallery-container">
                  <img
                    className="gallery-item gallery-item-1"
                    src={webimg}
                    data-index="1" alt=" "
                  />
                  <img
                    className="gallery-item gallery-item-2"
                    src={webimg}
                    data-index="2" alt=" "
                  />
                  <img
                    className="gallery-item gallery-item-3"
                    src={webimg}
                    data-index="3" alt=" "
                  />
                  <img
                    className="gallery-item gallery-item-4"
                    src={webimg}
                    data-index="4" alt=" "
                  />
                  <img
                    className="gallery-item gallery-item-5"
                    src={webimg}
                    data-index="5" alt=" "
                  />
                </div>
                <div className="gallery-controls"></div>
              </div> */}
            </div>
            <div className="view-work">
              <a href="/projectlist">
                <ButtonBox type="button" buttonname="View all work" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-wrap">
          <div className="contentWidth contact-us-box">
            <div className="contact-left">
              <div className="contact-top-content">
                <div className="sectionHeading">
                  <h1 className="contact-heading">Have a Question?</h1>
                  <span className="line">&nbsp;</span>
                </div>
                <p className="contact-Subheading">
                  Write Us, we will contact you shortly!
                </p>
              </div>
              <div className="contact-img">
                <img src={contactimg} alt="contact image" />
              </div>
            </div>
            <form className="contact-right" onSubmit={handleSubmit}>
              <div className="contact-form">
                <div className="input-wrap">
                  <div className="input-box">
                    <div className="form-box">
                      {/* <input
                    type="text"
                    name="name"
                    onChange={(e)=>e.target.value}
                    placeholder={"Full Name"}
                    className="contact-inputs"
                    img={userImg}  
                  /> */}
                      <InputBox
                        type="text"
                        placeholder={"Full Name"}
                        className="contact-inputs"
                        img={userImg}
                        name="name"
                      />
                      {/* {!window.location.pathname.includes('contact') ? (
                  <span className="input-icon">
                    <img src={img} alt="St Logo" />
                  </span>) : <></>} */}
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
                  <textarea
                    placeholder="Write a message here"
                    rows={5}
                    name="message"
                  ></textarea>
                  <span className="input-icon">
                    <img src={messageimg} alt="St Logo" name="message" />
                  </span>
                </div>
                <div className="term-policy">
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <label>
                    {" "}
                    By clicking "submit" you agree to the <a href="#">
                      Terms
                    </a>{" "}
                    and <a href="#">Privacy Policy</a>
                  </label>
                </div>
                <div className="send-button">
                  <ButtonBox type="submit" buttonname="Send message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allStrapiCompanyLogo(sort: { strapi_id: ASC }) {
      edges {
        node {
          logo {
            url
          }
        }
      }
    }

    allStrapiExperiencesProcesse(sort: { strapi_id: ASC }) {
      nodes {
        title
        icon {
          id
          url
        }
      }
    }

    allStrapiTechnologyPartner(sort: { strapi_id: ASC }) {
      edges {
        node {
          Image {
            url
          }
          Title
          Description {
            data {
              Description
            }
          }
        }
      }
    }

    allStrapiExpertise(sort: { strapi_id: ASC }) {
      edges {
        node {
          Title
          Image {
            url
          }
        }
      }
    }

    allStrapiOurapproache(sort: { strapi_id: ASC }) {
      edges {
        node {
          Title
          Description {
            data {
              Description
            }
          }
          Image {
            url
          }
        }
      }
    }

    allStrapiProcess(sort: { strapi_id: ASC }) {
      edges {
        node {
          Title
          Description {
            data {
              Description
            }
          }
        }
      }
    }
  }
`;
