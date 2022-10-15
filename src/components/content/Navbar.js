import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

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
          <div style={{ margin: "0px 0px 0px 20px" }}>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
              <label class="btn btn-secondary active">
                <input type="radio" name="options" id="option1" /> My Projects
              </label>
              <label class="btn btn-secondary">
                <input type="radio" name="options" id="option2" /> Explore
              </label>
            </div>
          </div>
          <Nav className="ml-auto" navbar>
            <nav class="navbar navbar-light ">
              <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-dark my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </nav>

            <ul class="nav" />
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                style={{
                  textAlign: "center",
                }}
              >
                Active
              </a>
            </li>

            <NavItem>
              <img
                src="https://i.ibb.co/zxTrDFk/profileimg.jpg"
                alt="User photo"
                class="user-nav__user-photo"
                width={"60px"}
                style={{
                  borderRadius: "100%",
                }}
              />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
