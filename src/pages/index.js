import * as React from "react"
// import Header from "../components/Header/Header"; 
import { graphql } from "gatsby";
import Header from "../components/Header/Header";

//import Creativeteam from '../assets/images/creative-team.png';
//import TeamIdea from '../assets/images/team-idea.png';
//import Teamresult from '../assets/images/teamresult.png';
//import ProjectManage from '../assets/images/project-management.png';
//import ClientSatisfy from '../assets/images/client-satisfy.png';
//import LatestStack from '../assets/images/latest-stack.png';
//import CompleteTranspancy from '../assets/images/complete-transpancy.png';
// ScalableSolution from '../assets/images/scalable-solution.png';

// import TestimonialCard from '../components/testimonialcard';
// import InputBox from '../components/input';
// import userImg from '../../assets/images/user.png';
// import Emailicon from '../../assets/images/email.png';
import ButtonBox from '../components/button';
// import testimonialPicture from '../assets/images/testimonialPic.png';
// import commaimage from '../assets/images/comma.png';
import companyaboutimg from '../assets/images/companyabout.png';
import covercode from '../assets/images/cover-code.png';
import meanstack from '../assets/images/meanstack.png';
// import webimg from '../assets/images/web.png';
// import messageimg from '../assets/images/message.png';
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import WhyChooseCard from "../components/Cards/whychoosecard";
import TechnologyCard from "../components/Cards/technologycard";
import ExpertiseCard from "../components/Cards/expertisecard";
import Slider from "react-slick";
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => { 
  const choosecard = data?.allStrapiExperiencesProcesse?.nodes
  const technologyPartners = data?.allStrapiTechnologyPartner?.nodes
  const expertTech= data?.allStrapiExpertise?.edges
  const process=data?.allStrapiProcess.edges
  //console.log('process', process)
  
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
    infinite: false,
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
          <div className="cover-logo-box">
            <img src={covercode} alt="St Logo" />
          </div>
          <div className="cover-heading-text">
            <h1>We build bespoke mobile & web applications driven by Innovation. </h1>
          </div>
          <div className="subtext-box">
            <p className="cover-sub-text">Commited to deliver quality & performance oriented apps.</p>
          </div>
          <div className="cover-stack-heading">
            <img src={meanstack} alt="St Logo" />
            <span className="cover-stack">Mean stack development</span>
          </div>
          <div className="booking-button">
            <ButtonBox
              type="button"
              buttonname="Book a free consultation"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="trusted-brands">
          <h5>TRUSTED BY 50+ COMPANIES</h5>
          <div className="trusted-brand-box">

            <Slider  {...settings}>
              {/* <GatsbyImage image={image} alt=" "  /> */}

              {/* {image.map((item, key) => ( 
                      <div key={key}>
                    
                      </div>
                      
                        // <Img fluid={item?.url} alt=" " />
                    
                   )) } */}

            </Slider>
          </div>
        </div>
      </section>
      <section>
        <div className="our-company-about">
          <div className="company-description">
            <span className="text-bold">We’re an app development company</span> <br />
            led by seasoned professionals over two decades of experience.
            We architect, design, and develop scalable solutions with industry focus on startups,
            smaller & medium enterprises helping
            them to fulfill end-to-end technology needs at affordable rates.
          </div>
          <div className="company-images">
            <img src={companyaboutimg} alt="St Logo" />
          </div>
        </div>
      </section>

      <section id='about'>
        <div className="why-choose-us">
          <div className="heading-main">
            <h1 className="choose-heading">Why Icode labs?</h1>
            <div className="choose-subheading">Experience matters so do processes</div>
            <p className="choose-description">
              startups & smaller organizations struggle to hire experienced professionals due to hefty agency rates.
              Less experienced developers can code but limited to provide a value proposition.
              Icode does this for you at affordable rates.
            </p>
          </div>
          <div className="choose-card-wrap-box">
            <div className="choose-card-main">

              {choosecard && choosecard.map((item, i) => (
                <WhyChooseCard key={i}
                  subheading={item.title}
                  img={item.icon.url}
                />
              ))}


            </div>
          </div>
        </div>
      </section>


      <section id='service'>
        <div className="tech-partner">
          <div className="partner-content">
            <h1>As a technology partner</h1>
            <p>we can help your business to make a digital success</p>
          </div>
          <div className="partner-slider">
            <Slider {...technologyslide}>
              {technologyPartners && technologyPartners.map((item, i) => (
                <TechnologyCard
                  key={i}
                  technologyheading={item.Title}
                    img={item?.Image?.url}
                  technologydescription={item.Description.data.Description}
                />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      <section id="technologies">
							<div className="our-expertise">
								<h1>We expertise in </h1>
								<p>trending technologies the world is looking at</p>
								<div className="our-expertise-tech">
									{expertTech && expertTech.map((item, i) => (
										// <Link to={"/trendingtechnologies/" + item.node.slug}>
											<ExpertiseCard
												expertisetitle={item.node?.Title}
												img={item.node?.Image.url}
											/>
										// </Link>
									))} 
								</div>
							</div>
						</section>

            <section id="process">
							<div className="how-do-we-do">
								<div className="inner-timeline-box">
									<div className="timeline-heading">
										<h1>How do we do?</h1>
										<p>Process in 4 easy step</p>
									</div>
									<div className="timeline-content">
										<div className="timeline">
											{process && process.map((item, i) => (
												<div className="container-wrap-box steps">
													<div className="content">
														<h3>{item.node?.Title}</h3>
														<p>{item.node?.Description.data.Description}</p>
													</div>
													<div className="date-month-box border-steps">
														<div className="month">step</div>
														<div className="month-date">{i+1}</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
								{/* <div className="our-approach">
									<div className="company-approach-card">
										{ourApproaches && ourApproaches.map((item, i) => (
											<CompanyApproachCard
												approachheading={item.node?.title}
												img={item.node?.image.publicURL} 
												approachsubheading={item.node?.description}
											/>
										))}
									</div>
									<div className="approach-button">
										<ButtonBox
											type="button"
											buttonname="know more about our approach"
											className="approach-button-box"
										/>
									</div>
								</div> */}
							</div>
						</section>




    </div>
  )
};

export default IndexPage;

export const query = graphql`
        query MyQuery {
          allStrapiCompanyLogo {
            edges {
              node {
                logo {
                  url
                }
              }
            }
          }

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

          allStrapiExpertise {
            edges {
              node {
                Title
                Image {
                  url
                }
              }
            }
          }

          allStrapiProcess {
            edges {
              node {
                Title
                Description {
                  data {
                    Description
                  }
                }
              }
            }
          }
          
        }  
      `

