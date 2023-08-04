import React from 'react'
import Header from '../../components/Header/Header';
import './style.css'
import deliveryImage from '../../assets/images/professional-programmer-working-late-dark-office.png';
import mobileImge from '../../assets/images/linedin-lite-post-image.png'
import img from '../../assets/images/graphql.png'
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import EstimateCard from '../../components/Cards/estimatecard';
import { graphql, Link } from 'gatsby';
import FAQ from '../../components/FAQ/FAQ'; 

export default function Services({ data }) {
    const service = data?.allStrapiService?.edges
    return (
        <div className="project-list-page">
            <Header />
            <div className="project-wrap-box">
                <section>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="project-list-cover">
                                <div className='col-md-7'>
                                    <h1>Android App Development Company</h1>
                                    <p>Are you in need of bespoke Android app development services? Are you searching for a
                                        leading Android mobile app development company to create a tailored Android app? We are a distinguished
                                        company specializing in Android app development, backed by a wealth of industry experience. Our mission is
                                        to enable businesses to adopt a mobile-first approach and provide exceptional, well-established Android app
                                        development services.
                                    </p>
                                </div>
                                <div className="deliver-image-mobile">
                                    <img src={mobileImge} alt="st logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-description">
                            <div>
                                {
                                    service && service.map((item, i) => (
                                        <div>
                                            <Link to={"/services/" + item?.node?.Slug}> <h1>{item?.node?.Title}</h1>
                                            </Link>
                                            <p>{item.node?.Description.data.Description}</p>
                                        </div>
                                    ))
                                }
                            </div> 
                        </div>
                        <div className="deliver-image-section">
                            <img src={deliveryImage} alt="st logo" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-image-section">
                            <img src={deliveryImage} alt="st logo" />
                        </div>
                        <div className="deliver-description">
                            <div>
                                <h1>Wireforming</h1>
                            </div>
                            Agile scrum theory puts strong focus on the three pillars
                            <span>Transparency, Inspection & Adaptation</span>.
                            We follow agile principles and the industry best practices to deliver a
                            predictable high quality & on-time result.
                        </div>
                    </div>
                </section>
                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-description">
                            <div>
                                <h1>Prototyping</h1>
                            </div>
                            Agile scrum theory puts strong focus on the three pillars
                            <span>Transparency, Inspection & Adaptation</span>.
                            We follow agile principles and the industry best practices to deliver a
                            predictable high quality & on-time result.
                        </div>
                        <div className="deliver-image-section">
                            <img src={deliveryImage} alt="st logo" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-image-section">
                            <img src={deliveryImage} alt="st logo" />
                        </div>
                        <div className="deliver-description">
                            <div>
                                <h1>User Experience and Desing</h1>
                            </div>
                            Agile scrum theory puts strong focus on the three pillars
                            <span>Transparency, Inspection & Adaptation</span>.
                            We follow agile principles and the industry best practices to deliver a
                            predictable high quality & on-time result.
                        </div>
                    </div>
                </section> 
                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-description">
                            <div>
                                <h1>Full Stack Development</h1>
                            </div>
                            Agile scrum theory puts strong focus on the three pillars
                            <span>Transparency, Inspection & Adaptation</span>.
                            We follow agile principles and the industry best practices to deliver a
                            predictable high quality & on-time result.
                        </div>
                        <div className="deliver-image-section">
                            <img src={deliveryImage} alt="st logo" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="our-approach">
                                <div className=" ">
                                    <div className=" ">
                                        <div className="approach-logo">
                                            <img src={img} alt="St Logo" />
                                        </div>
                                        <div className="apporoach-description">
                                            <div className="approach-heading">Ui</div>
                                            <div className="approach-subheading">More about this</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="our-approach">
                                <div className=" ">
                                    <div className="">
                                        <div className="approach-logo">
                                            <img src={img} alt="St Logo" />
                                        </div>
                                        <div className="apporoach-description">
                                            <div className="approach-heading">Ui</div>
                                            <div className="approach-subheading">More about this</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="our-approach">
                                <div className=" ">
                                    <div className=" ">
                                        <div className="approach-logo">
                                            <img src={img} alt="St Logo" />
                                        </div>
                                        <div className="apporoach-description">
                                            <div className="approach-heading">Ui</div>
                                            <div className="approach-subheading">More about this</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-image-section">
                            <img src={deliveryImage} alt='st logo' />
                        </div> 
                        <div className="deliver-description">
                            <div>
                                <h1>Mainteance and support</h1>
                            </div> 
                            Agile scrum theory puts strong focus on the three pillars
                            <span>Transparency, Inspection & Adaptation</span>.
                            We follow agile principles and the industry best practices to deliver a
                            predictable high quality & on-time result.
                        </div> 
                    </div>
                </section>
                <section>
                    <div style={{ paddingLeft: 600, paddingBottom: 100 }}>
                        <FAQ />
                    </div>
                </section> 
                <section className="estimate-section-wrap">
                    <EstimateCard />
                </section>
            </div>
            <Footer />
        </div>
    )
}




export const query = graphql`
query MyQuery {
    allStrapiService {
      edges {
        node {
          Title
          Slug
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
    }
  }
`