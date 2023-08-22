import React,{useEffect} from "react";
import Header from "../../components/Header/Header";
import satisfactionGuaranteed from "../../assets/images/satisfaction-guaranteed.png";
import QualityCode from "../../assets/images/quality-code.png";
import Enableprocess from "../../assets/images/enable-process.png";
import ButtonBox from "../../components/button";
import TrandingCover from "../../components/Cards/tradingcover";
import WhyWeJoinCard from "../../components/Cards/jointeamcard";
import { graphql } from "gatsby";
import Footer from "../../components/Footer/Footer";
import EstimateCard from "../../components/Cards/estimatecard";
import "../trendingtechologies.scss";
import StackToolsCard from "../../components/Cards/StackToolsCard";

export default function ExpertiseCard({ data, props, pageContext }) {

  useEffect(()=>{
    typeof window!="undefined" && window.scrollTo(0,0);
    },[]);
  const technologycard = data && data?.allStrapiTechnology?.edges;
  const jointTechs = data?.allStrapiJointeche?.edges;
  const technology = technologycard.find((item) => {
    return item.node.Slug === pageContext?.technology?.node?.Slug;
  });
 // console.log(technology, "---technology");
  return (
    <div className="outer-trading-box">
      <Header />
      <section className="service-hero-section">
        <div className="contentWidth">
          <div className="service-hero-content ">
            <h1>{technology?.node?.Title}</h1>
            <div className="tranding-cover-cards">
              <TrandingCover
                img={satisfactionGuaranteed}
                trandingCoverHeading="100% satisfaction guaranteed"
              />
              <TrandingCover
                img={QualityCode}
                trandingCoverHeading="Quality code & on time delivery guaranteed"
              />
              <TrandingCover
                img={Enableprocess}
                trandingCoverHeading="Agile & DevOps enabled processes"
              />
            </div>
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
        </div>
      </section>
      <section className="recomment-box">
        <div className="contentWidth">
          <div className="recommented-wrap">
            <div className="recommend-section">
              <h1>{technology?.node?.Benefittitle.data.Benefittitle}</h1>
            </div>
            <div className="recommend-wrap-box">
              <div className="approach-left-box">
                <p>
                  {technology?.node?.Benifitdescription.data.Benifitdescription}
                </p>
              </div>
              <div className="approach-right-box">
                <div className="approach-box">
                  <h4>{technology?.node?.StartupTitle}</h4>
                  <p>
                    {
                      technology?.node?.Startupdescription.data
                        .Startupdescription
                    }
                  </p>
                </div>
                <div className="approach-box">
                  <h4>{technology?.node?.Developmenttitle}</h4>
                  <p>
                    {
                      technology?.node?.Developmentdescription.data
                        .Developmentdescription
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-we-hire reason-to-hire">
        <div className="contentWidth">
          <div className="our-team-wrap">
            <div className="our-tech-team">
              <h1>{technology?.node?.Valuetitle}</h1>
              <div className="out-hiring-tech-subtext">
                {technology?.node?.Valuedescription?.data.Valuedescription}
              </div>
            </div>
            <div className="join-expertise">
              {jointTechs &&
                jointTechs.map((item, i) => (
                  <WhyWeJoinCard
                    key={i}
                    img={item.node?.Image[0]?.url}
                    teamheading={item.node?.Title}
                    teamdescription={item.node?.Description.data.Description}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        {technology && technology.node.stack.length ? <div className="contentWidth stack-tools-use">
          <h1> {technology?.node?.Toolstitle}</h1>
          <div className="stack-tools-card">
            {technology.node.stack.map((item, i) => {
              return (
                <>
                  <StackToolsCard
                    key={i}
                    name={item.stackName}
                    techchild={item?.stacktools}
                  />
                </>
              );
            })
            }
          </div>
        </div> : null}
      </section>
      <div className="contentWidth">
        <section className="estimate-section-wrap">
          <EstimateCard />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    allStrapiTechnology {
      edges {
        node {
          stack {
            stackName
            stacktools {
              stacktech
            }
          }
          Title
          Slug
          Valuetitle
          Metatitle
          Metadescription {
            data {
              Metadescription
            }
          }
          Promotext
          Toolstitle
          Description {
            data {
              Description
            }
          }
          
          Benefittitle {
            data {
              Benefittitle
            }
          }
          Benifitdescription {
            data {
              Benifitdescription
            }
          }
          Developmentdescription {
            data {
              Developmentdescription
            }
          }
          Developmenttitle
          StartupTitle
          Startupdescription {
            data {
              Startupdescription
            }
          }
          Valuedescription {
            data {
              Valuedescription
            }
          }
        }
      }
    }

    allStrapiJointeche {
      edges {
        node {
          Image {
            url
          }
          Description {
            data {
              Description
            }
          }
          Title
        }
      }
    }
  }
`;

// allStrapiComponentSkilltool {
//   edges {
//     node {
//       Tools {
//         Tools {
//           Tools
//           Language
//           DataBase
//         }
//       }
//       technology {
//         Slug
//       }
//     }
//   }
// }
