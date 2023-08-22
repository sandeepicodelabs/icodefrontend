import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../seo.scss";
import Popup from "../../components/Popup/Modal";
import ButtonBox from "../../components/button";
import { Button, Form, Modal, ModalBody, ModalHeader } from "reactstrap";
import InputBox from "../../components/input";
import PhoneInput from "react-phone-input-2";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import IconGreenCheck from "../../components/IconGreenCheck/IconGreenCheck";
import IconRedCross from "../../components/IconRedCross/IconRedCross";
import seopopup from "../../assets/images/SEO/seo-services-agency.png";
import Layout from "../Layout";
import axios from "axios";

export default function Seo() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    typeof window != "undefined" && window.scrollTo(0, 0);
  }, []);
  const [phoneNumber, setPhoneNumber] = useState("+91");

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
        LName: formData.get("lname"),
        Email: formData.get("email"),
        Message: formData.get("message"),
        MobileNo: phoneNumber,
        Title: formData.get("title"),
        Url: formData.get("url"),
        Packages:formData.get("package")
      },
    };
    console.log(contactData, "contactData");
    
    // Make the POST request to your Strapi backend
    axios
      .get(
        `https://icodelabsbackend-qr8y.onrender.com/api/sendingemails?name=${formData.get(
          "name"
        )}&email=${formData.get("email")}&message=${formData.get(
          "message"
        )}&phoneNumber=${formData.get("phoneNumber")}&url=${formData.get("url")}&lname=${formData.get("package")}&lname=${formData.get("package")}`
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
    setPhoneNumber("+91");
    e.target.reset();
  };




  return (
 
    <>
      <Header />
     
      <section className="service-hero-section">
        <div className="contentWidth">
          <div className="service-hero-content">
            <h1>Affordable SEO Packages For All Enterprises To Boost Business Traffic & Revenue</h1>
            <p>Skyrocket your sales with customisable SEO packages</p>
          </div>
        </div>
      </section>
      <section className="seoPlanSec">
        <div className="contentWidth">
          <h1>SEO Packages</h1>
          <div className="secoTable">
            <table>
              <thead>
                <tr>
                  <th>Packages Price</th>
                  <th>
                    <div className="pricePlan">
                      <h3>Essential</h3>
                      <h2>
                        <sup>USD</sup> 299/m{" "}
                      </h2>
                    </div>
                    <div className="getQuoteBtnSec">
                      <Button className="getQuoteBtn" onClick={toggle}>
                        <span className="rippleEffect">&nbsp;</span> Get a Quote
                      </Button>
                    </div>
                  </th>
                  <th>
                    <div className="pricePlan">
                      <h3>Advanced</h3>
                      <h2>
                        <sup>USD</sup> 699/m{" "}
                      </h2>
                    </div>
                    <div className="getQuoteBtnSec">
                      <Button className="getQuoteBtn" onClick={toggle}>
                        <span className="rippleEffect">&nbsp;</span> Get a Quote
                      </Button>
                    </div>
                  </th>
                  <th>
                    <div className="pricePlan">
                      <h3>Millennial</h3>
                      <h2>
                        <sup>USD</sup> 1399/m{" "}
                      </h2>
                    </div>
                    <div className="getQuoteBtnSec">
                      <Button className="getQuoteBtn" onClick={toggle}>
                        <span className="rippleEffect">&nbsp;</span> Get a Quote
                      </Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Pages Managed</strong>
                  </td>
                  <td>Upto 10 Pages</td>
                  <td>Upto 25 Pages</td>
                  <td>Upto 50 Pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Final Keywords</strong>
                  </td>
                  <td>10 to 20 Keywords</td>
                  <td>21 to 50 Keywords</td>
                  <td>50 to 100 Keywords</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>One-Time Tasks As On-Page SEO Optimization</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>SEO Strategy and Plan</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Keywords Analysis Report</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Competitor Analysis Report</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Title Tag optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Search Console Setup</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Analytics Setup & Analysis</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Cross Browser Compatibility Check</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Competitor Backlink Analysis</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Duplicate Content Checking</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Broken Links Check</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Resolve Canonical Error</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Onsite blog optimization</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>W3c Validation</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Website Load Time Checking</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Website Speed Check</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Meta Tag optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>URL Mapping and Rewriting</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Existing content optimization</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Robots.txt Optimization</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Check website structure</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Heading Tag optimization</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Image Optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Schema Codes</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>XML Sitemap Creation</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Internal Linking Optimization</strong>
                  </td>
                  <td>Up to 15 pages</td>
                  <td>Up to 25 pages</td>
                  <td>Up to 50 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>404 error correction</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Off-Page SEO Optimization & Link Building</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Number of Monthly Links</strong>
                  </td>
                  <td>80 - 100 links</td>
                  <td>140 to 180 links</td>
                  <td>200 to 250 links</td>
                </tr>
                <tr>
                  <td>
                    <strong>Social Bookmarking Submission</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Blog Comment</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>Upto 10 pages</td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Slide Submissions</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>Upto 15 pages</td>
                </tr>
                <tr>
                  <td>
                    <strong>Image Sharing</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Document sharing</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Local Listing submission</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Press Release Submission</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Classified Submission</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Video Creation and Sharing</strong>
                  </td>
                  <td>
                    <IconGreenCheck /> (only sharing)
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Link Building on Competitors backlinks</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Content Marketing</strong>
                  </td>
                  <td>
                    <IconGreenCheck />{" "}
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Guest Blog posting</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>1 per month (from 2nd month onwards)</td>
                  <td>2 per month (from 2nd month onwards)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Infographic creation & promotion</strong>
                  </td>
                  <td>
                    <IconGreenCheck />{" "}
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Reddit comments</strong>
                  </td>
                  <td>
                    <IconGreenCheck />{" "}
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Search engine submissions</strong>
                  </td>
                  <td>
                    <IconGreenCheck />{" "}
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Web 2.0 Blogs submissions</strong>
                  </td>
                  <td>1 per month </td>
                  <td>2 per month</td>
                  <td>3 per month</td>
                </tr>
                <tr>
                  <td>
                    <strong>Video Promotions</strong>
                  </td>
                  <td>
                    <IconGreenCheck />{" "}
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Blog Submission</strong>
                  </td>
                  <td>
                    <IconGreenCheck />{" "}
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Social Media Post Sharing</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Quora Question and Answer</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Article submission</strong>
                  </td>
                  <td>
                    <IconGreenCheck />{" "}
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Monthly Content Creation</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Web 2.0 Blog content (500 words)</strong>
                  </td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <strong>Website Blog post (600 to 1200 words)</strong>
                  </td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>
                    <strong>Guest Blog Content (1000 to 2000 words)</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>1 (from 2nd month)</td>
                  <td>2 (from 2nd month)</td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Website Optimization for Local Search</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Local Search Engine Submissions</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Google My Business Listing</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Bing Business Listing</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Social Media Optimization</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Facebook</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Twitter</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Instagram</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Pinterest</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td className="sectionHeading" colSpan={4}>
                    <h2>Analysis Report</h2>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Report Frequency</strong>
                  </td>
                  <td>Monthly</td>
                  <td>Mid of the Month</td>
                  <td>Weekly</td>
                </tr>
                <tr>
                  <td>
                    <strong>SEO Ranking Reports</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Report of On-Page SEO</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Webmaster Report & Analysis</strong>
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconRedCross />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Google Analytical Report and Analysis</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>E-mail/Call/Skype Support</strong>
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                  <td>
                    <IconGreenCheck />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="getQuoteSec">
            <Button onClick={toggle}>
              <span className="rippleEffect">&nbsp;</span> Get a Quote
            </Button>
          </div>
        </div>
      </section>{" "}
      {modal && (
        <Modal  modalClassName="getQuoteModal" isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}></ModalHeader>
          
          <ModalBody>
            <div className="quoteLeftSec">
              <h3>NEED AN ANSWER NOW?</h3>
              <p>GET IN TOUCH TO GET STARTED FASTER</p>
              {/* <h2>GIVE US A RING</h2> */}
              {/* <h1>
                <a href="tel:+919212521444">+91 92125 21444</a>
              </h1> */}
              <ul>
                <li>
                  <IconCheckmark />
                  5+ Years SEO Focussed Company
                </li>
                <li>
                  <IconCheckmark />
                  10+ Internationally Certified SEO Experts
                </li>
                {/* <li>
                  <IconCheckmark />5 Million + Keywords Optimized
                </li> */}
                <li>
                  <IconCheckmark />
                20+ Successful SEO Campaigns Delivered
                </li>
              </ul>
               <div className="accreditedSec">
                <img src={seopopup} alt="st logo"/>
                {/* <h2>Accredited By</h2>
                <ul class="partner_list">
                  <li>
                    <img
                      src="https://www.pagetraffic.in/wp-content/uploads/2022/04/google-partner-withshadow.png"
                      alt="google-partner"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pagetraffic.in/wp-content/uploads/2022/03/bbb-logo-with-rating.png"
                      alt="bbb-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pagetraffic.in/wp-content/uploads/2022/03/clutch-full-logo-1.png"
                      alt="clutch-full-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://www.pagetraffic.in/wp-content/uploads/2022/04/red-herring-asia.png"
                      alt="red-herring-asia"
                    />
                  </li>
                </ul> */}
              </div> 
            </div>
            <div className="quoteRightSec">
              <Form className="contact-right" onSubmit={handleSubmit}>
                <div className="formHeader">
                  <h1>Get a free SEO Audit</h1>
                  <p>
                    We are ready to help you. Fill out the form below to get
                    started.
                  </p>
                </div>
                <div className="contact-form">
                  <div className="input-wrap halfWidth">
                    <InputBox
                      type="text"
                      label="First Name *"
                      placeholder={""}
                      className="contact-inputs"
                      name="name"
                    />{" "}
                    <InputBox
                      label="Last Name"
                      type="text"
                      placeholder={"Last Name"}
                      className="contact-inputs"
                      name="lname"
                    />
                  </div>
                  <div className="input-wrap halfWidth">
                    <InputBox
                      label="What's Your Email? *"
                      type="email"
                      placeholder=""
                      className="contact-inputs"
                      name="email"
                    />{" "}
                    <div className="form-box">
                      <label htmlFor="phone">What's Your Phone?"</label>
                      <PhoneInput
                        placeholder=""
                        countryCode="+91"
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        name="phoneNumber"
                      />
                    </div>
                  </div>
                  <div className="input-wrap">
                    <InputBox
                      label="What's Your Company's Website? *"
                      type="text"
                      placeholder=""
                      className="contact-inputs"
                      name="url"
                    />{" "}
                  </div>
                  <div className="input-wrap">
                    <div className="form-box">
                      <label htmlFor="package">
                        Package you are interested in: *
                      </label>
                      <select name="package" id="package">
                        <option value="Essential">Essential</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Millennial">Millennial</option>
                        <option value="Customize">Customize Package</option> 
                      </select>
                    </div>
                  </div>
                  <div className="input-wrap">
                    <div className="form-box">
                      <label htmlFor="package">How Can We Help You? *</label>
                      <textarea
                        name="message"
                        id="help"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="send-button">
                  <ButtonBox type="submit" buttonname="Submit" />
                </div>
                <div className="alternativeContact">
                  Alternatively you can contact us at:{" "}
                  <a href="mailto:hello@icodelabs.co">hello@icodelabs.co</a> *
                  We don’t share your information with third party.
                </div>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      )}
      <Footer />
    </>
    
  );
}
