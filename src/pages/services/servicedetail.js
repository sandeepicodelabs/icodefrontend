import React from 'react'
import Header from '../../components/Header/Header'
import './style.css'
import Footer from '../../components/Footer/Footer';
import { graphql } from 'gatsby';
import FAQ from '../../components/FAQ/FAQ';
import '../../assets/css/custom.css';
import WhyWeJoinCard from '../../components/Cards/jointeamcard';
import CompanyApproachCard from '../../components/Cards/companyapproachecard';
import EstimateCard from '../../components/Cards/estimatecard';

export default function Servicedetail({ data, pageContext }) {
  const servicedetail = data && data?.allStrapiServiceDetail?.edges;
  const detail = servicedetail?.find(item => {
    return item?.node?.Slug === pageContext.service?.node?.Slug;
  });
  //console.log('servicedetail', servicedetail); 
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
                    <h1>{detail?.node?.Title}</h1>
                    <p>
                      {detail?.node.Description.data.Description}
                    </p>
                  </div>
                  <div className="deliver-image-section">

                    <img src={detail && detail?.node?.TopImage?.[0]?.url}  alt="st logo"/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="why-we-hire">
            <div className="our-team-wrap">
              <div className="our-tech-team">
                <h1 >{detail?.node?.DevlopmentTitle}</h1>
                <p className="choose-description">
                  {detail?.node?.DevelopmentDescription.data.DevelopmentDescription}
                </p>
              </div>
              <div className="join-expertise">
                {detail && detail.node.Titleservice.map((item, i) => (
                  <WhyWeJoinCard
                    key={i}
                    img={item?.TImage && item?.TImage[0]?.url}
                    teamheading={item?.Servicetitle}
                    teamdescription={item?.ServiceDescription?.data?.ServiceDescription}
                  />
                ))}

              </div>
            </div>
          </section>

          <section id="process">
            <div className="how-do-we-do">
              <div className="inner-timeline-box">
                <div className="timeline-heading">
                  <h1>{detail?.node?.ToolsTitle}</h1>
                  <p>{detail?.node?.ToolsDescription.data.ToolsDescription}
                  </p>
                </div>
                <div className="timeline-content">
                  <div className="timeline">
                    {detail && detail?.node?.ToolService.map((item, i) => (
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
                  <h1>{detail?.node?.EnhanceTitle}</h1>
                  <p>{detail?.node?.EnhanceDescription.data.EnhanceDescription}
                  </p>
                </div>
              </div>
              <div className="our-approach">
                <div className="company-approach-card">
                  {detail && detail?.node.EnhanceService.map((item, i) => (
                    <CompanyApproachCard
                      approachheading={item?.ETitle}
                      img={item?.EImage && item?.EImage[0]?.url}
                      approachsubheading={item?.EDescription.data.EDescription}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <br />
          <section className="estimate-section-wrap">
            <EstimateCard />
          </section>
          <section >
            <div style={{ paddingLeft: 600, paddingBottom: 100 }}>
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
  allStrapiServiceDetail (sort: {strapi_id: ASC}){
          edges {
            node {
              Slug
              TitleMain
              Title
              TopImage {
                url
              }
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
                TImage {
                  url
                }
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
                EImage{
                  url
                }
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