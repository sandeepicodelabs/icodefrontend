import React from 'react';
import Header from '../../components/Header/Header';
import satisfactionGuaranteed from '../../assets/images/satisfaction-guaranteed.png'
import QualityCode from '../../assets/images/quality-code.png'
import Enableprocess from '../../assets/images/enable-process.png'
import ButtonBox from '../../components/button';
import TrandingCover from '../../components/Cards/tradingcover';
import WhyWeJoinCard from '../../components/Cards/jointeamcard';
import { graphql } from 'gatsby';
import './style.css'



export default function ExpertiseCard({data}) {
    console.log('expertise card',data)
    const technologycard=data?.allStrapiTechnology?.edges
    const jointTechs=data?.allStrapiJointeche?.edges


  return (
    <div className="outer-trading-box">
    <Header />
    <section className="tranding-tech">
        <div className="tranding-bar-cover">
            <h1>Hire React Native developer, choose the sure thing for cross platform apps</h1>
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
                                    <h1>Why we recommend React Native as go to approach</h1>
                                </div>
                                <div className="recommend-wrap-box">
                                    <div className="approach-left-box">
                                        <p>
                                            Developed & maintained by Facebook, React Native is a great framework for cross platform mobile app development.
                                            React Native delivers great speed & performance, the UI and UX of the apps in most of the cases is same as Native
                                            apps and on top of its all JavaScript. Choose React Native when:
                                        </p>
                                    </div>
                                    <div className="approach-right-box">
                                        <div className="approach-box">
                                            <h4>Great for startups</h4>
                                            <p>
                                                Reat Native solves many challenges startups face. Every startup like to launch the product quickly as its important
                                                for them to prove their unique propostion and establish this before somebody else takes over. They need a cost effective
                                                solution and scalable solution. If you need ALL JAVASCRIPT full stack development, React Native is a perfect option.
                                                It ticks almost all the points for startup apps. We help startups to launch apps on android & IOS platforms
                                                at the same time time reducing the product launch timeline.
                                            </p>
                                        </div>
                                        <div className="approach-box">
                                            <h4>MVP Development</h4>
                                            <p>
                                                React Native is best for MVP products as well. MVP products are built to validate the idea and keep improvising & scaling
                                                with constant feedback received. This needs cost effective, scalable and the most important a great team to
                                                collborate & maintain the app with constant changes. The one source code and same development team helps a lot
                                                than having mutiple teams and running after one developer to another.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="why-we-hire">
                            <div className="our-team-wrap">
                                <div className="our-tech-team">
                                    <h1>Reasons to hire our React team</h1>
                                    <div className="out-hiring-tech-subtext">
                                        Our team of React developers have more than 5 years of development experience .
                                        Our core focus is to delivery a quality, maintainable & scalable solution.
                                    </div>
                                </div>
                                  <div className="join-expertise">
                                    {jointTechs && jointTechs.map((item, i) => (
                                        <WhyWeJoinCard
                                            key={i}
                                           // img={item.node?.image.publicURL}
                                            teamheading={item.node?.Title}
                                            teamdescription={item.node?.Description.data.Description}
                                        />
                                    ))}
                                </div>  
                            </div>
                        </section>
    </div>
  )
}











export const query=graphql`
query MyQuery {
    allStrapiTechnology {
      edges {
        node {
          Title
          Benefits {
            data {
              Benefits
            }
          }
          Description {
            data {
              Description
            }
          }
          Metatitle
          Toolstitle
          Valuedescription {
            data {
              Valuedescription
            }
          }
          Valuetitle
          Promotext
        }
      }
    }

    allStrapiJointeche {
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





