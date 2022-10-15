import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <a color="info" onClick={this.props.toggle} style={{ color: "#fff" }}>
            &times;
          </a>
          <h3>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> logo
          </h3>
        </div>
        <Nav vertical className="list-unstyled pb-3">
          <p>Dummy Heading</p>

          <NavItem>
            <NavLink href="#">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Dashboard
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              Earnings
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Profile
            </NavLink>
          </NavItem>
          <SubMenu
            title="Support"
            icon={faCopy}
            items={["Contact us", "FAQ"]}
          />
        </Nav>
      </div>
    );
  }
}

export default SideBar;
