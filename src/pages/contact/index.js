import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/headerbar';
import ButtonBox from '../../components/button';
import contactLocation from '../../assets/images/contact-location.png'
import contactEmail from '../../assets/images/contact-email.png'
import contactMeet from '../../assets/images/contact-meet.png'
import contactSkype from '../../assets/images/contact-skype.png'
import contactSlack from '../../assets/images/contact-slack.png'
// import { StaticQuery, graphql } from "gatsby"/ 
import Footer from '../../components/Footer/Footer';
import './style.css';
import mapboxgl from "!mapbox-gl"; // Note the exclamation mark before "mapbox-gl" to avoid Webpack bundling issues



export default function ContactPage() {

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYXRhbDI1IiwiYSI6ImNsazZzaTlpeDAxZGUzZXBoN2tkdGtwZjUifQ.fY8VAIrCr371iMHsf4eKyQ"; // Replace with your Mapbox access token

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
                <div className="getbox-form">
                    <div className="getintouch-form">
                        <h1 className="gettouch-heading">Got a project in mind?</h1>
                        <p className="gettouch-subheading">Send your enquiry and will get back to you within one business day</p>
                        <div className="form-box-input">
                            <div className='form-row-box'>
                                <div className='form-main-group'>
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        className="contact-input"
                                    />
                                </div>
                                <div className='form-main-group'>
                                    <label>Your Email</label>
                                    <input
                                        type="text"
                                        className="contact-input"
                                    />
                                </div>
                            </div>
                            <div className='form-main-group_input'>
                                <label>Your Email</label>
                                <textarea
                                    className="contact-input"
                                    rows={10}
                                />
                            </div>
                        </div>
                        <ButtonBox
                            type="submit"
                            buttonname="SEND MESSAGE"
                        />
                    </div>
                    <div className="getintouch-links">
                        <div className="contact-data">
                            <div className="contact-details-right">
                                <div className="contact-heading">Get in touch with us</div>
                                <div className="contact-social-details">
                                    <ul>
                                        <li>
                                            <div className="contact-social-icon">
                                                <img src={contactLocation} />
                                            </div>
                                            <span>
                                                F-465, K&B Tower,III Floor, Phase 8B Industrial Area, Sector 74 SAS Nagar (Mohali), Punjab, India 140307
                                            </span>
                                        </li>
                                        <li>
                                            <div className="contact-social-icon">
                                                <img src={contactEmail} />
                                            </div>
                                            <span>hello@icodelabs.co</span>
                                        </li>
                                        <li>
                                            <div className="contact-social-icon">
                                                <img src={contactMeet} />
                                            </div>
                                            <span>Schedule a call</span>
                                        </li>
                                        <li>
                                            <div className="contact-social-icon">
                                                <img src={contactSkype} />
                                            </div>
                                            <span>Skype call</span>
                                        </li>
                                        <li>
                                            <div className="contact-social-icon">
                                                <img src={contactSlack} />
                                            </div>
                                            <span>Slack us</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="st_google_map" className="st_map_st_contact_page"></div>
            <Footer />

        </section>
    )
}
