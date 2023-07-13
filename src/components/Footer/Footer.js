import * as React from 'react'
import footerlogo from '../../assets/images/footerlogo.png';
import fblogo from '../../assets/images/facebook.png'
import twiterlogo from '../../assets/images/twiter.png'
import linkedinlogo from '../../assets/images/linked.png'
import instalogo from '../../assets/images/insta.png'
import { graphql, useStaticQuery, Link } from 'gatsby';
import ExpertiseCard from '../../pages/trendingtechologies';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
      allStrapiTechnology {
        edges {
          node {
            Title
            Slug
          }
        }
      }
    }
  `);
    // const { Logo, SocialNetworkIcon, Address, CompanyName, Email, PhoneNumber } = data?.allStrapiComponentGlobalFooter?.edges[0]?.node || {};

    const technology = data?.allStrapiTechnology?.edges

    // console.log("footers",technology)
    return (
        <>
            <footer className="footer-box">
                <div className='footer_wrap'>
                    <div>
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12">
                                <div className="footer-logo">
                                    <a href="#"><img src={footerlogo} alt="icodelabs" /></a>
                                    <p>Web application development, Mobile app development, Outsource software development company in India.</p>
                                </div>
                                <div className="footer-email">
                                    <h3>Email</h3>
                                    <p>hello@icodelabs.co</p>
                                </div>

                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 hiring-box">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-10">
                                        <div className="hiring-heading">
                                            <h3>Hire Developers </h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                                <div className="hiring-link"> 
                                                    {
                                                        technology &&
                                                        <>
                                                            {technology.slice(0, Math.ceil(technology.length / 2)).map((item, i) => (
                                                                <ul key={i}>
                                                                    <li>
                                                                        <Link to={"/trendingtechologies/" + item?.node?.Slug}>{item.node.Title}</Link>
                                                                    </li>
                                                                </ul>
                                                            ))}  
                                                        </>
                                                    }  
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 ">
                                                <div className="hiring-link">
                                                    {
                                                        technology &&
                                                        <>
                                                            {technology.slice(Math.ceil(technology.length / 2)).map((item, i) => (
                                                                <ul key={i}>
                                                                    <li>
                                                                        <Link to={"/trendingtechologies/" + item?.node?.Slug}>{item.node.Title}</Link>
                                                                    </li>
                                                                </ul>
                                                            ))}
                                                        </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bar">
                    <div className="social-link">
                        <a href="#"><img src={fblogo} alt="icodelabs" /></a>
                        <a href="#"><img src={twiterlogo} alt="icodelabs" /></a>
                        <a href="#"><img src={linkedinlogo} alt="icodelabs" /></a>
                        <a href="#"><img src={instalogo} alt="icodelabs" /></a>
                    </div>
                    <div className="copyright-link">
                        <span>All  Right Reserved by : INNOVATIVE CODE LABS PVT. LTD</span>
                        <span>© Copy Right 2023 </span>
                    </div>
                    <div className="policy-link">
                        <div><a href='#'>Privacy</a></div>
                        <div><a href='#'>Terms</a></div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;


