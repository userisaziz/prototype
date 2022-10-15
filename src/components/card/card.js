import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

import classNames from "classnames";

class Contents extends React.Component {
  render() {
    return (
      <Card
        style={{
          width: "18rem",
          height: "18rem",
          margin: "0px,0px,0px,30px",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody
          style={{
            width: "18rem",
            height: "18rem",
          }}
          className={classNames("content", { "is-open": this.props.isOpen })}
        >
          <CardTitle tag="h5">Dasara Festival</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <span
            class="badge badge-pill badge-danger"
            style={{
              position: "absolute",
              bottom: "40px",
              left: "200px",
            }}
          >
            Rs-5000
          </span>
          <Button
            style={{
              margin: "-500px 00px 0px 170px",
            }}
          >
            Button
          </Button>
        </CardBody>
      </Card>
    );
  }
}

export default Contents;
