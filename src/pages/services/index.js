import React from 'react'
import Header from '../../components/Header/Header';
import './style.css'
import deliveryImage from '../../assets/images/professional-programmer-working-late-dark-office.png';
import img from '../../assets/images/graphql.png'
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
import Footer from '../../components/Footer/Footer';
import EstimateCard from '../../components/Cards/estimatecard';
import { graphql, Link } from 'gatsby';
import Servicedetail from './servicedetail';
import FAQ from '../../components/FAQ/FAQ';




export default function Services({ data }) {
    // console.log("servicedatail",data)

    const service = data?.allStrapiService?.edges

    return (
        <div className="project-list-page">
            <Header />
            <div className="project-wrap-box">
                <section>
                    <div className="project-list-cover">

                        <p>Select your marketplace type.<br />
                            Transparency, Inspection & Adaptation
                            We follow agile principles and the industry best practices to deliver a
                            predictable high quality & on-time result.
                        </p>
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
                            <img src={deliveryImage} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-image-section">
                            <img src={deliveryImage} />
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
                            <img src={deliveryImage} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="deliver-qualitywork">
                        <div className="deliver-image-section">
                            <img src={deliveryImage} />
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
                            <img src={deliveryImage} />
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
                            <img src={deliveryImage} />
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
                    <div style={{paddingLeft:600,paddingBottom:100}}>
                       <h1>FAQ Question</h1>   
                    <FAQ/>
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