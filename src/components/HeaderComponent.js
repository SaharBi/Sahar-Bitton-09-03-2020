import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <div>
<Navbar color="warning" dark expand="md">
    <div className="container">
    
<NavbarBrand className="mr-auto" href="main"><img src={logo} height="50" width="50" alt="logo" /> SBWeather</NavbarBrand>
<NavbarToggler onClick={this.toggleNav} />
<Collapse isOpen={this.state.isNavOpen} navbar>
<Nav navbar className="ml-auto">

    <NavItem>
    <NavLink className="nav-link" to="/main">
    <span className=" fa fa-home fa-lg"></span> Main
    </NavLink>
    </NavItem>
    <NavItem>
    <NavLink className="nav-link" to="/favorites">
    <span className=" fa fa-star fa-lg"></span> Favorites
    </NavLink>
    </NavItem>
</Nav>
</Collapse>
</div>
  </Navbar>
            </div>
        )
    }
}
