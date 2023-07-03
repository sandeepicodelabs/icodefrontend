import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';
import icodelogo from '../../assets/images/logo/icodelab-logo.png';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() { 
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<header className="header-nav header-box">
				<Navbar color="light" light expand="lg" className='navbar-wrap-box-background'>
					<NavbarBrand href="/">
						<div className="logo-box">
							<img src={icodelogo} alt="St Logo"/>
						</div>
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="#about">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#service">Services</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#technologies">Technologies</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#process">Process</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/blog">Blog</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/contact">Contact Us</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/contact" className="button-hiring">Hire Developers</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}