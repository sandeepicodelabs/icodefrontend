import React from "react";
import emarketplaceDetailsimg from "../../assets/images/restaurant-classy.png";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Modal";
import Counter from "./counter";
import Icons from "../../components/Icons/Icons";
import ButtonBox from "../../components/button";
import { Link } from "gatsby";
import "../marketplace.scss";

function Resort() {
    return (
        <>

            <Header />
            <Popup />
            <section className="marketplace-header">
                <div className="contentWidth">
                    {/* <div className="imgSec">
                        <img src={emarketplaceDetailsimg} alt="image" />
                    </div> */}
                    <div className="contentSec">
                        <h1>Restaurant App Development Services</h1>
                        <p>
                            Serving the restaurant industry stakeholders a combination of efficient ordering, on-time delivery and hassle free payment.

                        </p>
                    </div>
                </div> 
            </section>
            <section className="who-we-are">
                <div className="sectionHeader">
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
                            <h2>Restaurant app development solutions we offer to help you serve your guests better</h2>
                            <p>
                                Our hand-crafted restaurant mobile app development solutions make dining easy and food delivery efficient.
                                No matter how you are looking to innovate the food and restaurant industry,
                                we plate up a variety of restaurant solutions to help you serve your diners better.
                            </p>
                        </div>
                        <div className="professional-services">
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Restaurant finder app development</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>On-premise food order POS development</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Food delivery app development</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Food ordering app development</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Restaurant discounts app development</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Inventory management solutions development</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Restaurants web portals</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Waiter management solutions</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Restaurant review app development</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Restaurant chains</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Kitchen display system</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Restaurant PoS software development</h2>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>  
        

            <section className="why-we-hire">
        <div className="contentWidth our-team-wrap">
          <div className="our-tech-team">
            <h1>We blend innovation and value in equal portions</h1>
            <h4>Digitalizing the food order and delivery industry by bringing thousands of restaurants and millions of diners on one platform.</h4>
            <p className="choose-description">
           <p> We specialize in serving your customers with online food ordering, digital food menu, online payments and much more through our responsive restaurant mobile app solutions. We are a leading restaurant app development company known to redefine the dining experience of millions across the globe by bringing the simplicity of ordering online and comfortable delivery on their doorsteps. We are here for all your stakeholders - whether they are one or four.</p><br/>
           <p>Our restaurant mobile app developers are dedicated in software, design, usability and testing to provide you with one-of-a-kind customer experience. Our restaurant app development services are devised to simplify the complex backend tasks while making the process of ordering and delivering food in restaurant and at home efficient.</p><br/>
 
           <p>Our on-demand food delivery app development team is made up of 400+ industry experts who have a wealth of experience creating applications for successful restaurants, thus they understand tech needs of the restaurant industry from the inside out. Whether you want to develop an app like Uber eats or Zomato, we are prepared to be a part of your restaurant innovation journey.</p>

            </p>
            </div>
            </div>
            </section>

            <section className="who-we-are">
                <div className="sectionHeader">
                    <div className="contentWidth">
                    <div className="solutionSec">
                            <h1>Business models we support</h1>
                      
                        </div>

                        <div className="professional-services">
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Food delivery apps</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Single/multi chain restaurant apps</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Aggregator apps</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Customer apps</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Delivery agent apps</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Restaurant management apps</h2>
                            </Link>
                            <Link to="" className="service-block">
                                <Icons name="restaurant" />
                                <h2>Cloud kitchen solutions</h2>
                            </Link>
                            
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

export default Resort;
