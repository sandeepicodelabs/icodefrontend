import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import HeaderBar from "../../components/headerbar";
import ButtonBox from "../../components/button";
import contactLocation from "../../assets/images/contact-location.png";
import contactEmail from "../../assets/images/contact-email.png";
import contactMeet from "../../assets/images/contact-meet.png";
import contactSkype from "../../assets/images/contact-skype.png";
import contactSlack from "../../assets/images/contact-slack.png";
import Footer from "../../components/Footer/Footer";
import "../../assets/css/custom.css";
import "../contact.scss";
import mapboxgl from "!mapbox-gl"; // Note the exclamation mark before "mapbox-gl" to avoid Webpack bundling issues
import { Link } from "gatsby";
import axios from "axios";

export default function ContactPage() {
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

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYXRhbDI1IiwiYSI6ImNsazZzaTlpeDAxZGUzZXBoN2tkdGtwZjUifQ.fY8VAIrCr371iMHsf4eKyQ"; // Replace with your Mapbox access token

    const map = new mapboxgl.Map({
      container: "st_google_map",
      style: "mapbox://styles/mapbox/streets-v11", // Replace with the desired map style URL
      center: [76.7179, 30.7046], // Longitude, Latitude
      zoom: 15,
    });

    // Optional: Add markers or any other map-related customization
    new mapboxgl.Marker().setLngLat([76.7179, 30.7046]).addTo(map);
    // Cleanup the map instance when the component unmounts
    return () => map.remove();
  }, []);

  return (
    <section className="contact-us-page">
      <Header />
      <HeaderBar currentpage="Contact Us" pagetitle="Contact Us" />
      <div className="getintouch-box">
        <div className="contentWidth">
          <div className="getbox-form">
            <div className="getintouch-form">
              <h1 className="gettouch-heading">Got a project in mind?</h1>
              <p className="gettouch-subheading">
                Send your enquiry and will get back to you within one business
                day
              </p>
              <form onSubmit={handleSubmit}>
                <div className="form-box-input">
                  <div className="form-row-box">
                    <div className="form-main-group">
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="contact-input"
                        name="name"
                      />
                    </div>
                    <div className="form-main-group">
                      <label>Your Email</label>
                      <input
                        type="text"
                        className="contact-input"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="form-main-group">
                    <label>Your Message</label>
                    <textarea
                      className="contact-input"
                      rows={10}
                      name="message"
                    />
                  </div>
                </div>
                <ButtonBox type="submit" buttonname="Send Message" />
              </form>
            </div>
            <div className="getintouch-links">
              <div className="contact-data">
                <div className="contact-details-right">
                  <div className="contact-heading">Get in touch with us</div>
                  <div className="contact-social-details">
                    <ul>
                      <li>
                        <div className="contact-social-icon">
                          <img src={contactLocation} alt="st logo" />
                        </div>
                        <span>
                          F-465, K&B Tower,III Floor, Phase 8B Industrial Area,
                          Sector 74 SAS Nagar (Mohali), Punjab, India 140307
                        </span>
                      </li>
                      <li>
                        <div className="contact-social-icon">
                          <img src={contactEmail} alt="st logo" />
                        </div>
                        <span>hello@icodelabs.co</span>
                      </li>
                      <li>
                        <div className="contact-social-icon">
                          <img src={contactMeet} alt="st logo" />
                        </div>
                        <span>
                          <a href="https://calendly.com/jaytiwary">
                            Schedule a call
                          </a>
                        </span>
                      </li>
                      <li>
                        <div className="contact-social-icon">
                          <img src={contactSkype} alt="st logo" />
                        </div>
                        <span>
                          <p>
                            <Link to="skype:live:jaytiwary_4?call">
                              Skype call
                            </Link>
                          </p>
                        </span>
                      </li>
                      <li>
                        <div className="contact-social-icon">
                          <img src={contactSlack} alt="st logo" />
                        </div>
                        <span>
                          <a href="https://icodesoftwarelabs.slack.com">
                            Slack us
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="st_google_map" className="st_map_st_contact_page" />
      <Footer />
    </section>
  );
}
