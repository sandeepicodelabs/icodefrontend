import React,{useState,useEffect} from 'react' 
import userImg from "../../assets/images/user.png";
import Emailicon from "../../assets/images/email.png";
import messageimg from "../../assets/images/message.png";
import linkicon from "../../assets/images/link.png"
import InputBox from "../../components/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { graphql } from "gatsby";
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
import ButtonBox from '../button';


function Popup({data,pageContext}) {

    const servicedata = data && data?.allStrapiServiceDetail?.edges;
    const detail = servicedata?.find((item) => {
      return item?.node?.Slug === pageContext.service?.node?.Slug;
    });


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal); 
  const [phoneNumber, setPhoneNumber] = useState("+91");


    useEffect(() => {
      setTimeout(function () {
        setModal(true);
      }, 10000);
    }, []);

    const handleOnChange = (value) => {
        // Handle the value change
        // console.log("New phone number:", value);
        setPhoneNumber(value);
      };

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
        MobileNo: phoneNumber,
        Title: formData.get("title"),
        Url: formData.get("url"),
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
        )}&phoneNumber=${formData.get("phoneNumber")}&url=${formData.get(
          "url"
        )}`
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
  return (
    <div>
          {modal && (
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>For Your Business!</ModalHeader>
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

                      {/* <PhoneInput
                        disabled={false} // Set to true if you want to disable the input
                        containerClass="phone-input-container" // Customize the container's CSS class
                        countryCode="+91" // Default country code
                        onChange={handleOnChange} // Callback when the value changes
                        placeholder="Enter phone number" // Placeholder text
                        name="phoneNumber"
                      /> */}
                      {/* <InputBox
                        type="text"
                        placeholder={"Mobile No"}
                        className="contact-inputs" 
                        name="mobileno"
                      /> */}
                    </div>

                    {typeof window !== "undefined" &&
                    window.location.href.includes(
                      "innovative-digital-marketing"
                    ) ? (
                      <div className="input-wrap">
                        <InputBox
                          type="text"
                          placeholder={"Website Url"}
                          className="contact-inputs"
                          name="url"
                          img={Emailicon}
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
    </div>
  )
}

export default Popup




export const query = graphql`
  query MyQuery {
    allStrapiServiceDetail(sort: { strapi_id: DESC }) {
      edges {
        node {
          Slug
          TitleMain
          Title
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