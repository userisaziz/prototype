import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import NavBar from "./Navbar";
import Contents from "../card/card";
class Content extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "30px",
          }}
        >
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
          <Contents toggle={this.toggle} />
        </div>
      </Container>
    );
  }
}

export default Content;
