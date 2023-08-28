import React from "react";
import emarketplaceDetailsimg from "../../assets/images/restaurant-classy.png";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Modal";
import Counter from "./counter";

function Resort() {
    return (
        <>

            <Header />
            <Popup />
            <section className="marketplaceDetailsPage">
                <div className="contentWidth">
                    <div className="imgSec">
                        <img src={emarketplaceDetailsimg} alt="image" />
                    </div>
                    <div className="contentSec">
                        <h1>Restaurant</h1>
                        <p>
                            Building the best restaurant website doesn’t have to be a time-consuming or difficult task.
                            In many cases, there are simple things you can build into your website to share the most important information with your frequent and potential guests, especially as a way to direct customer traffic to online ordering.


                        </p>
                        <ul>
                            <li>
                                <IconCheckmark />
                                A way to make reservations

                            </li>
                            <li>
                                <IconCheckmark />
                                The basics: contact info, hours, location
                            </li>
                            <li>
                                <IconCheckmark />
                                An up to date menu
                            </li>{" "}
                            <li>
                                <IconCheckmark />
                                The restaurant’s social media accounts
                            </li>
                        </ul>
                        <h2>How to make a restaurant website</h2>
                        <p>
                            Building a restaurant website isn’t difficult. To create a restaurant website, you’ll need to use a website platform like Squarespace, Wix, or depending on the skill level of your website builder, the more advanced WordPress or HubSpot. The best restaurant website builders will walk you through purchasing and setting up your domain name, and you’ll easily be able to add the key parts of a restaurant website to your site.

                            Create an account with a website creation platform like Squarespace, Wix, or WordPress.

                            Purchase and set up your domain name (URL).

                            Design and add content to your website.

                            Promote your website.
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

export default Resort;
