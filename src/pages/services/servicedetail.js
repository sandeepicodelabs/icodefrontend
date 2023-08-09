import React from "react";
import Header from "../../components/Header/Header";
import "../services.scss";
import Footer from "../../components/Footer/Footer";
import { graphql } from "gatsby";
import FAQ from "../../components/FAQ/FAQ";
import WhyWeJoinCard from "../../components/Cards/jointeamcard";
import CompanyApproachCard from "../../components/Cards/companyapproachecard";
import EstimateCard from "../../components/Cards/estimatecard";
import ButtonBox from "../../components/button";

export default function Servicedetail({ data, pageContext }) {
  const servicedetail = data && data?.allStrapiServiceDetail?.edges;
  const detail = servicedetail?.find((item) => {
    return item?.node?.Slug === pageContext.service?.node?.Slug;
  });
  //console.log('servicedetail', servicedetail);
  return (
    <>
      <div className="project-list-page">
        <Header />
        <div className="project-wrap-box">
          <section className="service-hero-section">
            <div className="contentWidth">
              <div className="service-hero-content">
                <h1>{detail?.node?.Title}</h1>
                <p>{detail?.node.Description.data.Description}</p>
              </div>
            </div>
          </section>
          <section className="service-header">
            <div className="contentWidth">
              <div className="service-header-content">
                <h1>{detail?.node?.Title}</h1>
                <p>{detail?.node.Description.data.Description}</p>
              </div>
              <div className="service-header-image">
                <img
                  src={detail && detail?.node?.TopImage?.[0]?.url}
                  alt="st logo"
                />
              </div>
            </div>
          </section>
          <section className="why-we-hire">
            <div className="contentWidth our-team-wrap">
              <div className="our-tech-team">
                <h1>{detail?.node?.DevlopmentTitle}</h1>
                <p className="choose-description">
                  {
                    detail?.node?.DevelopmentDescription.data
                      .DevelopmentDescription
                  }
                </p>
              </div>
              <div className="join-expertise">
                {detail &&
                  detail.node.Titleservice.map((item, i) => (
                    <WhyWeJoinCard
                      key={i}
                      img={item?.TImage && item?.TImage[0]?.url}
                      teamheading={item?.Servicetitle}
                      teamdescription={
                        item?.ServiceDescription?.data?.ServiceDescription
                      }
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
                  <p>{detail?.node?.ToolsDescription.data.ToolsDescription}</p>
                </div>
                <div className="timeline-content">
                  <div className="timeline">
                    {detail &&
                      detail?.node?.ToolService.map((item, i) => (
                        <div className="container-wrap-box steps">
                          <div className="content">
                            <h3>{item?.toolsTitle}</h3>
                            <p>
                              {item?.toolsDescription.data.toolsDescription}
                            </p>
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
                  <p>
                    {detail?.node?.EnhanceDescription.data.EnhanceDescription}
                  </p>
                </div>
              </div>
              <div className="our-approach">
                <div className="company-approach-card">
                  {detail &&
                    detail?.node.EnhanceService.map((item, i) => (
                      <CompanyApproachCard
                        approachheading={item?.ETitle}
                        img={item?.EImage && item?.EImage[0]?.url}
                        approachsubheading={
                          item?.EDescription.data.EDescription
                        }
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>
          <br />
          <section className="estimate-section-wrap">
            <div className="estimate-contact">
              <h3>{detail?.node?.CTATitlte}</h3>
              <p>{detail?.node?.CTADescription?.data.CTADescription}</p>
              <a href="/contact">
                <ButtonBox
                  buttonname="contact now"
                  className="estimate-submit"
                />
              </a>
            </div>
          </section>
          <section>
            <div style={{ paddingLeft: 600, paddingBottom: 100 }}>
              <FAQ />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export const query = graphql`
  query MyQuery {
    allStrapiServiceDetail(sort: { strapi_id: ASC }) {
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

              CTATitlte
              CTADescription {
                data {
                  CTADescription
                }
              }
              Description {
                data {
                  Description
                }
              }
            }
            toolsTitle
          }
          EnhanceService {
            EImage {
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
`;
