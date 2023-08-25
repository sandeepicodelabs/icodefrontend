import React from "react";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Modal";
import { Link } from "gatsby";
import Icons from "../../components/Icons/Icons";
import ButtonBox from "../../components/button";
import Counter from "./counter";

function marketplaceDetail(data, pageContext) {
  return (
    <>
      <Header />
      <Popup />
      <section className="marketplace-header detail-page-header">
        <div className="contentWidth">
          <p>On Demand App Development Services</p>
          <h1>
            Get Fully Customized On Demand App Development Services for Your
            Business
          </h1>
          <ButtonBox buttonname="Share your app idea" className="btn" />
        </div>
      </section>
      <section className="marketplaceDetailsPage">
        <div className="contentWidth">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="separator">
              <Icons name="upArrow" />
            </span>
            <Link to="/marketplace">Marketplace</Link>{" "}
            <span className="separator">
              <Icons name="upArrow" />
            </span>
            <span>On Demand</span>
          </div>
          <div className="solutionSec">
            <h2>Build On-Demand App Solutions With Best-In-Class Features</h2>
            <p>
              Our team of on demand app developers excels in the development and
              integration of features that convert your ordinary app into a
              top-ranked app on the stores.
            </p>
            <div className="features">
              <div className="featureBlock">
                <span className="icon">
                  {" "}
                  <Icons name="socialNetworking" />
                </span>
                <h3>Social Media integration</h3>
                <p>
                  We know how to utilize the second nature of all the modern day
                  mobile app users - the primal need of social connectivity.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="payment" />
                </span>
                <h3>In-app payments</h3>
                <p>
                  Our On Demand app development solutions include the empowering
                  ability to pay from within the mobile app, in a safe
                  environment.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="appAlert" />
                </span>
                <h3>Instant alerts</h3>
                <p>
                  Our well-timed notification strategy and roll outs are devised
                  to bring in an increase in the app engagement levels.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="geoLocation" />
                </span>
                <h3>Geo IP location</h3>
                <p>
                  The apex of on demand economy - Live Location Tracking - is
                  what we excel in the development of. We connect all your
                  stakeholders till the end of the service duration.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="analytics" />
                </span>
                <h3>Analytics</h3>
                <p>
                  For every app that our on demand app developers build, we
                  create a dashboard which holds customized analytics for you to
                  be on top of your app’s performance metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="globalMarket">
        <div className="contentWidth">
          <h1>A global market valued at USD 17.4 billion in 2018.</h1>
          <p>
            Learn more about eScooters - the most ecological and profitable
            subset of the On Demand Industry.
          </p>
          <ButtonBox buttonname="Download" className="btn" />
        </div>
      </section>{" "}
      <section className="marketplaceDetailsPage">
        <div className="contentWidth">
          <div className="contentSec">
            <h1>What makes us a leading on demand app development company</h1>
            <h4>
              There are a number of perks that come attached with Appinventiv
              partnership. The perks which has helped us maintain the industry’s
              highest track record of 80% return clients.
            </h4>
            <p>
              Our team of On demand app development services providers -
              Research Analysts, Designers, Developers, and Quality Assurance
              Analysts - together develop a product that is conceived straight
              out of the users’ problems.
            </p>
            <p>
              By hitting upon the exact issues that the users face, we give them
              a mobility solution that solves their everyday issues in real-time
              and within the vicinity of their home.
            </p>
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

export default marketplaceDetail;
