import React, { useState } from 'react';
import "../style/Navbar.component.css";
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
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import Logohii from "../asset/hii_logo.png"
  import KUimg from "../asset/KUicon.png"

const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavbarComponent">
      <Navbar light expand="md">
        <NavbarBrand href="/">DrainKU</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="">Model</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Problem</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Objective</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Event</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">About Us</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText> */}
            <img className="imgLogohii" src={Logohii}/>
            <img className="imgLogoKU" src={KUimg}/> 
            {/* </NavbarText> */}
        </Collapse>
      </Navbar>
      </div>
  );
}

export default NavbarComponent;