import React, { useEffect } from "react";
import emarketplaceDetailsimg from "../../assets/images/e-commerce-image3.png";
import IconCheckmark from "../../components/IconCheckmark/IconCheckmark";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Popup from "../../components/Popup/Modal";
import { Link } from "gatsby";
import Icons from "../../components/Icons/Icons";
import ButtonBox from "../../components/button";
import Counter from "./counter";
import "../../components/FAQ/faq.scss"
import FAQ from "../../components/FAQ/FAQ";

function Ecommerce() {
  useEffect(() => {
    typeof window != "undefined" && window.scrollTo(0, 0);
  }, []);


  const faqs = [
    {
      question: "How much does it cost to develop an eCommerce app? ",
      answer: "Although it’s difficult to provide an estimate but on an average, the cost of developing an eCommerce app ranges between $50,000 to $150,000 depending on its overall complexity related to features, functionalities, and tech stack used. Get in touch with our team of experts to get an exact estimate for your eCommerce app development project"
    },
    {
      question: "How does Appinventiv build eCommerce mobile apps? ",
      answer: "We have a well-defined process for building eCommerce mobile apps that starts with research and market analysis followed by ideation and design process. Upon successful completion of these steps, we move on to building the app. After thoroughly testing the app from various standpoints,we deploy the app on stores and update the app based on the feedback."
    },
    {
      question: "How to select the best eCommerce application company for your project? ",
      answer: "To select the best eCommerce application development services company, one should check the shortlisted company’s portfolio, its testimonials, and its ratings on various platforms such as Clutch. Upon satisfactory evaluation of all of the above,one could be in a position to select the best eCommerce app development company."
    },
    {
      question: "what kind of eCommerce projects has Appinventiv done?",
      answer: "We have worked with major eCommerce brands from Adidas to Edamama. We have worked with companies of all sizes and have extensive expertise in delivering top-quality eCommerce solutions."
    }

  ]

  return (
    <>
      <Header />
      <Popup />
      <section className="marketplace-header">
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
            <h2>We Develop Everything eCommerce</h2>
            <p>
              We develop a unified digital experience having a robust backend and frontend that lowers abandonment
              rates and boosts conversions, loyalty, and customer satisfaction.
            </p>
            <div className="features">
              <div className="featureBlock">
                <span className="icon">
                  {" "}
                  <Icons name="socialNetworking" />
                </span>
                <h3>Microservices-based eCommerce web and app development</h3>
                <p>
                  Offering an omnichannel multi-platform experience, we develop intuitive user journeys that integrate engagement into every element
                  and promote conversions with our eCommerce development services.
                  We integrate the cart, the gateway, and the store with the APIs as we develop.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="payment" />
                </span>
                <h3>Backend, frontend, & CRM development</h3>
                <p>
                  We also develop eCommerce stores and apps that elevate the shopping experience for customers across the globe by offering a robust backend architecture
                  (most probably on the cloud) and an intuitive frontend that promotes curiosity, engagement, and retention.
                  We also develop CRM software to scale your marketing and sales initiatives.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="appAlert" />
                </span>
                <h3>Payment gateways</h3>
                <p>
                  We develop custom payment gateways that we integrate into your marketplace app or website. We develop PCI-DSS complaint portals
                  safeguarding the data of your consumers.
                  We develop user interfaces that promote checkout.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="geoLocation" />
                </span>
                <h3>PWA eCommerce</h3>
                <p>
                  We design and develop intricate progressive web apps that redefine the shopping experience for your customers without ever having to download an app.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="analytics" />
                </span>
                <h3>Marketplaces</h3>
                <p>
                  We design architectures that can support numerous buyers and sellers on a single platform operationalizing the free market for as many businesses as possible.
                  We integrate all this into a functional and thoughtful marketplace portal on the web or mobile.
                </p>
              </div>

              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="socialNetworking" />
                </span>
                <h3>Aggregator portals</h3>
                <p>
                  Being a leading custom eCommerce software development company we build aggregator apps and portals that you can use to list
                  vendors of a particular product or service in an area connecting the consumers and service providers while you get a fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="globalMarket">
        <div className="contentWidth">
          <h1>A global market valued at USD 17.4 billion in 2022.</h1>
          <p>
            Learn more about eCommerce - the most profitable
            subset of the On Demand Industry.
          </p>
          <ButtonBox buttonname="Download" className="btn" />
        </div>
      </section>{" "}
      <section className="marketplaceDetailsPage">
        <div className="contentWidth">
          <div className="contentSec">
            <h1>A time-tested (yet flexible) development process our services include</h1>
            <h3>
              We combine our technical expertise with our client’s innovative ideas to deliver the best possible mobile
              commerce app development solutions
            </h3>

            <div className="solutionSec">
              <div className="features">
                <div className="featureBlock">
                  <span className="icon">
                    {" "}
                    <Icons name="socialNetworking" />
                  </span>
                  <h3>Discovery</h3>
                  <p>
                    Being a top-rated eCommerce application development company, our development
                    process begins with discovering the market fit of your eCommerce app idea.
                    We thoughtfully study the landscape for similar offerings and develop the
                    best technology to satisfy your specific requirements.
                  </p>
                </div>
                <div className="featureBlock">
                  <span className="icon">
                    {" "}
                    <Icons name="socialNetworking" />
                  </span>
                  <h3>Ideation</h3>
                  <p>
                    The next step in our online shopping app development process has us
                    ideating  and designing the solution, an eCommerce app for example. In this step we
                    zero in on the best possible elements to cater to
                    your audience and design thoughtful
                    user journeys that increase conversions.
                  </p>
                </div>
                <div className="featureBlock">
                  <span className="icon paymentIcon">
                    <Icons name="payment" />
                  </span>
                  <h3>Development and testing</h3>
                  <p>
                    In this stage of the development process we develop the apps, create the
                    necessary components and APIs and seamlessly connect the parts together that
                    come alive as a beautiful and engaging eCommerce app.
                  </p>
                </div>
                <div className="featureBlock">
                  <span className="icon">
                    <Icons name="appAlert" />
                  </span>
                  <h3>Deployment and maintenance</h3>
                  <p>
                    As part of our eCommerce software development services, we deploy the app or
                    software on its intended platform and based on the feedback from focus groups
                    and general users alike, we update and maintain the app for the best result.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="why-we-hire">
        <div className="contentWidth our-team-wrap">
          <div className="our-tech-team">
            <h1>Advanced technologies we employ in our eCommerce app development services</h1>
            <p className="choose-description">
              Being a top eCommerce application development company, we use advanced technologies to unlock potential revenue streams for our
              clients while maximizing the business prospect of their app or product.
              These advanced technologies have propelled us to become the preferred custom eCommerce software development company.
            </p>
            <div className="join-expertises">
              <div className="join-our-teams">
                <span className="icon">
                  {" "}
                  <Icons name="aiicon" />
                </span>
                <h3 className="ecommerce-heading">AI/ML</h3>
                <p className="ecommerce-description">Being the foremost eCommerce mobile app development company, we build advanced AI/ML algorithms that automate processes and offer analytics, insights,
                  and visibility into customer behavior from a single dashboard.
                </p>
              </div>
              <div className="join-our-teams">
                <span className="icon">
                  {" "}
                  <Icons name="blockchain" />
                </span>
                <h3 className="ecommerce-heading">Blockchain</h3>
                <p className="ecommerce-description">Having privacy and security built into the framework, blockchain offers capabilities to build systems that are inherently secure,
                  public, and decentralized offering the control back in the hands of the users.
                </p>
              </div>
              <div className="join-our-teams">
                <span className="icon">
                  {" "}
                  <Icons name="metaverse" />
                </span>
                <h3 className="ecommerce-heading">Metaverse</h3>
                <p className="ecommerce-description">As a top-rated eCommerce mobile app development company
                  we develop immersive metaverse 3d spaces as part of our services and elevate the experience for your users manifold.
                </p>
              </div>

              <div className="join-our-teams">
                <span className="icon">
                  {" "}
                  <Icons name="analysis" />
                </span>
                <h3 className="ecommerce-heading">Data analytics</h3>
                <p className="ecommerce-description">We provide advanced data analytics services offering immense value to your eCommerce business.
                  We develop prediction engines based on customers’ shopping data and other features enabled by advanced analytics.
                </p>
              </div>
              <div className="join-our-teams">
                <span className="icon">
                  {" "}
                  <Icons name="cloud" />
                </span>
                <h3 className="ecommerce-heading">Cloud computing</h3>
                <p className="ecommerce-description">Since the days of on-prem servers are over, we offer top-of-the-line cloud services including cloud migration, optimization,
                  and cloud-managed services to offer immense value to your data storage requirements.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="faq-content-width">
        <div class="faq-content">
          <h1 className="faq-top">Frequently asked questions</h1>
          <div className="faq-accordian-sec">

            {faqs.map((item, i) => (
              <FAQ
                question={item.question}
                answer={item.answer}
              />
            ))}


            {/* <details className="faq-accordian">
            <summary className="faq-accordian-head">How much does it cost to develop an eCommerce app?</summary>
            <div className="faq-accordian-body">Although it’s difficult to provide an estimate but on an average, the cost of developing an eCommerce app ranges between $50,000 to $150,000 depending on its overall complexity related to features, functionalities, and tech stack used.
              Get in touch with our team of experts to get an exact estimate for your eCommerce app development project.</div>
          </details>
          <details className="faq-accordian">
            <summary className="faq-accordian-head">How does Appinventiv build eCommerce mobile apps?</summary>
            <div className="faq-accordian-body">
              We have a well-defined process for building eCommerce mobile apps that starts with research and market analysis followed by ideation and design process. Upon successful completion of these steps, we move on to building the app. After thoroughly testing the app from various standpoints,
              we deploy the app on stores and update the app based on the feedback.</div>
          </details>
          <details className="faq-accordian">
            <summary className="faq-accordian-head">How to select the best eCommerce application development services company for your project?</summary>
            <div className="faq-accordian-body">To select the best eCommerce application development services company, one should check the shortlisted company’s portfolio, its testimonials, and its ratings on various platforms such as Clutch. Upon satisfactory evaluation of all of the above,
              one could be in a position to select the best eCommerce app development company.</div>
          </details>
          <details className="faq-accordian">
            <summary className="faq-accordian-head">As a mobile shopping app development company what kind of eCommerce projects has Appinventiv done?</summary>
            <div className="faq-accordian-body">We have worked with major eCommerce brands from Adidas to Edamama. We have worked with companies of all sizes and have extensive expertise in delivering top-quality eCommerce solutions.</div>
          </details> */}
          </div>
        </div>
      </section>

      <section className="counterSection">
        <div className="contentWidth">
          <div className="counterblock">
            <Counter number={820} title="Ecommerce Experts" />
          </div>
          <div className="counterblock">
            <Counter number={8} title="Years Developing Technology" />
          </div>
          <div className="counterblock">
            <Counter number={95} title="Clients Stay With Us" />
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Ecommerce;
