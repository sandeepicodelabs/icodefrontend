import React from 'react';
import Header from '../../components/Header/Header';
import satisfactionGuaranteed from '../../assets/images/satisfaction-guaranteed.png'
import QualityCode from '../../assets/images/quality-code.png'
import Enableprocess from '../../assets/images/enable-process.png'
import ButtonBox from '../../components/button';
import TrandingCover from '../../components/Cards/tradingcover';
import WhyWeJoinCard from '../../components/Cards/jointeamcard';
import { graphql } from 'gatsby';
import Footer from '../../components/Footer/Footer';
import EstimateCard from '../../components/Cards/estimatecard';
import './style.css'
import StackToolsCard from '../../components/Cards/StackToolsCard';



export default function ExpertiseCard({ data, props, pageContext }) {

  const technologycard = data && data?.allStrapiTechnology?.edges;
  const jointTechs = data?.allStrapiJointeche?.edges;
  const technology = technologycard.find(item => { return item.node.Slug === pageContext?.technology?.node?.Slug })
   console.log(jointTechs, "---technology")
  return (
    <div className="outer-trading-box">
      <Header />
      <section className="tranding-tech">
        <div className="tranding-bar-cover">
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
          <div className="hiring-buttons">
            <ButtonBox
              buttonname="Book free consutation"
            />
            <ButtonBox
              buttonname="Hire developer"
              className="hire-dev-button"
            />
          </div>
        </div>
      </section>
      <section className="recomment-box">
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
                  {technology?.node?.Startupdescription.data.Startupdescription}
                </p>
              </div>
              <div className="approach-box">
                <h4>{technology?.node?.Developmenttitle}</h4>
                <p>
                  {technology?.node?.Developmentdescription.data.Developmentdescription}

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-we-hire">
        <div className="our-team-wrap">
          <div className="our-tech-team">
            <h1>{technology?.node?.Valuetitle}</h1>
            <div className="out-hiring-tech-subtext">
              Our team of React developers have more than 5 years of development experience .
              Our core focus is to delivery a quality, maintainable & scalable solution.
            </div>
          </div>
          <div className="join-expertise">
            {jointTechs && jointTechs.map((item, i) => (
              <WhyWeJoinCard
                key={i}
                 img={item.node?.Image[0]?.url}
                teamheading={item.node?.Title}
                teamdescription={item.node?.Description.data.Description}
              />
            ))}
          </div>
          <section>
            <div className="stack-tools-use">
              <div className="stack-heading"> {technology?.node?.Toolstitle}</div>
              <div className="stack-tools-card">
                {technology && technology.node.stack.map((item, i) => {
                  return (
                    <>
                      <StackToolsCard
                        key={i}
                        name={item.stackName}
                        techchild={item?.stacktools}
                      />

                    </>
                  )
                })}

              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="estimate-section-wrap">
        <EstimateCard />
      </section>
      <Footer />
    </div>
  )
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
        Promotext
        Toolstitle
        Description {
          data {
            Description
          }
        }
        Metadescription {
          data {
            Metadescription
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
`




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
