import React ,{useEffect} from "react";
import restaurant from "../../assets/images/restaurant-order.png";
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
    useEffect(() => {
        typeof window != "undefined" && window.scrollTo(0, 0);
      }, []);
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
                            <p> We specialize in serving your customers with online food ordering, digital food menu, online payments and much more through our responsive restaurant mobile app solutions. We are a leading restaurant app development company known to redefine the dining experience of millions across the globe by bringing the simplicity of ordering online and comfortable delivery on their doorsteps. We are here for all your stakeholders - whether they are one or four.</p><br />
                            <p>Our restaurant mobile app developers are dedicated in software, design, usability and testing to provide you with one-of-a-kind customer experience. Our restaurant app development services are devised to simplify the complex backend tasks while making the process of ordering and delivering food in restaurant and at home efficient.</p><br />

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

            <section>
                <div className="how-do-we-do">
                    <div className="inner-timeline-box contentWidth">
                        <div className="timeline-heading">
                            <div className="sectionHeading ">
                                <h1>Using all the ingredients that make your application an AOTD, everyday</h1>
                                <span className="line">&nbsp;</span>
                            </div>
                            <p>We power-pack your app with features that are designed to make your restaurant services efficient.</p>
                        </div>
                        <div className="timeline-content">
                            <div className="timeline">

                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Send location-based deals </h3>
                                        <p>
                                            Send location-based deals We, as an online food delivery app development company, take best leverage of
                                            the GPS feature to help you send location-based deals to people.
                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">1</div>
                                    </div>
                                </div>
                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Share reviews via social media </h3>
                                        <p> We empower your customers to leave a review on your restaurant’s service and food options
                                            and share them on social media from right within the application.
                                            The feature which is designed to be a powerful marketing strategy.
                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">2</div>
                                    </div>
                                </div>
                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Maintain customer database</h3>
                                        <p> We, as a restaurant app development company back your apps with an integrated tracking feature that keeps
                                            track of people who viewed, visited and downloaded your app. Our restaurant app developers then create a
                                            dashboard for you to gather their contact details and maintain a comprehensive database that can be used to
                                            carry out targeted marketing campaigns.
                                        </p>
                                    </div>
                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">3</div>
                                    </div>
                                </div>
                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Easy menu display</h3>
                                        <p>Complete with images and interactive features, we add an easy menu display when we develop an online food delivery app or create
                                            a dine-in solution. We also give your users the option to mark their
                                            favorites after searching extensively through the advanced filters designed according to price, cuisines, and taste preferences.
                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">4</div>
                                    </div>
                                </div>

                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Quick reservations</h3>
                                        <p>
                                            An automatic real-time updating in records doesn’t just help optimize your restaurant app performance but also reduce the wait time,
                                            especially during the busy holiday season. We help you achieve these benefits through the intuitive quick reservation functionality.
                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">5</div>
                                    </div>
                                </div>
                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Maintain event listing</h3>
                                        <p>
                                            Our restaurant app development solutions enable your app to maintain a calendar of restaurant events such as food festivals, cuisine days,
                                            jamming nights, DJ events, and so on by including this special feature in your app.
                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">6</div>
                                    </div>
                                </div>
                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Convenient checkout</h3>
                                        <p>
                                            Our restaurant mobile app solutions also consist of solutions where customers can easily check out through your app via a few taps on the screen.
                                            You can get notified as soon as the table status gets “vacant”.
                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">7</div>
                                    </div>
                                </div>
                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Nearby restaurants</h3>
                                        <p>
                                            Your customers can search and find nearby restaurants that serve their favorite dishes by simply running the search enabled
                                            with advanced geo-location features with our on-demand food delivery app development solutions.
                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">8</div>
                                    </div>
                                </div>

                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Re-order and take away</h3>
                                        <p>
                                            Repeating the favorite orders for customers must not take their time and energy.
                                            Our custom food delivery application development services utilize the “Reorder”
                                            feature to make it easy for your customers to enjoy their favorite dishes as many times as they want.

                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">8</div>
                                    </div>
                                </div>

                                <div className="container-wrap-box steps">
                                    <div className="content">
                                        <h3>Manage profile</h3>
                                        <p>
                                            From profile details to multiple delivery addresses and everything in between such as choosing their preferred payment method,
                                            our restaurant application development includes all profile management features.

                                        </p>
                                    </div>

                                    <div className="date-month-box border-steps">
                                        <div className="month">Step</div>
                                        <div className="month-date">9</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-we-hire">
                <div className="contentWidth our-team-wrap">
                    <div className="our-tech-team">
                        <h1>Our integration choices make us a trusted restaurant app development company</h1>
                        <p className="choose-description">
                            Here are the integrations our restaurant mobile app developers blend in to make your restaurant app interactive, engaging, and scalable.
                            Varied Payment Options For An Easy And Secure Dining Experience

                        </p>
                        <div className="join-expertise">
                            <div className="join-our-team">
                                <h3>Varied payment options integration</h3>
                                <p style={{ color: "black" }}>
                                    Varied payment options integration
                                    We integrate multiple payment options in the app: e-wallets, online transfers, card payments, or coupon redemption to enable a cashless dining experience.
                                    The payment mechanisms that we integrate are designed to make user experience smooth and encourage repeated orders.
                                </p>
                            </div>
                            <div className="join-our-team">
                                <h3>Embeddable media content</h3>
                                <p style={{ color: "black" }}>We facilitate embedding high-resolution images, videos, animations, and other media content into your app, easily. You can add your restaurant pictures, nearby landmarks for easy navigation,
                                    food menu pictures, and images of special events in your restaurant to entice visitors.
                                </p>
                            </div>
                            <div className="join-our-team">
                                <h3>Referral feature</h3>
                                <p style={{ color: "black" }}>Our restaurant app development services also enable you to have a referral system in place enabling your users to earn bonus points while they dine in or order from your restaurant.
                                    The objective is to help you not just earn loyal customers but also generate revenue through app download subscriptions.
                                </p>
                            </div>

                            <div className="join-our-team">
                                <h3>Multiple platform compatibility</h3>
                                <p style={{ color: "black" }}>We, as a leading restaurant app development company, develop your apps to be multi-platform and compatible with different screen sizes, making them attractive for both Android and Apple users.
                                    Irrespective of which platform your customers are on, we will get you on it.
                                </p>
                            </div>
                            <div className="join-our-team">
                                <h3>Push notifications mechanism</h3>
                                <p style={{ color: "black" }}>We integrate well-timed push notifications in your applications. You can take advantage of the push notifications
                                    functionality to send personalized messages to your customers aimed at increasing repeat orders and thus, greater revenue.
                                </p>
                            </div>
                            <div className="join-our-team">
                                <h3>Discount vouchers and coupons</h3>
                                <p style={{ color: "black" }}>We integrate discount vouchers and coupon features for the customers to keep them engaged with your app.
                                    Our restaurant mobile app developers can integrate seasonal offers,
                                    promo codes and other forms of incentives to keep your customers happy.
                                </p>
                            </div>

                            <div className="join-our-team">
                                <h3>Help and support</h3>
                                <p style={{ color: "black" }}>Our restaurant apps development services also include one-touch
                                    help and support features allowing your customers to reach out to the support team for quick assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="marketplaceDetailsPage">
                <div className="contentWidth">
                    <div className="contentSec">
                        <h1>Our Restaurant App Development Process</h1>
                        <div className="solutionSec">
                            <div className="features">
                                <div className="featureBlock">
                                    <span className="icon">
                                        {" "}
                                        <Icons name="socialNetworking" />
                                    </span>
                                    <h3>Consulting</h3>
                                    <p>
                                        As a leading restaurant app development company, we begin with what, why, and how restaurant software and apps can benefit your
                                        business and bring sustainable solutions to the system. We also deliver a roadmap for app implementation.
                                    </p>
                                </div>
                                <div className="featureBlock">
                                    <span className="icon">
                                        {" "}
                                        <Icons name="socialNetworking" />
                                    </span>
                                    <h3>Requirement analysis</h3>
                                    <p> Requirement analysis
                                        We analyze your requirements to understand the features and functionalities to be integrated in your project.
                                        This helps us draw an effective development plan for you.
                                    </p>
                                </div>
                                <div className="featureBlock">
                                    <span className="icon paymentIcon">
                                        <Icons name="payment" />
                                    </span>
                                    <h3>UI/UX design</h3>
                                    <p>
                                        Our restaurant app development team creates cutting-edge intuitive UI designs that are simple and convenient for the end users.
                                        Simultaneously, our designers work on the blueprint designs, user designs and database designs.
                                    </p>
                                </div>
                                <div className="featureBlock">
                                    <span className="icon">
                                        <Icons name="appAlert" />
                                    </span>
                                    <h3>Prototype</h3>
                                    <p>
                                        We develop a prototype of what your restaurant app or software would look like.
                                        Further, we test the prototype for convenient UI and UX designs.
                                    </p>
                                </div>

                                <div className="featureBlock">
                                    <span className="icon">
                                        <Icons name="appAlert" />
                                    </span>
                                    <h3>Restaurant software and app development</h3>
                                    <p>
                                        Our restaurant development team architects a high-quality digital product for your organization based on the initial feedback.

                                    </p>
                                </div>

                                <div className="featureBlock">
                                    <span className="icon">
                                        <Icons name="appAlert" />
                                    </span>
                                    <h3>Quality assurance</h3>
                                    <p>
                                        Our developers carefully test every product to ensure client satisfaction and excellent user experience.
                                    </p>
                                </div>


                                <div className="featureBlock">
                                    <span className="icon">
                                        <Icons name="appAlert" />
                                    </span>
                                    <h3>Deployment</h3>
                                    <p>
                                        We follow the standard protocols while deploying software and business mobile apps on various platforms
                                        where they are easily accessible to the potential audience.
                                    </p>
                                </div>

                                <div className="featureBlock">
                                    <span className="icon">
                                        <Icons name="appAlert" />
                                    </span>
                                    <h3>Support and maintenance</h3>
                                    <p>
                                        All digital solutions require improvement with time. We support our clients by offering post maintenance services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="imgSec">
                    <img src={restaurant} alt="image" />
                </div>
            </section>
            <section>
                <h1>Frequently asked questions</h1>
                <details className="faq-accordian">
                    <summary className="faq-accordian-head">What are some food business startup ideas for the restaurant industry?</summary>
                    <div className="faq-accordian-body">Some of the popular food business startup ideas are:
                        Food truck apps
                        Cloud kitchen apps
                        Quick service restaurant apps
                        Pop-up restaurant apps
                        Leftover food supply apps
                        Food planner app</div>
                </details>
                <details className="faq-accordian">
                    <summary className="faq-accordian-head">How much does it cost to create a food delivery app?</summary>
                    <div className="faq-accordian-body">
                        Depending on the features you are looking to add in your on-demand food delivery mobile app and the resources that it would require to get your app transformed from its ideal stage to the launch phase, the cost of developing a food-delivery app would come out to somewhere around $30,000 to $40,000 or more. For a more accurate estimation, you can reach out to our experts.</div>
                </details>
                <details className="faq-accordian">
                    <summary className="faq-accordian-head">How to select the best eCommerce application development services company for your project?</summary>
                    <div className="faq-accordian-body">To select the best eCommerce application development services company, one should check the shortlisted company’s portfolio, its testimonials, and its ratings on various platforms such as Clutch. Upon satisfactory evaluation of all of the above,
                        one could be in a position to select the best eCommerce app development company.</div>
                </details>
                <details className="faq-accordian">
                    <summary className="faq-accordian-head">How long does it take to develop an app for a restaurant?</summary>
                    <div className="faq-accordian-body">It's nearly impossible to accurately tell the time period until the initial release is ready to enter the market. Even if you have a clear idea of what your restaurant app will do and whom it will entertain, there are various other factors such as development platform, restaurant app complexity, restaurant mobile app features, target audience, development team size etc. that directly impact those timeline.

                    </div>
                </details>
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
