import React from 'react'
import ButtonBox from "../../components/button";
import Icons from '../../components/Icons/Icons';
import { Link } from 'gatsby';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function education() {
  return (
    <>
    <Header/>
      <section className="marketplace-header">
        <div className="contentWidth">
          <h1>Education App Development Services</h1>
          <p>
            A leading education software development company redefining learning for 10+ millions students and trainers
          </p>
          <ButtonBox buttonname="Share your app idea" className="btn" />
        </div>
      </section>

      <section className="marketplaceDetailsPage">
        <div className="contentWidth">
          <div className="breadcrumbs">
            <Link to="/">Home</Link>
            <span className="separator">
              <Icons name="upArrow" />
            </span>
            <Link to="/marketplace">Marketplace</Link>{" "}
            <span className="separator">
              <Icons name="upArrow" />
            </span>
            <span>On healthcare</span>
          </div>
          <div className="solutionSec">
            <h2>Our Suite of Educational App Development Services</h2>
            <p>
              We offer an integrated set of eLearning elements, tools and resources that support knowledge delivery and management.
              Our suite of solutions makes us one of the leading education application development companies in the world.
            </p>
            <div className="features">
              <div className="featureBlock">
                <span className="icon">
                  {" "}
                  <Icons name="socialNetworking" />
                </span>
                <h3>
                  Corporate Training Apps</h3>
                <p>

                  Corporate Training Apps
                  Our educational app development services consist of an easy-to-follow design concept for corporate learning apps.
                  When we combine our designs with Clients' Learned Content,
                  we are able to create a training module that helps the team hone their present skillset.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="payment" />
                </span>
                <h3>Employee Engagement Apps</h3>
                <p>
                  As a leading educational app development company, we also focus on employee engagement based education mobile apps.
                  Our apps have been used by Fortune 500 corporations as a platform to bring and connect all the employees together.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="appAlert" />
                </span>
                <h3>
                  Skill Boosting Apps</h3>
                <p>
                  Backed by AR/VR and IoT, our skill enhancing apps are concentrated on elevating the employee's skills through the medium of gamification.
                  As part of our eLearning app development services, our skill boosting apps are available on all required platforms.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="geoLocation" />
                </span>
                <h3>Tuition Apps</h3>
                <p>
                  Our tuition app development solutions are devised to make accessibility of education real-time and non-geography bound.
                  Our educational mobile app developers offer customized applications loaded with engaging features such as homework section, to-do list, etc.
                  for efficient learning.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="analytics" />
                </span>
                <h3>Marketplaces</h3>
                <p>
                  We design architectures that can support numerous buyers and sellers on a single platform operationalizing the free market for as many businesses as possible.
                  We integrate all this into a functional and thoughtful marketplace portal on the web or mobile.
                </p>
              </div>

              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="socialNetworking" />
                </span>
                <h3>E2c eLearning App Development</h3>
                <p>
                  Our education app development services also include crafting apps for large scale education ventures.
                  Our educational app developers understand the details of a large-scale eLearning app,
                  so you don't have to worry about deploying your educational app on a broad scale.
                </p>
              </div>


              <div className="featureBlock">
                <span className="icon paymentIcon">
                  <Icons name="payment" />
                </span>
                <h3>Virtual Classrooms and Video Conferencing</h3>
                <p>
                  With the continuous advancement in educational app development process, screen learning is a big yes.
                  We can develop video conferencing apps and virtual classrooms for your education business.
                  Our education mobile app developers can integrate features such as presentation, participation control and homework management etc.

                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="appAlert" />
                </span>
                <h3>
                  LMS Development</h3>
                <p>
                  As a leading educational software development company, our services also consist of
                  LMS platform design and development that can effectively track online training and learning activities.
                  Your users can easily access the entire study material within the platform.
                </p>
              </div>
              <div className="featureBlock">
                <span className="icon">
                  <Icons name="geoLocation" />
                </span>
                <h3>eLearning Apps for Disabled</h3>
                <p>
                  As a renowned education app development company, we also focus on education application development for our differently abled audience.
                  Make knowledge accessible to all through our advanced adaptive learning educational apps development services based on 3D and Haptic technologies.
                </p>
              </div>

              <div className="featureBlock">
                <span className="icon">
                  <Icons name="appAlert" />
                </span>
                <h3>

                  On-demand eLearning Apps</h3>
                <p>
                  Our on-demand education app development services fulfill business requirements of audio and video learning, lecture scheduling,
                  appointment management and more with intuitive UI and fast performance.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>



    <Footer/>

    </>
  )
}
