import React from "react";
import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import "./Content/navbar.style.css";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen, // navbar collapse
    });
  }

  render() {
    return (
      <Navbar
        color="light"
        light
        className="navbar shadow-sm p-3 mb-5 bg-white rounded"
        expand="md"
      >
        <Button color="info" onClick={this.props.toggle}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <input
                class="search_input"
                type="text"
                name=""
                placeholder="Search..."
              />
              <a href="/" class="search_icon">
                <i class="fas fa-search"></i>
              </a>
            </NavItem>
            <NavItem>
              <NavLink href="#">page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">page</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">page</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
