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

export default function Servicedetail({ data }) {

    const process = data?.allStrapiProcess?.edges;
    const servicedetail=data?.allStrapiServiceDetail?.edges[0];
    console.log("service",servicedetail)
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
                    <section id='about'>
                        <div className="why-choose-us">
                            <div className="heading-main">
                                <h1 className="choose-heading">{servicedetail?.node?.DevlopmentTitle}</h1>
                                {/* <div className="choose-subheading"> </div> */}
                                <p className="choose-description">
                                    {servicedetail?.node?.DevelopmentDescription.data.DevelopmentDescription}
                                </p>
                            </div>

                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="join-our-about"> 
                                        {servicedetail && servicedetail.node.EnhanceService.map((item,i)=>{
                                            //console.log("map",item)
                                        })}
                                            <h5> </h5>
                                            <p> 
                                            </p>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className="join-our-about">

                                            <h5>Android UI/UX Designing</h5>
                                            <p>The Android ecosystem is diverse, with a wide range of devices operating on it.
                                                Our expert Android app designers know how to create exceptional user experiences across all
                                                Android devices and versions. We'll make sure your app looks and feels great, no matter the
                                                device it's installed on.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className="join-our-about">

                                            <h5>Custom Android Application Development</h5>
                                            <p>
                                                Our skilled Android application developers are well-versed in building robust and scalable Android
                                                solutions. Whether you belong to any industry worldwide, we can create a tailor-made Android app
                                                that reflects your unique identity among millions of other apps in the store.

                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className="join-our-about">
                                            <span>
                                            </span>
                                            <h5>Thorough Android Software Testing</h5>
                                            <p>
                                                Security and performance are our top priorities in the Android mobile development process.
                                                We conduct comprehensive testing to ensure your Android app is free from glitches and lags.
                                                Our combination of manual and automated testing ensures that your app is future-ready and reliable.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className="join-our-about">
                                            <span>
                                            </span>
                                            <h5>Multi-platform Deployment</h5>
                                            <p>
                                                We specialize in seamless integration and deployment for Android apps.
                                                Regardless of the platform you wish to target, our expert Android development services
                                                can get you there smoothly. If you want a complete overview of Android development,
                                                check out our mobile application development guide.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='col-md-4'>
                                        <div className="join-our-about">
                                            <span>
                                            </span>
                                            <h5>Android Game App Development</h5>
                                            <p>
                                                With the rising demand for Android gaming apps like PokemonGo, we understand the importance of captivating and entertaining game apps.
                                                If you are in the gaming business and want to build an Android-based game app, our skilled Android game app developers can help.
                                                We can craft an appealing gaming app for both Android and iOS platforms.

                                            </p>

                                        </div>
                                    </div>
                                </div>
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
                                           // console.log('map',item)
                                            <div className="container-wrap-box steps">
                                                <div className="content">
                                                    <h3>{item.node?.toolsTitle}</h3>
                                                    <p>{item.node?.toolsDescription.data.toolsDescription}</p>
                                                </div> 
                                            </div>
                                        ))}
 
                                    </div>
                                </div>
                            </div>
                            <div className="our-approach">
                                <div className="company-approach-card"> 
                                    <div className="company-approach-box">
                                        <a href="/ourapproach">
                                            <div className="approach-logo">
                                                {/* <img src={img} alt="St Logo" /> */}
                                            </div>
                                            <div className="apporoach-description">
                                                <div className="approach-heading">Lower Costs
                                                </div>
                                                <div className="approach-subheading">One major benefit of hiring Android developers is that they can
                                                    leverage the powerful Software Development Kit (SDK) to build apps more efficiently.
                                                    This not only reduces development time but also minimizes licensing and overall development costs. </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="company-approach-box">
                                        <a href="/ourapproach">
                                            <div className="approach-logo">
                                                {/* <img src={img} alt="St Logo" /> */}
                                            </div>
                                            <div className="apporoach-description">
                                                <div className="approach-heading">Lower Costs
                                                </div>
                                                <div className="approach-subheading">One major benefit of hiring Android developers is that they can
                                                    leverage the powerful Software Development Kit (SDK) to build apps more efficiently.
                                                    This not only reduces development time but also minimizes licensing and overall development costs. </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="company-approach-box">
                                        <a href="/ourapproach">
                                            <div className="approach-logo">
                                                {/* <img src={img} alt="St Logo" /> */}
                                            </div>
                                            <div className="apporoach-description">
                                                <div className="approach-heading">Lower Costs
                                                </div>
                                                <div className="approach-subheading">One major benefit of hiring Android developers is that they can
                                                    leverage the powerful Software Development Kit (SDK) to build apps more efficiently.
                                                    This not only reduces development time but also minimizes licensing and overall development costs. </div>
                                            </div>
                                        </a>
                                    </div> 
                                </div>
                            </div>
                            <div className="our-approach">
                                <div className="company-approach-card">

                                    <div className="company-approach-box">
                                        <a href="/ourapproach">
                                            <div className="approach-logo">
                                                {/* <img src={img} alt="St Logo" /> */}
                                            </div>
                                            <div className="apporoach-description">
                                                <div className="approach-heading">Lower Costs
                                                </div>
                                                <div className="approach-subheading">One major benefit of hiring Android developers is that they can
                                                    leverage the powerful Software Development Kit (SDK) to build apps more efficiently.
                                                    This not only reduces development time but also minimizes licensing and overall development costs. </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="company-approach-box">
                                        <a href="/ourapproach">
                                            <div className="approach-logo">
                                                {/* <img src={img} alt="St Logo" /> */}
                                            </div>
                                            <div className="apporoach-description">
                                                <div className="approach-heading">Lower Costs
                                                </div>
                                                <div className="approach-subheading">One major benefit of hiring Android developers is that they can
                                                    leverage the powerful Software Development Kit (SDK) to build apps more efficiently.
                                                    This not only reduces development time but also minimizes licensing and overall development costs. </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="company-approach-box">
                                        <a href="/ourapproach">
                                            <div className="approach-logo">
                                                {/* <img src={img} alt="St Logo" /> */}
                                            </div>
                                            <div className="apporoach-description">
                                                <div className="approach-heading">Lower Costs
                                                </div>
                                                <div className="approach-subheading">One major benefit of hiring Android developers is that they can
                                                    leverage the powerful Software Development Kit (SDK) to build apps more efficiently.
                                                    This not only reduces development time but also minimizes licensing and overall development costs. </div>
                                            </div>
                                        </a>
                                    </div>

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