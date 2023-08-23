import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "../services.scss";
import Footer from "../../components/Footer/Footer";
import { graphql } from "gatsby";
import FAQ from "../../components/FAQ/FAQ";
import WhyWeJoinCard from "../../components/Cards/jointeamcard";
import CompanyApproachCard from "../../components/Cards/companyapproachecard";
import EstimateCard from "../../components/Cards/estimatecard";
import ButtonBox from "../../components/button";
import technologies from "../../assets/images/technologies.png";
import appBenefits from "../../assets/images/android-app-benefits.webp";
import commaimage from "../../assets/images/comma.png";
import userImg from "../../assets/images/user.png";
import Emailicon from "../../assets/images/email.png";
import messageimg from "../../assets/images/message.png";
import linkicon from "../../assets/images/link.png"

import {
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import axios from "axios";
import bigInt from "big-integer";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./Modal.css";
import InputBox from "../../components/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Servicehead from "../../components/ServiceHead/Servicehead";
import Layout from "../Layout";
import Popup from "../../components/Popup/Modal";






export default function Service({ data, pageContext }) {
  //console.log("data",data)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState(false);





  const toggle = () => setModal(!modal);
  useEffect(() => {
    // setTimeout(function () {
    //   setModal(true);
    // }, 10000);  
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }, []);

  // Handle the value change 
  const handleOnChange = (value) => {
    setPhoneNumber(value);
  };

  const servicedata = data && data?.allStrapiServiceDetail?.edges;
  const detail = servicedata?.find((item) => {
    return item?.node?.Slug === pageContext.service?.node?.Slug;
  });
  const particlesInit = async (main) => {
    // console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
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
        Title: title,
        Url: url
      },
    };
    console.log(contactData, "contactData");
    // Make the POST request to your Strapi backend
    axios
      .get(
        `https://icodelabsbackend-qr8y.onrender.com/api/sendingemails?name=${name}&email=${email}&message=${message}
        &phoneNumber=${phoneNumber}&url=${url}`
      )
      .then(async (response) => {
        console.log("Form data sent successfully:", response);
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
    setTitle("");
    setUrl("");
    setErrors({});
    
  };
  //console.log("mobile", phoneNumber)
  return (

    <>
      <div className="project-list-page">
        <Header />
        <Servicehead
          detail={detail}/>
        <Popup />
        <div className="project-wrap-box">
          <section className="service-header">
            {/* <div className="particles" id="particles-js">
              <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  fpsLimit: 120,
                  interactivity: {
                    events: {
                      onClick: {
                        enable: true,
                        mode: "push",
                      },
                      onHover: {
                        enable: false,
                        mode: "repulse",
                      },
                      resize: true,
                    },
                    modes: {
                      push: {
                        quantity: 4,
                      },
                      repulse: {
                        distance: 800,
                        duration: 0.2,
                      },
                    },
                  },
                  particles: {
                    color: {
                      value: "#005b58",
                    },
                    links: {
                      color: "#005b58",
                      distance: 150,
                      enable: true,
                      opacity: 0.2,
                      width: 1,
                    },
                    collisions: {
                      enable: true,
                    },
                    move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                        default: "bounce",
                      },
                      random: false,
                      speed: 1,
                      straight: false,
                    },
                    number: {
                      density: {
                        enable: true,
                        area: 1000,
                      },
                      value: 100,
                    },
                    opacity: {
                      value: 0.2,
                    },
                    shape: {
                      type: "circle",
                    },
                    size: {
                      value: { min: 1, max: 3 },
                    },
                  },
                  detectRetina: true,
                }}
              />
            </div> */}
            <div className="contentWidth">
              <div className="service-header-content">
                <h1>{detail && detail?.node?.Title}</h1>
                <p>{detail && detail?.node?.Description?.data?.Description}</p>
                <div className="getActionBtn">
                  {typeof window !== "undefined" &&
                    window.location.href.includes(
                      "digital-marketing-seo-services-company"
                    ) ? null : <Button className="getQuote" onClick={toggle}>
                    <span className="rippleEffect">&nbsp;</span> Get Started
                  </Button>}
                  {typeof window !== "undefined" &&
                    window.location.href.includes(
                      "digital-marketing-seo-services-company"
                    ) ? <Button className="getQuote" href="/seoPackages">
                    <span className="rippleEffect">&nbsp;</span> Seo Package
                  </Button> : null}

                  {typeof window !== "undefined" &&
                    window.location.href.includes(
                      "digital-marketing-seo-services-company"
                    ) ? (
                    <Button className="freeConsult" onClick={toggle}>
                      <span className="rippleEffect">&nbsp;</span> Free Website Analysis
                    </Button>
                  ) : (
                    " "
                  )}
                </div>
              </div>
              <div className="service-header-image">
                <div className="imgSec">
                  <img
                    src={detail && detail?.node?.TopImage?.[0]?.url}
                    alt="st logo"
                  />
                </div>
              </div>
            </div>
          </section>

          {modal && (
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Contact Now to Craft Digital Excellence!</ModalHeader>
              <ModalBody>
                <Form className="contact-right" onSubmit={handleSubmit}>
                  <div className="contact-form">
                    {/* <h1>Let’s Build Your Dream App!</h1> */}
                    <div className="input-wrap">
                      <InputBox
                        type="text"
                        placeholder={"Full Name"}
                        className="contact-inputs"
                        name="name"
                        img={userImg}
                      />
                    </div>
                    <div className="input-wrap">
                      <InputBox
                        type="email"
                        placeholder={"Email"}
                        className="contact-inputs"
                        name="email"
                        img={Emailicon}
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

                    {typeof window !== "undefined" &&
                      window.location.href.includes(
                        "digital-marketing-seo-services-company"
                      ) ? (
                      <div className="input-wrap">
                        <InputBox
                          type="text"
                          placeholder={"Website Url"}
                          className="contact-inputs"
                          name="url"
                          img={linkicon}
                        />
                      </div>
                    ) : (
                      <div className="input-wrap">
                        <textarea
                          className="contact-input"
                          rows={10}
                          name="message"
                          placeholder="What's your Project about?"
                        />
                        <span className="input-icon">
                          <img src={messageimg} alt="St Logo" name="message" />
                        </span>
                      </div>
                    )}

                    <div>
                      <input
                        type="hidden"
                        name="title"
                        value={detail && detail?.node?.Title}
                      />
                    </div>
                  </div>
                  <div className="send-button">
                    <ButtonBox type="submit" buttonname="Submit" />
                  </div>
                </Form>
              </ModalBody>
            </Modal>
          )}

          <section className="why-we-hire">
            <div className="contentWidth our-team-wrap">
              <div className="our-tech-team">
                <h1>{detail?.node?.DevlopmentTitle}</h1>
                <p className="choose-description">
                  {
                    detail?.node?.DevelopmentDescription?.data
                      ?.DevelopmentDescription
                  }
                </p>
              </div>
              <div className="join-expertise">
                {detail &&
                  detail.node.Titleservice.map((item, i) => (
                    <WhyWeJoinCard
                      key={i}
                      img={item?.TImage && item?.TImage[0]?.url}
                      teamheading={item && item?.Servicetitle}
                      teamdescription={
                        item?.ServiceDescription?.data?.ServiceDescription
                      }
                    />
                  ))}
              </div>
            </div>
          </section>

          <section className="tools-and-technologies-section">
            <div className="contentWidth tools-and-technologies">
              <div className="our-tech-team">
                <h1>{detail?.node?.ToolsTitle}</h1>
                <p>{detail?.node?.ToolsDescription.data.ToolsDescription}</p>
              </div>
              <div className="technologies-block">
                <div className="technologies-img">
                  <img
                    src={detail?.node?.ExpertiseImage?.url}
                    alt="technologies"
                  />
                </div>
                <div className="technologies-content">
                  {detail &&
                    detail?.node?.ToolService.map((item, i) => (
                      <div className="technologies">
                        <h3>{item?.toolsTitle}</h3>
                        <p>{item?.toolsDescription?.data?.toolsDescription}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="contentWidth why-choose-us">
              <div className="our-tech-team">
                <h1>{detail?.node?.EnhanceTitle}</h1>
                <p>
                  {detail?.node?.EnhanceDescription.data.EnhanceDescription}
                </p>
              </div>
              <div className="advantage-section">
                {/* <div className="app-benefits-img">
                  <img src={detail?.node?.ServiceImage?.url} alt="img" />
                </div> */}
                <div className="advantage-block">
                  {detail &&
                    detail?.node.EnhanceService.map((item, i) => (
                      <CompanyApproachCard
                        approachheading={item?.ETitle}
                        img={item?.EImage && item?.EImage[0]?.url}
                        approachsubheading={
                          item?.EDescription.data.EDescription
                        }
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>
          <div className="contentWidth">
            <section className="estimate-section-wrap">
              <div className="estimate-contact">
                <div className="estimate-content">
                  <h3>{detail && detail?.node?.CTATitlte}</h3>
                  <p>
                    {detail &&
                      detail?.node?.CTADescription?.data?.CTADescription}
                  </p>
                </div>
                <a href="/contact">
                  <ButtonBox
                    buttonname="contact now"
                    className="estimate-submit"
                  />
                </a>
              </div>
            </section>
          </div>
          <section className="faq-section">
            <div className="contentWidth">{/* <FAQ /> */}</div>
          </section>
        </div>
        <Footer />
      </div>
    </>

  );
}

export const query = graphql`
  query MyQuery {
    allStrapiServiceDetail(sort: { strapi_id: DESC }) {
      edges {
        node {
          Slug
          TitleMain
          Title
          Metatitle
          Metadescription 
          Keyword
          TopImage {
            url
          }
          CTATitlte
          CTADescription {
            data {
              CTADescription
            }
          }
          Description {
            data {
              Description
            }
          }
          DevlopmentTitle
          DevelopmentDescription {
            data {
              DevelopmentDescription
            }
          }
          ToolsTitle
          ToolsDescription {
            data {
              ToolsDescription
            }
          }
          EnhanceTitle
          EnhanceDescription {
            data {
              EnhanceDescription
            }
          }
          Titleservice {
            TImage {
              url
            }
            Servicetitle
            ServiceDescription {
              data {
                ServiceDescription
              }
            }
          }
          ToolService {
            toolsTitle
            toolsDescription {
              data {
                toolsDescription
              }
            }
          }
          ExpertiseImage {
            url
          }
          ServiceImage {
            url
          }

          EnhanceService {
            EImage {
              url
            }
            ETitle
            EDescription {
              data {
                EDescription
              }
            }
          }
        }
      }
    }
    allStrapiProcess {
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


