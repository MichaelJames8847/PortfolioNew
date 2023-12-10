import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap';
import './NavMenu.css';

export const NavMenu = () => {

  return (
      <Navbar className="navbar-main" dark expand="md">
        <NavbarBrand>Michael James</NavbarBrand>
          <Nav navbar className='ml-auto'>
            <NavLink tag={RRNavLink} to="/" activeclassname="active">Home</NavLink>
            <NavLink tag={RRNavLink} to="/blog" activeclassname="active">Blogs</NavLink>
            <NavLink tag={RRNavLink} to="/about" activeclassname="active">About Me</NavLink>
          </Nav>
      </Navbar>
  );
}
