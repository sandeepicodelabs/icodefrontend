import React from 'react'
import covercode from '../../assets/images/cover-code.png';
import ButtonBox from '../../components/button';
import Header from '../../components/Header/Header';
import companyaboutimg from '../../assets/images/companyabout.png';
import WhyChooseCard from "../../components/Cards/whychoosecard";
import Footer from '../../components/Footer/Footer'
import Slider from "react-slick";
import { graphql } from 'gatsby';
import TechnologyCard from "../../components/Cards/technologycard";
import CompanyApproachCard from "../../components/Cards/companyapproachecard";
import './style.css'
import '../../assets/css/custom.css';

export default function Aboutus({ data }) {
    const choosecard = data?.allStrapiExperiencesProcesse?.nodes
    const technologyPartners = data?.allStrapiTechnologyPartner?.nodes
    const ourApproaches = data?.allStrapiOurapproache.edges


    const settings = {
        dots: false,
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    initialSlide: 3,
                    centerMode: true,
                }
            },
        ]

    };
    const technologyslide = {
        dots: false,
        centerMode: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
            {
                breakpoint: 460,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
        ]
    };

    return (
        <div>
            <Header />
            <section>
                <div className="cover-background">
                    {/* <div className="cover-logo-box">
                        <img src={covercode} alt="St Logo" />
                    </div> */}
                    <div className="cover-heading-text">
                        <h1>Ideate. Innovate. Create. Your Tech Solutions Experts</h1>
                    </div>
                    <div className="subtext-box">
                        <p className="cover-sub-text">
                            With our ‘Get Things Done’ philosophy, entrust your app or web project to us.
                            We excel in tackling complexities,
                            providing optimal solutions, and delivering within agreed timelines</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="our-company-about">
                    <div className="company-description">
                        {/* <span className="text-bold">About Icode Labs</span> <br /> */}
                        <div className='row'>
                            <h1>About iCode Labs</h1>
                        </div>
                        <p>  iCode Labs Solutions is a leading digital solutions provider specializing in Web & Custom Software Development,
                            Mobile App Development (iOS & Android), Marketplace Development, UI/UX Design, Sharetribe Flex, and Digital Marketing services.
                        </p>

                        <p>
                            Our team of skilled professionals is dedicated to delivering high-quality digital design and development work for businesses of all sizes and budgets.
                            With a focus on adaptation and growth, we understand the challenges small businesses face and offer tailored solutions to help them succeed in the online marketplace.
                        </p>
                        <p>
                            Our expertise combines branding, graphic design, website, mobile app design and development,
                            and online/offline marketing strategies to help our clients attract and engage customers for successful business growth.
                        </p>

                    </div>
                    <div className="company-images">
                        <img src={companyaboutimg} alt="St Logo" />
                    </div>
                </div>
            </section>
            <section>

                <div className='col-md-12'>
                    <div className='row'>
                        <div className='col-md-4'>

                            <div className="join-our-about">
                                <span>
                                </span>
                                <h5> Our Area Of Expertise</h5>
                                <p>
                                    Our process begins with attentive listening, and understanding your issues, requirements, challenges,
                                    and objectives. We then delve into comprehending your business, market sector, and competitors,
                                    combining this information with our technical expertise and research.
                                    This approach enables us to deliver optimal solutions with maximum efficiency and cost-effectiveness.
                                </p>


                            </div>
                        </div>

                        <div className='col-md-4'>

                            <div className="join-our-about">
                                <span>
                                </span>
                                <h5> Our Mission</h5>
                                <p>
                                    Our client-centric solutions prioritize maximum productivity with minimal resources, upholding service delivery
                                    principles. Embodying our motto, 'Build Apps Driven By Innovation,' we strive to implement result-oriented product
                                    design and creation strategies, ensuring impactful and efficient outcomes.

                                </p>

                            </div>
                        </div>

                        <div className='col-md-4'>

                            <div className="join-our-about">
                                <span>
                                </span>
                                <h5> Our Vision</h5>
                                <p>
                                    Our custom software development company firmly believes that integrating mobile technology and
                                    digitizing processes for individuals and businesses can significantly simplify their lives,
                                    allowing them to focus more on their core business functions.

                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id="process">
                <div className="how-do-we-do">
                    <div className="how-do-we-do">
                        <div className="inner-timeline-box">
                            <div className="timeline-heading">
                                <h1 className="choose-heading">Our Core Strengths</h1>
                                <p className="choose-description">
                                    At Icode Laps, our foundation is built by passionate individuals who are both dreamers and doers.
                                    Guided by a core set of values, everything we accomplish is a testament to the dedication and commitment of our
                                    exceptional team. Here are our core values that describe who we are:
                                </p>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='row'>
                                    <div className="our-approach">
                                        <div className="company-approach-card">
                                            <div className="company-approach-box">
                                                <a href="/ourapproach">
                                                    <div className="approach-logo">
                                                        {/* <img src={img} alt="St Logo" /> */}
                                                    </div>
                                                    <div className="apporoach-description">
                                                        <div className="approach-heading">Lower Costs
                                                        </div>
                                                        <div className="approach-subheading">One major benefit of hiring Android developers is that they can
                                                            leverage the powerful Software Development Kit (SDK) to build apps more efficiently.
                                                            This not only reduces development time but also minimizes licensing and overall development costs. </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className='col-md-3'>
                                <div className='row'>
                                    <div className="our-approach">
                                        <div className="company-approach-card">
                                            <div className="company-approach-box">
                                                <div className="approach-logo">
                                                    {/* <img src={img} alt="St Logo" /> */}
                                                </div>
                                                <div className="apporoach-description">
                                                    <div className="approach-heading">Pioneering Solutions Provider</div>
                                                    <div className="approach-subheading"> Delivering projects with innovation at the core,
                                                        we provide tailor-made solutions that embrace the latest technology.

                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='col-md-3'>
                                <div className='row'>
                                    <div className="our-approach">
                                        <div className="company-approach-card">
                                            <div className="company-approach-box">
                                                <div className="approach-logo">
                                                    {/* <img src={img} alt="St Logo" /> */}
                                                </div>
                                                <div className="apporoach-description">
                                                    <div className="approach-heading">Building Lasting Client Relationships </div>
                                                    <div className="approach-subheading">
                                                        Whether handling a single job or a portfolio of projects,
                                                        our aim is to forge enduring client relationships with a supportive network.

                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='col-md-3'>
                                <div className='row'>
                                    <div className="our-approach">
                                        <div className="company-approach-card">
                                            <div className="company-approach-box">
                                                <div className="approach-logo">
                                                    {/* <img src={img} alt="St Logo" /> */}
                                                </div>
                                                <div className="apporoach-description">
                                                    <div className="approach-heading">Customer-Centric Delivery Approach</div>
                                                    <div className="approach-subheading">We tailor each project to meet our client's unique goals,
                                                        ensuring customer satisfaction remains at the heart of our delivery process.

                                                    </div>
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}



export const query = graphql`
query MyQuery{ 
    allStrapiExperiencesProcesse {
        nodes {
          title
          icon {
            id
            url
          }
        }
      }

      allStrapiTechnologyPartner {
        nodes {
          Title
          Description {
            data {
              Description
            }
          }
          Image {
            url
          }
        }
      }

      allStrapiOurapproache {
        edges {
          node {
            Title
            Description {
              data {
                Description
              }
            }
            Image {
              url
            }
          }
        }
      }
}

`