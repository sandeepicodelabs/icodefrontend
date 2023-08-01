import React, { useEffect,useState } from 'react'
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
import { Link } from 'gatsby';
//import { countryList } from 'country-codes-list';
import PhoneInput from 'react-phone-number-input';
import '../../assets/css/custom.css';
import sgMail from './sendgrid'



export default function ContactPage() {    
 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [value, setValue] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();


        const data = {
            name,
            email,
          };

          //emailsendgrid
          const [emailData, setEmailData] = useState({
            to: 'sandeepbishnoi2503@gmail.com',
            from: 'support@icodelabs.co',
            subject: 'Contact Form Submission',
            text: 'testing',
          });
        
          const handleChange = (e) => {
            setEmailData({ ...emailData, text: e.target.value });
          };
        

          const handleSubmit = (e) => {
            e.preventDefault();
            sgMail.send(emailData)
              .then(() => {
                console.log('Email sent successfully');
              })
              .catch((error) => {
                console.error(error);
              });
          };



          const result = await fetch('http://localhost:1337/api/contact-uses', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query: `
                mutation CreateContactForm($data: ContactFormInput!) {
                  createContactForm(input: {data: $data}) {
                    contactForm {
                      id
                      name
                      email
                    }
                  }
                }
              `,
              variables: {
                data,
              },
            }),
          });
      
          const response = await result.json();
          console.log(response);
          // Handle the response as needed, e.g., show a success message
        };


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
            <form onSubmit={handleSubmit}>
      <textarea onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
            <div className="getintouch-box">
                <div className="getbox-form">
                    <div className="getintouch-form">
                        <h1 className="gettouch-heading">Got a project in mind?</h1>
                        <p className="gettouch-subheading">Send your enquiry and will get back to you within one business day</p>
                        <form method="post" action='http://localhost:1337/api/contact-uses'>
                        <div className="form-box-input">
                            <div className='form-row-box'>
                                <div className='form-main-group'>
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        className="contact-input" name='name'  value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='form-main-group'>
                                    <label>Your Email</label>
                                    <input
                                        type="text"
                                        className="contact-input" name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            {/* <div className='form-row-box'>
                                <div className='form-main-group'>
                                    <label>Skyep Id</label>
                                    <input
                                        type="text"
                                        className="contact-input"
                                    />
                                </div>
                                <div className='form-main-group'>
                                    <label>Phone no. </label>
                                    <input type='text'
                                country="US"
                                value={value}
                                onChange={setValue} />
                                    
                                </div>
                            </div> */}


                            <div className='form-main-group_input'>
                                <label>Your Email</label>
                                <textarea
                                    className="contact-input" name='youremail'
                                    rows={10}
                                />
                            </div>
                        </div>
                        <ButtonBox
                            type="submit"
                            buttonname="SEND MESSAGE"
                        />
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
                                            <span>
                                                <a href="https://calendly.com/jaytiwary">Schedule a call</a>
                                            </span>

                                        </li>
                                        <li>
                                            <div className="contact-social-icon">
                                                <img src={contactSkype} />
                                            </div>
                                            <span><p><Link to="skype:live:jaytiwary_4?call">Skype call</Link></p></span>
                                        </li>
                                        <li>
                                            <div className="contact-social-icon">
                                                <img src={contactSlack} />
                                            </div>
                                            <span>
                                                <a href="https://icodesoftwarelabs.slack.com">Slack us</a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="st_google_map" className="st_map_st_contact_page" />
            <Footer />
        </section>
    )
}
