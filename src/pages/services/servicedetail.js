import React from 'react'
import Header from '../../components/Header/Header'
import deliveryImage from '../../assets/images/professional-programmer-working-late-dark-office.png';
import ButtonBox from '../../components/button';
import companyaboutimg from '../../assets/images/companyabout.png';
import './style.css'
import Footer from '../../components/Footer/Footer';
import { graphql } from 'gatsby';
import FAQ from '../../components/FAQ/FAQ';
import mobileImge from '../../assets/images/linedin-lite-post-image.png'
import '../../assets/css/custom.css';
import WhyWeJoinCard from '../../components/Cards/jointeamcard';
import CompanyApproachCard from '../../components/Cards/companyapproachecard'

export default function Servicedetail({ data }) {

    const process = data?.allStrapiProcess?.edges;
    const servicedetail = data?.allStrapiServiceDetail?.edges[0];
    console.log("service", servicedetail)
    return (
        <>
            <div className="project-list-page">
                <Header />
                <div className="project-wrap-box">
                    <section>
                        <div className="project-list-cover">
                            <div className="deliver-qualitywork" style={{ padding: 0 }}>
                                <div className='row'>
                                    <div className="deliver-description">
                                        <h1>{servicedetail?.node?.Title}</h1>
                                        <p>
                                            {servicedetail?.node.Description.data.Description}
                                        </p>
                                    </div>
                                    <div className="deliver-image-section">
                                        <img src={deliveryImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="why-we-hire">
                        <div className="our-team-wrap">
                            <div className="our-tech-team">
                                <h1 >{servicedetail?.node?.DevlopmentTitle}</h1>
                                {/* <div className="choose-subheading"> </div> */}
                                <p className="choose-description">
                                    {servicedetail?.node?.DevelopmentDescription.data.DevelopmentDescription}
                                </p>
                            </div>
                            <div className="join-expertise">
                                {servicedetail && servicedetail.node.Titleservice.map((item, i) => (
                                    <WhyWeJoinCard
                                        key={i}
                                        // img={item.node?.image.publicURL}
                                        teamheading={item?.Servicetitle}
                                        teamdescription={item?.ServiceDescription.data.ServiceDescription}
                                    />
                                ))}

                            </div>

                        </div>
                    </section>

                    <section id="process">
                        <div className="how-do-we-do">
                            <div className="inner-timeline-box">
                                <div className="timeline-heading">
                                    <h1>{servicedetail?.node?.ToolsTitle}</h1>
                                    <p>{servicedetail?.node?.ToolsDescription.data.ToolsDescription}
                                    </p>
                                </div>
                                <div className="timeline-content">
                                    <div className="timeline">
                                        {servicedetail && servicedetail?.node?.ToolService.map((item, i) => (
                                            <div className="container-wrap-box steps">
                                                <div className="content">
                                                    <h3>{item?.toolsTitle}</h3>
                                                    <p>{item?.toolsDescription.data.toolsDescription}</p>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="process">
                        <div className="how-do-we-do">
                            <div className="inner-timeline-box">
                                <div className="timeline-heading">
                                    <h1>{servicedetail?.node?.EnhanceTitle}</h1>
                                    <p>{servicedetail?.node?.EnhanceDescription.data.EnhanceDescription}
                                    </p>
                                </div>
                            </div>
                            <div className="our-approach">
                                <div className="company-approach-card">
                                    {servicedetail && servicedetail?.node.EnhanceService.map((item, i) => (
                                        <CompanyApproachCard
                                            approachheading={item?.ETitle}
                                            // img={item.node?.Image.url}
                                            approachsubheading={item?.EDescription.data.EDescription}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div> 
                    </section> 
                    <section >
                        <div style={{ paddingLeft: 600, paddingBottom: 100 }}>
                            <h1>FAQ Question</h1>
                            <FAQ />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>

        </>

    )
}


export const query = graphql`
query MyQuery {  
        allStrapiServiceDetail {
          edges {
            node {
              Title
              Description {
                data {
                  Description
                }
              }
              DevlopmentTitle
              DevelopmentDescription {
                data {
                  DevelopmentDescription
                }
              }
              ToolsTitle
              ToolsDescription {
                data {
                  ToolsDescription
                }
              }
              EnhanceTitle
              EnhanceDescription {
                data {
                  EnhanceDescription
                }
              }
              Titleservice {
                ServiceDescription {
                  data {
                    ServiceDescription
                  }
                }
                Servicetitle
              }
              ToolService {
                toolsDescription {
                  data {
                    toolsDescription
                  }
                }
                toolsTitle
              }
              EnhanceService {
                ETitle
                EDescription {
                  data {
                    EDescription
                  }
                }
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