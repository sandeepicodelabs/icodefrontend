import React,{useEffect} from "react";
import marketplaceDetailsimg from "../../assets/images/tabslide1.png";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Modal";

function marketplaceDetail() {
  return (
    <>
      <Header />
      <Popup />
      <section className="marketplaceDetailsPage">
        <div className="contentWidth">
          <div className="imgSec">
            <img src={marketplaceDetailsimg} alt="image" />
          </div>
          <div className="contentSec">
            <h1>Data Center Service</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
            <ul>
              <li>
                <IconCheckmark />
                Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                dolor
              </li>
              <li>
                <IconCheckmark />
                Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                dolor
              </li>
              <li>
                <IconCheckmark />
                Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                dolor
              </li>{" "}
              <li>
                <IconCheckmark />
                Lorem ipsum dolor sit amet, consectetur adipisicLorem ipsum
                dolor
              </li>
            </ul>
            <h2>Explore our audit & assurance services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default marketplaceDetail;
