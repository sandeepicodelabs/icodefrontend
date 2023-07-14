import React from 'react'
import Header from '../../components/Header/Header'
import deliveryImage from '../../assets/images/professional-programmer-working-late-dark-office.png';
import ButtonBox from '../../components/button';
import companyaboutimg from '../../assets/images/companyabout.png';
import './style.css'
import Footer from '../../components/Footer/Footer';
import { graphql } from 'gatsby';
export default function Servicedetail({ data }) {

    const process = data?.allStrapiProcess?.edges
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

                                        Agile scrum theory puts strong focus on the three pillars
                                        <span>Transparency, Inspection & Adaptation</span>.
                                        We follow agile principles and the industry best practices to deliver a
                                        predictable high quality & on-time result.
                                    </div>
                                    <div className="deliver-image-section">
                                        <img src={deliveryImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="article-main-box" style={{ padding: 74 }}>
                            <div className="all-article-heading">
                                <h3>All articles</h3>
                            </div>
                            <div className="all-article-wrap">
                                <div className="article-list-wrap">


                                    <div className="article-card-list-most">

                                        <div className="all-article-card-box">
                                            <div className="all-article-cover-image">
                                                All data here
                                            </div>

                                        </div>
                                    </div>
                                </div>


                                <div className="most-popular-article">
                                    <div className="most-polular">
                                        <h1>Most popular</h1>
                                        <div className="popular-wrap-box">
                                            <h3>All new content here</h3>
                                        </div>
                                    </div>
                                </div>

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
                    <section id="process">
                        <div className="how-do-we-do">
                            <div className="inner-timeline-box">
                                <div className="timeline-heading">
                                    <h1>Our Android Development Process</h1>
                                    <p>Process in easy step</p>
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
                                                    <div className="month-date">{i + 1}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </section>

                    <section>
                    <div className="small-container">
      <div className="small-inner-wrapper">
        <h2 className="heading2 text-center">FAQs on Android App Development</h2>
        <div className="heading5 text-center">
          On the basis of our extensive experience as a leading android software development company and the questions that our partners ask, we have enlisted the following most asked questions. Our hope here is that through them, you will come one step closer to understanding Android at its core.
        </div>
        <ul className="app-faq-wrap-list clearfix">
          <li className="">
            <span className="head">Will we sign an NDA to keep my Android app idea confidential?<span className="plus"></span></span>
            <div className="faq-content-wrap" style={{ display: 'none' }}>
              <p>Yes. We always sign an NDA the moment we get an app idea. The process is done even before we get on the first call with our clients.</p>
            </div>
          </li>
          {/* Add the remaining <li> elements */}
        </ul>
      </div>
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