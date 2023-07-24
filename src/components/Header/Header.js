import React, { Component } from 'react';
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
					<Collapse isOpen={this.state.isOpen} navbar className='navbar-collapse-right'>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/aboutus">About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/blog">Blog</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/contact">Contact Us</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Services
								</DropdownToggle>
								<DropdownMenu right>
									{/* {service.map((item, i)=>{
									return(
										<DropdownItem>
											<NavLink href="/projectlist">Project List</NavLink>
										</DropdownItem>
									)
									})} */}
								</DropdownMenu>
							</UncontrolledDropdown>

							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Company
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>
										<NavLink href="/projectlist">Project List</NavLink>
									</DropdownItem>
									<DropdownItem>
										<NavLink href="#technologies">Technologies</NavLink>
									</DropdownItem>
									<DropdownItem>
										<NavLink href="#process">Process</NavLink>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
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