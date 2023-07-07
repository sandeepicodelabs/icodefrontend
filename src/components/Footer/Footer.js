import * as React from 'react'
import footerlogo from '../../assets/images/footerlogo.png';
import fblogo from '../../assets/images/facebook.png'
import twiterlogo from '../../assets/images/twiter.png'
import linkedinlogo from '../../assets/images/linked.png'
import instalogo from '../../assets/images/insta.png'
import { graphql,useStaticQuery,Link } from 'gatsby';

const Footer =()=> {
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

    console.log("footer",technology)
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
                                           
                                            {technology && technology.map((item,i)=>(
                                         <ul>
                                            <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire MEAN stack developers </Link>   </li>
                                              <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire MERN stack developers </Link></li>
                                              <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire JAM stack developers </Link></li>
                                              <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire Nodejs developers </Link></li>
                                              <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire Asp.net developers </Link></li>
                                           
                                              </ul>
                                            )) 
                                            }
                                          
                                            {/* <ul>
                                                <li><Link to="/technologies/hire-mean-stack-developer">Hire MEAN stack developers </Link></li>
                                                <li><Link to="/technologies/hire-mern-stack-developer">Hire MERN stack developers </Link></li>
                                                <li><Link to="/technologies/hire-jam-stack-developer">Hire JAM stack developers </Link></li>
                                                <li><Link to="/technologies/hire-nodejs-developer">Hire Nodejs developers </Link></li>
                                                <li><Link to="/technologies/hire-dotnet-developer">Hire Asp.net developers </Link></li>



                                            </ul> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 ">
                                        <div className="hiring-link">
                                            {technology && technology.map((item,i)=>(

                                            <ul> 
                                                <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire React Native developers</Link></li>
                                                <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire Flutter developers</Link></li>
                                                <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire Android developers</Link></li>
                                                <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire IOS developers</Link></li>
                                                <li><Link to={"../trendingtechologies/" + item?.node?.Slug}>Hire Angular developers </Link></li>
                                            </ul>
                                            ) )}
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


 