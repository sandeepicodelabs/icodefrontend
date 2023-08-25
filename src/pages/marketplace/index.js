import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../marketplace.scss";
import Popup from "../../components/Popup/Modal";
import ButtonBox from "../../components/button";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import aboutUs from "../../assets/images/aboutus.png";
import Counter from "./counter";
import { Link } from "gatsby";
import Icons from "../../components/Icons/Icons";

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
            <Link to="/marketplace/onDemand" className="service-block">
              <Icons name="onDemand" />
              <h2>On demand</h2>
            </Link>
            <Link to="/marketplace/Ecommerce/" className="service-block">
              <Icons name="restaurant" />
              <h2>Restaurant</h2>
            </Link>{" "}
            <Link to="/marketplace/resort/" className="service-block">
              <Icons name="realEstate" />
              <h2>Real Estate</h2>
            </Link>{" "}
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="healthcare" />
              <h2>Healthcare</h2>
            </Link>{" "}
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="ecommerce" />
              <h2>Ecommerce</h2>
            </Link>{" "}
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="education" />
              <h2>Education</h2>
            </Link>{" "}
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="socialNetworking" />
              <h2>Social Networking</h2>
            </Link>{" "}
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="saas" />
              <h2>SaaS</h2>
            </Link>{" "}
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="news" />
              <h2>News</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="entertainment" />
              <h2>Entertainment</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="gameApp" />
              <h2>Game App</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="logistics" />
              <h2>Logistics</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="travel" />
              <h2>Travel</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="finance" />
              <h2>Finance</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="aviation" />
              <h2>Aviation</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="eScooter" />
              <h2>eScooter</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="politics" />
              <h2>Politics</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="agriculture" />
              <h2>Agriculture</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="events" />
              <h2>Events</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="wellness" />
              <h2>Wellness</h2>
            </Link>
            <Link
              to="/marketplace/marketplaceDetail/"
              className="service-block"
            >
              <Icons name="EV" />
              <h2>EV</h2>
            </Link>
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
