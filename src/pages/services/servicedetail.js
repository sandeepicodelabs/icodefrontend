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
import technologies from "../../assets/images/technologies.png";
import appBenefits from "../../assets/images/android-app-benefits.webp";

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
          {/* <section className="service-hero-section">
            <div className="contentWidth">
              <div className="service-hero-content">
                <h1>{detail?.node?.Title}</h1>
                <p>{detail?.node.Description.data.Description}</p>{" "}
                <a href="/contact">
                  <ButtonBox
                    buttonname="contact now"
                    className="estimate-submit"
                  />
                </a>
              </div>
            </div>
          </section> */}
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
            <div className="contentWidth tools-and-technologies">
              <div className="our-tech-team">
                <h1>{detail?.node?.ToolsTitle}</h1>
                <p>{detail?.node?.ToolsDescription.data.ToolsDescription}</p>
              </div>
              <div className="technologies-block">
                <div className="technologies-img">
                  <img src={technologies} alt="technologies" />
                </div>
                <div className="technologies-content">
                  {detail &&
                    detail?.node?.ToolService.map((item, i) => (
                      <div className="technologies">
                        <h3>{item?.toolsTitle}</h3>
                        <p>{item?.toolsDescription.data.toolsDescription}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
          <section id="process">
            <div className="contentWidth why-choose-us">
              <div className="our-tech-team">
                <h1>{detail?.node?.EnhanceTitle}</h1>
                <p>
                  {detail?.node?.EnhanceDescription.data.EnhanceDescription}
                </p>
              </div>
              <div className="advantage-section">
                <div className="app-benefits-img">
                  <img src={appBenefits} alt="img" />
                </div>
                <div className="advantage-block">
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
          <div className="contentWidth">
            <section className="estimate-section-wrap">
              <div className="estimate-contact">
                <div className="estimate-content">
                  <h3>{detail?.node?.CTATitlte}</h3>
                  <p>{detail?.node?.CTADescription?.data.CTADescription}</p>
                </div>
                <a href="/contact">
                  <ButtonBox
                    buttonname="contact now"
                    className="estimate-submit"
                  />
                </a>
              </div>
            </section>
          </div>
          <section className="faq-section">
            <div className="contentWidth">
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
