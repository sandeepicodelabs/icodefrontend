import React, { Component, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import icodelogo from '../../assets/images/logo/icodelab-logo.png';
import { Link, graphql, useStaticQuery } from 'gatsby'


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
  const service = data?.allStrapiServiceDetail?.edges

  //console.log("header",service)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-nav header-box">
      <Navbar color="light" light expand="lg" className="navbar-wrap-box-background">
        <NavbarBrand href="/">
          <div className="logo-box">
            <img src={icodelogo} alt="St Logo" />
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navbar-collapse-right">
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu>
                {service &&
                  service.map((item, i) => (
                    <DropdownItem key={i}>
                      <Link to={`/services/${item?.node?.Slug}`}>{item?.node.TitleMain}</Link>
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/technologies">Technologies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projectlist">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/blog">Blog</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Company
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink href="/aboutus">About</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/contact">Contact Us</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="#process">Process</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contact" className="button-hiring">
                Hire Developers
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default Header;



