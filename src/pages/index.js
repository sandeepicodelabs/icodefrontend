import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Header from "../components/Header/Header";
import ButtonBox from "../components/button";
import companyaboutimg from "../assets/images/companyabout.png";
import covercode from "../assets/images/cover-code.png";
import meanstack from "../assets/images/meanstack.png";
import WhyChooseCard from "../components/Cards/whychoosecard";
import TechnologyCard from "../components/Cards/technologycard";
import ExpertiseCard from "../components/Cards/expertisecard";
import CompanyApproachCard from "../components/Cards/companyapproachecard";
import TestimonialCard from "../components/Cards/testimonialcard";
import testimonialPicture from "../assets/images/testimonialPic.png";
import commaimage from "../assets/images/comma.png";
import userImg from "../assets/images/user.png";
import Emailicon from "../assets/images/email.png";
import messageimg from "../assets/images/message.png";
import InputBox from "../components/input";
import Slider from "react-slick";
import "../assets/css/slick/slick-theme.css";
import "../assets/css/slick/slick.css";
import Footer from "../components/Footer/Footer";
import "../assets/css/carousel.css";
import axios from "axios";
import contactimg from "../assets/images/contact-img.png";
//import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Lumela from "../assets/images/portfolio/Lumela.png";
import Branded from "../assets/images/portfolio/Branded.png";
//import Buus from "../assets/images/portfolio/Buus.png";
//import EquipmentNow from "../assets/images/portfolio/EquipmentNow.png";
import GridBid from "../assets/images/portfolio/GridBid.png";
import kojo from "../assets/images/portfolio/kojo.png";
import Mesahat from "../assets/images/portfolio/Mesahat.png";
import ShopRove from "../assets/images/portfolio/ShopRove.png";
import SpaceFoundry from "../assets/images/portfolio/SpaceFoundry.png";
//import Taxable from "../assets/images/portfolio/Taxable.png";
import VendorTree from "../assets/images/portfolio/VendorTree.png";
//latest project
import briller from "../assets/images/portfolioslider/brillr.png";
import Buus from "../assets/images/portfolioslider/Buus.png";
import insightgig from "../assets/images/portfolioslider/Insightgig.png";
import lafig from "../assets/images/portfolioslider/lafig.png";
import pinktada from "../assets/images/portfolioslider/pinktada.png";
import poopsekl from "../assets/images/portfolioslider/Popseekl.png";
import smarthire from "../assets/images/portfolioslider/smarthire.png";
import Taxable from "../assets/images/portfolioslider/Taxable.png";
import thebillets from "../assets/images/portfolioslider/thebillets.png";

import "./style.scss";
import ReactTyped from "react-typed";
import Popup from "../components/Popup/Modal";

const IndexPage = ({ data }) => {
  const companylogo = data?.allStrapiCompanyLogo?.edges;
  const choosecard = data?.allStrapiExperiencesProcesse?.nodes;
  const technologyPartners = data?.allStrapiTechnologyPartner?.edges;
  const expertTech = data?.allStrapiExpertise?.edges;
  const process = data?.allStrapiProcess?.edges;
  const ourApproaches = data?.allStrapiOurapproache.edges;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    typeof window != "undefined" && window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      newErrors.email = "Please enter email address";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Get the form data from the event target
    const formData = new FormData(e.target);
    console.log(formData, "formData");
    const contactData = {
      data: {
        name: name,
        email: email,
        Message: message,
        MobileNo: phoneNumber,
      },
    };
    console.log(contactData, "contactData");
    // Make the POST request to your Strapi backend
    axios
      .get(
        `https://icodelabsbackend.onrender.com/api/sendingemails?name=${name}&email=${email}&message=${message}&phoneNumber=${phoneNumber}`
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

    // Clear the form
    setName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setErrors({});
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

    {
      testimonialmessage:
        "Jay and his team are amazing to work with and they create a very high quality, faultless product. I have worked with them in the past and they are always efficient, creative, accurate and great communicators. I will be coming back again to work with them soon.",
      img: testimonialPicture,
      clientname: "Troy Lane",
      clientaddress: "Australia",
      commaimage: commaimage,
    },

    {
      testimonialmessage:
        "I would strongly recommend him for software engineering and technical leadership. He has a good understanding about Sharetribe and React.",
      img: testimonialPicture,
      clientname: "Edgar Santiago",
      clientaddress: "Rentalo South America",
      commaimage: commaimage,
    },

    {
      testimonialmessage:
        "Dhananjay (Jay) Tiwary did an excellent job with our website development project. He delivered the project tasks as expected and on time, and his pricing was very reasonable. He also made suggestions that I found very helpful. I will definitely hire him again when we need front or backend development work done. I highly recommend Jay for web development projects!",
      img: testimonialPicture,
      clientname: "Holly Manzano",
      clientaddress: "USA",
      commaimage: commaimage,
    },

    {
      testimonialmessage:
        "It was an out most pleasure working eith Jay. highly skilled, professional and passionate about what he does. Jay'sprogramming skills has helped our startup come to fruition and I highly recommend him for any project which i believe will be delivered to a high standard",
      img: testimonialPicture,
      clientname: "William Kwakye",
      clientaddress: "Australia",
      commaimage: commaimage,
    },
    {
      testimonialmessage:
        "Jay is extremely hard working and dedicated. Not only does he implement all ideas quickly and efficiently, he also provided us with his own unique solutions to the problems that we were experiencing. He goes above and beyond the scope of work to advise us what steps need to be taken. He also understands our needs and works tirelessly to produce top quality work. We had issues with our website, servers and bugs that needed to be sorted. He promptly addressed our problems and fixed everything required, and then some. Highly recommend working with Jay as he brings a different perspective from his knowledge and expertise.",
      img: testimonialPicture,
      clientname: "Olive Shamon",
      clientaddress: "Australia",
      commaimage: commaimage,
    },

    {
      testimonialmessage:
        "Jay is just incredible! He is a truly a Sharetribe expert and was able to go above and beyond to ensure my project was executed at the highest level while also being extremely efficient and fast. He quickly understands what you’re looking to accomplish and always asks the right questions while presenting different technical approaches we could take for the project. He was a thought partner with me during the project and I truly cannot thank him enough. I needed someone who would be able to quickly jump in to help me work on a prototype I was planning to present and he went above and beyond to make sure everything was great for the meeting. He also helped me understand the power of Sharetribe Flex and the fact that almost any idea is possible with custom code, it’s just about picking the best approach to do it. I 100% highly recommend working with Jay! He’s an awesome freelancer and I’m excited to work with him again on future projects!!",
      img: testimonialPicture,
      clientname: "Fatima",
      clientaddress: "USA",
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
      <Popup />
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
              <ReactTyped
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={[
                  "React Native Development",
                  "MEAN/MERN Stack Development",
                  "Sharetribe Web Development",
                  "JAM Stack Development",
                  "Flutter App Development",
                  "Angular Development",
                ]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
                className="cover-stack"
              />
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
              <h2>iCode Labs: Igniting Ideas And Engineering Excellence.</h2>
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
        <div className="contentWidth why-choose-us landingSec">
          <div className="heading-main">
            <div className="sectionHeading">
              <h1 className="choose-heading">Why Choose iCode Labs?</h1>
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
            <div className="join-expertise">
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

      <section>
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
              {/* <ButtonBox type="button" buttonname="Reade more reviews" /> */}
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
                    src={briller}
                    data-index="1"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-2"
                    src={Buus}
                    data-index="2"
                  />
                </div>
                {/* <div className="work-slider-item">
                  <img
                    className="work-item work-item-3"
                    src={EquipmentNow}
                    data-index="3"
                  />
                </div> */}
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-4"
                    src={insightgig}
                    data-index="4"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-5"
                    src={lafig}
                    data-index="5"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-6"
                    src={pinktada}
                    data-index="6"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-7"
                    src={poopsekl}
                    data-index="7"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-8"
                    src={smarthire}
                    data-index="8"
                  />
                </div>
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-9"
                    src={Taxable}
                    data-index="9"
                  />
                </div>
                {/* <div className="work-slider-item">
                  <img
                    className="work-item work-item-10"
                    src={Taxable}
                    data-index="10"
                  />
                </div> */}
                <div className="work-slider-item">
                  <img
                    className="work-item work-item-11"
                    src={thebillets}
                    data-index="11"
                  />
                </div>
              </Slider>
            </div>
            {/* <div className="view-work">
              <a href="/projectlist">
                <ButtonBox type="button" buttonname="View all work" />
              </a>
            </div> */}
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
                  <InputBox
                    type="text"
                    placeholder={"Full Name"}
                    className="contact-inputs"
                    value={name}
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
                    value={email}
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
                    placeholder="Write a message here"
                    rows={5}
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <span className="input-icon">
                    <img src={messageimg} alt="St Logo" name="message" />
                  </span>
                </div>
                {/* <div className="term-policy">
                  <input type="checkbox" name="vehicle1" value="Bike" />
                  <label>
                    {" "}
                    By clicking "submit" you agree to the <a href="#">
                      Terms
                    </a>{" "}
                    and <a href="#">Privacy Policy</a>
                  </label>
                </div> */}
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
