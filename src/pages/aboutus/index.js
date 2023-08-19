import React,{useEffect} from "react";
import Header from "../../components/Header/Header";
import companyaboutimg from "../../assets/images/companyabout.png";
import Footer from "../../components/Footer/Footer";
import "../about.scss";
import IconExpert from "../../components/IconExpert/IconExpert";
import IconMission from "../../components/IconMission/IconMission";
import IconVision from "../../components/IconVision/IconVision";
import lowCost from "../../assets/images/SmoothandEffortlessDelivery.svg";
import pioneerSolution from "../../assets/images/pioneer-solution.svg";
import relationship from "../../assets/images/relationship.svg";
import delivery from "../../assets/images/target.svg";
import Popup from "../../components/Popup/Modal";

export default function Aboutus() {
  useEffect(()=>{
    typeof window!="undefined" && window.scrollTo(0,0);
    },[]);
  return (
    <>
      <Header />
      <Popup/>
      <section className="service-hero-section">
        <div className="contentWidth">
          <div className="service-hero-content ">
            <h1>Ideate. Innovate. Create. Your Tech Solutions Experts</h1>
            <p>
              With our ‘Get Things Done’ philosophy, entrust your app or web
              project to us. We excel in tackling complexities, providing
              optimal solutions, and delivering within agreed timelines
            </p>
          </div>
        </div>
      </section>
      <section className="our-company-about">
        <div className="contentWidth">
          <div className="company-description">
            <div className="sectionHeading">
              <h2>About iCode Labs</h2>
              <span className="line">&nbsp;</span>
            </div>
            <p>
              iCode Labs Solutions is a leading digital solutions provider
              specializing in Web & Custom Software Development, Mobile App
              Development (iOS & Android), Marketplace Development, UI/UX
              Design, Sharetribe Flex, and Digital Marketing services.
            </p>

            <p>
              Our team of skilled professionals is dedicated to delivering
              high-quality digital design and development work for businesses of
              all sizes and budgets. With a focus on adaptation and growth, we
              understand the challenges small businesses face and offer tailored
              solutions to help them succeed in the online marketplace.
            </p>
            <p>
              Our expertise combines branding, graphic design, website, mobile
              app design and development, and online/offline marketing
              strategies to help our clients attract and engage customers for
              successful business growth.
            </p>
          </div>
          <div className="company-images">
            <img src={companyaboutimg} alt="St Logo" />
          </div>
        </div>
      </section>
      <section className="ourMissionSec">
        <div className="contentWidth">
          <div className="join-our-about">
            <span className="join-icon">
              <IconExpert className="iconExpert" />
            </span>
            <div className="sectionHeading">
              <h5> Our Area Of Expertise</h5>
              <span className="line">&nbsp;</span>
            </div>
            <p>
              Our process begins with attentive listening, and understanding
              your issues, requirements, challenges, and objectives. We then
              delve into comprehending your business, market sector, and
              competitors, combining this information with our technical
              expertise and research. This approach enables us to deliver
              optimal solutions with maximum efficiency and cost-effectiveness.
            </p>
          </div>

          <div className="join-our-about">
            <span className="join-icon">
              <IconMission />
            </span>
            <div className="sectionHeading">
              <h5> Our Mission</h5>
              <span className="line">&nbsp;</span>
            </div>
            <p>
              Our client-centric solutions prioritize maximum productivity with
              minimal resources, upholding service delivery principles.
              Embodying our motto, 'Build Apps Driven By Innovation,' we strive
              to implement result-oriented product design and creation
              strategies, ensuring impactful and efficient outcomes.
            </p>
          </div>

          <div className="join-our-about">
            <span className="join-icon">
              <IconVision className="iconVision" />
            </span>
            <div className="sectionHeading">
              <h5> Our Vision</h5>
              <span className="line">&nbsp;</span>
            </div>
            <p>
              Our custom software development company firmly believes that
              integrating mobile technology and digitizing processes for
              individuals and businesses can significantly simplify their lives,
              allowing them to focus more on their core business functions.
            </p>
          </div>
        </div>
      </section>

      <section className="how-do-we-do  ourStrength">
        <div className="inner-timeline-box contentWidth">
          <div className="timeline-heading">
            {" "}
            <div className="sectionHeading ">
              <h1 className="choose-heading">Our Core Strengths</h1>
              <span className="line">&nbsp;</span>
            </div>
            <p className="choose-description">
              At iCode Laps, our foundation is built by passionate individuals
              who are both dreamers and doers. Guided by a core set of values,
              everything we accomplish is a testament to the dedication and
              commitment of our exceptional team. Here are our core values that
              describe who we are:
            </p>
          </div>
        </div>

        <div className="our-approach ourCoreStrength">
          <div className="contentWidth">
            <div className="company-approach-card">
              <div className="company-approach-box">
                <a href="/ourapproach">
                  <div className="approach-logo">
                    <img src={lowCost} alt="St Logo" />
                  </div>
                  <div className="apporoach-description">
                    <div className="approach-heading">
                      Smooth and Effortless Delivery
                    </div>
                    <div className="approach-subheading">
                      We prioritize exceptional project delivery, providing
                      constant status updates, scope control, and active
                      customer engagement.{" "}
                    </div>
                  </div>
                </a>
              </div>
              <div className="company-approach-box">
                <div className="approach-logo">
                  <img src={pioneerSolution} alt="St Logo" />
                </div>
                <div className="apporoach-description">
                  <div className="approach-heading">
                    Pioneering Solutions Provider
                  </div>
                  <div className="approach-subheading">
                    {" "}
                    Delivering projects with innovation at the core, we provide
                    tailor-made solutions that embrace the latest technology.
                  </div>
                </div>
              </div>
              <div className="company-approach-box">
                <div className="approach-logo">
                  <img src={relationship} alt="St Logo" />
                </div>
                <div className="apporoach-description">
                  <div className="approach-heading">
                    Building Lasting Client Relationships{" "}
                  </div>
                  <div className="approach-subheading">
                    Whether handling a single job or a portfolio of projects,
                    our aim is to forge enduring client relationships with a
                    supportive network.
                  </div>
                </div>
              </div>
              <div className="company-approach-box">
                <div className="approach-logo">
                  <img src={delivery} alt="St Logo" />
                </div>
                <div className="apporoach-description">
                  <div className="approach-heading">
                    Customer-Centric Delivery Approach
                  </div>
                  <div className="approach-subheading">
                    We tailor each project to meet our client's unique goals,
                    ensuring customer satisfaction remains at the heart of our
                    delivery process.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
