import { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Breadcrumb, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="mt-6">
        <Container>
          <h1 className="head-h1">{this.props.heading}</h1>
          <Breadcrumb>
            <Link to="/">Головна</Link>
            <Breadcrumb.Item active> / {this.props.heading}</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    );
  }
}

// PropTypes validation
Header.propTypes = {
  heading: PropTypes.string.isRequired,
};
