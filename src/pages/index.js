import * as React from "react"
<<<<<<< HEAD
// import Header from "../components/Header/Header";
=======
import { StaticQuery, graphql } from "gatsby";
import Header from "../components/Header/Header";
>>>>>>> 582587eaba5f864dbd4d7adc0fcb4a532ccc2e94
// import TestimonialCard from '../components/testimonialcard';
// import InputBox from '../components/input';
// import userImg from '../../assets/images/user.png';
// import Emailicon from '../../assets/images/email.png';
import ButtonBox from '../components/button';
// import testimonialPicture from '../assets/images/testimonialPic.png';
// import commaimage from '../assets/images/comma.png';
// import companyaboutimg from '../../assets/images/companyabout.png';
import covercode from '../assets/images/cover-code.png';
import meanstack from '../assets/images/meanstack.png';
// import webimg from '../assets/images/web.png';
// import messageimg from '../assets/images/message.png';
<<<<<<< HEAD
import '../assets/css/custom.css'
// import '../assets/css/custom.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
    <div>
      {/* <Header /> */}
      <section>
        <div className="cover-background">
          <div className="cover-logo-box">
            <img src={covercode} alt="St Logo" />
          </div>
          <div className="cover-heading-text">
            <h1>We build bespoke mobile & web applications driven by Innovation. </h1>
          </div>
          <div className="subtext-box">
            <p className="cover-sub-text">Commited to deliver quality & performance oriented apps.</p>
          </div>
          <div className="cover-stack-heading">
            <img src={meanstack} alt="St Logo" />
            <span className="cover-stack">Mean stack development</span>
          </div>
          <div className="booking-button">
            <ButtonBox
              type="button"
              buttonname="Book a free consultation"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="trusted-brands">
          <h5>TRUSTED BY 50+ COMPANIES</h5>
          <div className="trusted-brand-box">
            {/* <Slider {...settings}>
            {brandLogo && brandLogo.map((item, i) => (
              <div
                className="brand-logo"
              >
                <img src={item.node?.companylogo.publicURL} />
              </div>
            ))}
          </Slider> */}
          </div>
        </div>
      </section>
    </div>
  )
};

export default IndexPage;
=======
import Slider from "react-slick";
import '../assets/css/custom.css';
import '../assets/css/bootstrap.min.css';
import { GatsbyImage,getImage } from "gatsby-plugin-image";

const IndexPage = ({data}) => {
  console.log('data', data)
  const image = getImage (data?.allStrapiCompanyLogo?.edges)
  //console.log('brandLogo', brandLogo)
  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 3,
          centerMode: true,
        }
      },
    ]

  };
  
      return (
        <div>
          <Header />
          <section>
            <div className="cover-background">
              <div className="cover-logo-box">
                <img src={covercode} alt="St Logo" />
              </div>
              <div className="cover-heading-text">
                <h1>We build bespoke mobile & web applications driven by Innovation. </h1>
              </div>
              <div className="subtext-box">
                <p className="cover-sub-text">Commited to deliver quality & performance oriented apps.</p>
              </div>
              <div className="cover-stack-heading">
                <img src={meanstack} alt="St Logo" />
                <span className="cover-stack">Mean stack development</span>
              </div>
              <div className="booking-button">
                <ButtonBox
                  type="button"
                  buttonname="Book a free consultation"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="trusted-brands">
              <h5>TRUSTED BY 50+ COMPANIES</h5>
              <div className="trusted-brand-box">
              
                <Slider  {...settings}>
                <GatsbyImage image={image} alt=" "  />
                   
                     {/* {image.map((item, key) => ( 
                      <div key={key}>
                    
                      </div>
                      
                        // <Img fluid={item?.url} alt=" " />
                    
                   )) } */}
                    
                  </Slider>
              </div>
            </div>
          </section>
        </div>
      )
};

export default IndexPage;

export const query = graphql`
        query MyQuery {
          allStrapiCompanyLogo {
            edges {
              node {
                logo {
                  url
                }
              }
            }
          }
        }  
      `
 
>>>>>>> 582587eaba5f864dbd4d7adc0fcb4a532ccc2e94
