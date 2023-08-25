import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../marketplace.scss";
import Popup from "../../components/Popup/Modal";
import ButtonBox from "../../components/button";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import serviceimg1 from "../../assets/images/product-service.png";
import serviceimg2 from "../../assets/images/IT-management.png";
import serviceimg3 from "../../assets/images/cloud-services.png";
import serviceimg4 from "../../assets/images/machine-learning.png";
import serviceimg5 from "../../assets/images/data-center.png";
import serviceimg6 from "../../assets/images/software-renew.png";
import serviceimg7 from "../../assets/images/promote-shop.png";
import serviceimg8 from "../../assets/images/design-reivew.png";
import aboutUs from "../../assets/images/aboutus.png";

import Counter from "./counter";

export default function Marketplace() {
  useEffect(() => {
    typeof window != "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Popup />
      <section className="marketplace-header">
        <div className="contentWidth">
          <p>EMPOWER YOUR BUSINESS</p>
          <h1>Excellent IT services for your success</h1>
          <ButtonBox type="button" buttonname="Meet with us" className="btn" />
        </div>
      </section>
      <section className="who-we-are">
        <div className="contentWidth">
          <div className="sectionHeader">
            <p>WHO WE ARE</p>
            <h1>
              We deal with the aspects of
              <br />
              professional IT Services
            </h1>
          </div>
          <div className="professional-services">
            <div className="service-block">
              <img src={serviceimg1} alt="service" />
              <h2>Product Service</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>{" "}
            <div className="service-block">
              <img src={serviceimg2} alt="service" />
              <h2>IT Management</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>{" "}
            <div className="service-block">
              <img src={serviceimg3} alt="service" />
              <h2>Cloud Services</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>{" "}
            <div className="service-block">
              <img src={serviceimg4} alt="service" />
              <h2>Machine Learning</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>{" "}
            <div className="service-block">
              <img src={serviceimg5} alt="service" />
              <h2>Data Center</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>{" "}
            <div className="service-block">
              <img src={serviceimg6} alt="service" />
              <h2>Software Renew</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>{" "}
            <div className="service-block">
              <img src={serviceimg7} alt="service" />
              <h2>Promote Shop</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>{" "}
            <div className="service-block">
              <img src={serviceimg8} alt="service" />
              <h2>Design Review</h2>
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="business-support">
        <div className="contentWidth">
          <div className="imgPart">
            <div className="restly-image-wrapper">
              <div className="shape image-shape2"></div>
              <div className="image-shape"></div>
              <div className="restly-image">
                <img src={aboutUs} alt="about" />
              </div>
            </div>
          </div>
          <div className="contentPart">
            <p>It Support For Business</p>
            <h2>
              Preparing for your success <br /> trusted IT services.
            </h2>
            <div className="aboutIcodelabs">
              <p>
                We’ve been a nearly strategic thought leader for five we are
                bring unrivaled decades incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam nostrud
              </p>
              <ul>
                <li>
                  <IconCheckmark /> Custom shortcodes
                </li>
                <li>
                  {" "}
                  <IconCheckmark />
                  Data Analytics
                </li>
                <li>
                  {" "}
                  <IconCheckmark />
                  IT Consultancy
                </li>
                <li>
                  {" "}
                  <IconCheckmark />
                  Data security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="counterSection">
        <div className="contentWidth">
          <div className="counterblock">
            <Counter number={820} title="Active Clients" />
          </div>
          <div className="counterblock">
            <Counter number={520} title="Projects Done" />
          </div>
          <div className="counterblock">
            <Counter number={100} title="Ready Projects" />
          </div>
          <div className="counterblock">
            <Counter number={90} title="Happy Clients" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
