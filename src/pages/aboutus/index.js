import React from 'react'
import covercode from '../../assets/images/cover-code.png';
import ButtonBox from '../../components/button';
import Header from '../../components/Header/Header';
import companyaboutimg from '../../assets/images/companyabout.png';
import WhyChooseCard from "../../components/Cards/whychoosecard";
import '../../assets/css/custom.css';
import Footer from '../../components/Footer/Footer'
import Slider from "react-slick";
import { graphql } from 'gatsby';



export default function Aboutus({ data }) {
    const choosecard = data?.allStrapiExperiencesProcesse?.nodes




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

    return (
        <div>
            <Header />
            <section>
                <div className="cover-background">
                    <div className="cover-logo-box">
                        <img src={covercode} alt="St Logo" />
                    </div>
                    <div className="cover-heading-text">
                        <h1>Transforming Bussiness With Innovation </h1>
                    </div>
                    <div className="subtext-box">
                        <p className="cover-sub-text">Commited to deliver quality & performance oriented apps.</p>
                    </div>
                    {/* <div className="cover-stack-heading">
            <img src={meanstack} alt="St Logo" />
            <span className="cover-stack">Mean stack development</span>
          </div> */}
                    {/* <div className="booking-button">
            <ButtonBox
              type="button"
              buttonname="Book a free consultation"
            />
          </div> */}
                </div>
            </section>
            <section>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>Who we are?</h3>
                    </div>
                    <div className='col-md-8'>
                        <p>
                            We are believers of change!
                            A change driven by technology and innovation. We help businesses and individuals in adapting as well as adopting digital transformation.
                            Our aim is to change people’s lives and improve businesses with our progressive and innovative technology solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='row'>
                    <div className='col-md-4'>
                        <h3>What We Do Best</h3>
                    </div>
                    <div className='col-md-8'>
                        <p>
                            We start by listening to the issues, requirements, challenges and objectives.
                            The process continues with an effort to understand the business,
                            market sector and competitors to develop information which is combined with our technical knowledge,
                            expertise and research in order to provide the best solution at the lowest cost.
                        </p>
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
                        <h1 className="choose-heading">Work Life</h1>
                        <h1 className="choose-subheading"> At Its Best</h1>
                        {/* <p className="choose-description">
              startups & smaller organizations struggle to hire experienced professionals due to hefty agency rates.
              Less experienced developers can code but limited to provide a value proposition.
              Icode does this for you at affordable rates.
            </p> */}
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
            <section>
                <div className='row'>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-md-8'>
                        <h1>Our nested feedback loop ensures
                            your projects are dominated by
                            change that benefits</h1>
                            <p>In order to respond quickly to change, our process includes the following feedback loops. 
                                These feedback loops operate on different time scales to facilitate everything from tiny adjustments to wholesale 
                                changes in a project's direction.</p>
                    </div>
                    
                    <div className='col-md-2'>

                    </div>

                </div>

                <div className='row'>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-md-8'>
                        <div className='row'>
                        <div className='col-md-3'>
                            <h3>Feedback Loop</h3>
                        </div>
                        <div className='col-md-3'>
                            <h3>Frequency</h3>
                        </div>
                        <div className='col-md-3'>
                            <h3>Participant</h3>
                        </div>
                        <div className='col-md-3'>
                            <h3>Length</h3>
                        </div>
                        </div>
                         
                    </div>
                    <div className='col-md-2'>

                    </div>

                </div>
            </section>

            <section style={{padding: 94}}>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-4'>
                        <h1>Our Enterprise Software Development Project Flow</h1>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-5'>
                          <p>We offer the best practices and full cycle enterprise software development solutions in a structured and systematic way.
                             We start with deep analysis of business requirements and nurture the relationship with post-launch support and maintenance.</p>
                    </div>
                    <div className='col-md-1'></div>
                </div>
                <br/>
                <br/>
                <div className='row'>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-4'>
                        <h1>Planning & Research</h1>
                        <br/>
                        <p>We start by collecting all the relevant information and defining the scope of the project to develop an
                             enterprise software solution that is a perfect fit to your business needs.</p>
                    </div>
                    <div className='col-md-2'></div>
                   <div className='col-md-4'>
                    <h1>Design & Development</h1>
                    <br/>
                    <p>Our team of enterprise solution experts prepare the documents as per the specified requirements and define the overall 
                        system architecture and technology stack. 
                        Our enterprise software developers then start the development process 
                        by using the chosen coding languages and methodologies.</p>
                   </div>
                </div>

                <div className='row'>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-4'>
                        <h1>Testing & Deployment</h1>
                        <br/>
                        <p>Our team of software testers perform unit testing with the aim of finding and fixing bugs and defects. 
                            The final software is then released and checked for deployment issues, if any.</p>
                    </div>
                    <div className='col-md-2'></div>
                   <div className='col-md-4'>
                    <h1>Maintenance & Support</h1>
                    <br/>
                    <p>As per the terms of the agreement, we offer corrective,
                         perfective and adaptive maintenance services to ensure the enterprise
                          system continues to perform to its full capacity.</p>
                   </div>
                </div>
            </section>


            <section>
                <div className="about-client-box">
                    <div className="about-client">
                        <h1 className="client-heading">Our Achievements</h1>
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
}

`