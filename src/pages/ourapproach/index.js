import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import ButtonBox from "../../components/button";
import "../ourApproch.scss";
import deliveryImage from "../../assets/images/delivery-image.png";
import Slider from "react-slick";
import tabslidefirst from "../../assets/images/tabslide1.png";
import tabslidetwo from "../../assets/images/tabslide2.png";
import tabslidethree from "../../assets/images/tabslide3.png";
import tabslidefour from "../../assets/images/tabslide4.png";
import tabslidefive from "../../assets/images/tabslide5.png";
import tabslidesix from "../../assets/images/tabslide6.png";
import ExploreAnalyze from "../../exploreanalyze";
import EstimateCard from "../../components/Cards/estimatecard";
import Footer from "../../components/Footer/Footer";

export default function OurApproach() {
  const sliderRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleOnClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };
  const analyzelist = [
    {
      slideHeading: "Explore & Analyze",
      slideSubheading:
        "It starts with idea exploration with the stakeholders leading to deep dive into the requirements. The project manager leading the team collaborates with the stakeholder and team members to refine and prioritise the product backlog. The key take away from this are:",
      img: tabslidefirst,
      slidechild: [
        "Scope definitions",
        "High level user stories",
        "Scrum team and sprints defined",
        "Setting up priorities (MoSCoW)",
        "Validation of assumptions",
      ],
    },
    {
      slideHeading: "Design",
      slideSubheading:
        "User interface design along with the branding guidelines, crafting the elements, and integrating them into a click-through prototype with a clear focus on user experience. Stakeholders reviews & gives acceptance screen by screen. The key take away from this are:",
      img: tabslidetwo,
      slidechild: [
        "Click through prototype",
        "User interface design",
        "team & stackholders have validated the design",
        "Branding / Interface design documents",
      ],
    },
    {
      slideHeading: "Engineer",
      slideSubheading:
        "Starting with the system design and architectural setup, the team starts coding and delivering the sprint backlog. The scrum team collaborates within the sprint and runs the design, code, and test cycle within the sprint. Sprint plan meetings, Daily standup's & review meetings are done as part of the process. The key take away from this are:",
      img: tabslidethree,
      slidechild: [
        "System design document",
        "Deliverable product",
        "Refined product backlog",
        "Sprint delivery report",
        "Source Code Repository",
        "API documentions",
      ],
    },
    {
      slideHeading: "Validate & Release",
      slideSubheading:
        "Inspect and Adapt are the two key focus at this stage. User acceptance testing and validation of acceptance tests with stakeholders to release the sprint deliverables. The key takeaway are:",
      img: tabslidefour,
      slidechild: [
        "Update the product backlog",
        "Refined product backlog",
        "Validated product release",
      ],
    },
    {
      slideHeading: "Iterate & Scale",
      slideSubheading:
        "Re-Run the cycle with the refined product backlog and updated priorities.",
      img: tabslidefive,
      slidechild: ["Refined product backlog", "Validated product release"],
    },
    {
      slideHeading: "Go live & Maintain",
      slideSubheading:
        "Once all the sprint iterations are completed and the expected product is released. The support system starts with agreed SLA. The system is ready to go live, the takeaways are::",
      img: tabslidesix,
      slidechild: [
        "Update the product backlog",
        "Refined product backlog",
        "Validated product release",
      ],
    },
  ];
  const tabheading = [
    { tabname: "Explore & Analyze" },
    { tabname: "Design" },
    { tabname: "Engineer" },
    { tabname: "Validate & Release" },
    { tabname: "Iterate & Scale" },
    { tabname: "Go live & Maintain" },
  ];
  const technologyslide = {
    dots: false,
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    autoplay: false,
  };

  return (
    <>
      <div className="work-approach-wrap">
        <Header />
        <div className="approach-management">
          <section className="cover-background">
            <div className="contentWidth">
              <h1>
                Our project management & development strategy. Agile,
                transparent & customer-centric
              </h1>
              <p>
                Our absolute focus is on your product and to bring the best we
                ensure the culture of communication, collaboration &
                transparency.
              </p>
              <div className="selectCategory">
                <div className="hiring-buttons">
                  <ButtonBox
                    buttonname="Book free consutation"
                    className="hire-dev-button"
                  />
                  <ButtonBox
                    buttonname="Hire developer"
                    className="hire-dev-button"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="deliver-qualitywork">
            <div className="contentWidth">
              <div className="deliver-description">
                <h1>Transparency, Inspection & Adaptation</h1>
                <p>
                  Agile scrum theory puts strong focus on the three pillars{" "}
                  <strong>Transparency, Inspection & Adaptation</strong>. We
                  follow agile principles and the industry best practices to
                  deliver a predictable high quality & on-time result.
                </p>
              </div>
              <div className="deliver-image-section">
                <img src={deliveryImage} alt="st logo" />
              </div>
            </div>
          </section>
          <section className="explore-box-wrap">
            <div className="contentWidth">
              <div className="explore-tab-viewbox">
                <div className="tabbutton">
                  {tabheading?.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => {
                        handleOnClick(i);
                      }}
                      className={activeIndex === i ? "active" : ""}
                    >
                      {item.tabname}
                    </button>
                  ))}
                </div>

                <div className="analye-card-wrap">
                  <div className="card-background-wrap">
                    <Slider
                      {...technologyslide}
                      ref={sliderRef}
                      afterChange={setActiveIndex}
                    >
                      {analyzelist?.map((item, i) => (
                        <ExploreAnalyze
                          key={i}
                          slideHeading={item.slideHeading}
                          slideSubheading={item.slideSubheading}
                          img={item.img}
                          slidechild={item.slidechild}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="contentWidth">
            <section className="estimate-section-wrap">
              <EstimateCard />
            </section>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
