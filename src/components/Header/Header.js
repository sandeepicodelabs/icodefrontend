import React, { useState } from "react";
import icodelogo from "../../assets/images/logo/icodelab-logo.png";
import { Link, graphql, useStaticQuery } from "gatsby";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import footerlogo from "../../assets/images/footerlogo.png";

import DropdownMenu from "../DropdownMenu/DropdownMenu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      allStrapiServiceDetail {
        edges {
          node {
            Slug
            TitleMain
          }
        }
      }
    }
  `);
  const service = data?.allStrapiServiceDetail?.edges;

  const serviceDropdownList = service?.map((item) => {
    return {
      text: item?.node?.TitleMain,
      link: `/services/${item?.node?.Slug}`,
    };
  });
 
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const { width } = useWindowDimensions();
  const isTabLayout = width < 1024;
  const isMobileLayout = width < 768;
  return (
    <header className="topbar">
      <div className="contentWidth">
        <div className="topbarNavigation">
          <a href="/" className="logo">
            <img src={footerlogo} alt="St Logo" />
          </a>
          <span className="toggleBtn" onClick={toggle}>
            &nbsp;
          </span>
          <nav
            className={"navigation " + (isOpen && isTabLayout ? "expand" : "")}
            isOpen={isOpen}
          >
            <div className="navlink">
              <DropdownMenu title={"Services"} options={serviceDropdownList} />
            </div>
            {/* <div className="navlink">
              <a onClick={toggle} href="#technologies">
                Technologies
              </a>
            </div>
            <div className="navlink">
              <a onClick={toggle} href="/projectlist">
                Portfolio
              </a>
            </div> */}
            {/* <div className="navlink">
              <a onClick={toggle} href="/projectlist">
                Portfolio
              </a>
            </div>  */}
            <div className="navlink">
              <a onClick={toggle} href="/aboutus">
                About Us
              </a>
            </div>{" "}
            <div className="navlink">
              <a onClick={toggle} href="/contact">
                Contact Us
              </a>
            </div>{" "}
            <div className="navlink">
              <a onClick={toggle} href="/blog">
                Blog
              </a>
            </div>
            {/* <div className="navlink">
              <DropdownMenu
                title={"Company"}
                options={[
                  { text: "About", link: "/aboutus" },
                  { text: "Contact Us", link: "/contact" },
                  { text: "Process", link: "#process" },
                ]}
              />
            </div> */}
            <div className="navlink">
              <a href="/contact" className="hiringButton btn">
                <span className="rippleEffect">&nbsp;</span>
                Hire Developers
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}; 

export default Header;







