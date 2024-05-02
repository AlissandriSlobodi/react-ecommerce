import { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export default class Banner extends Component {
  render() {
    return (
      <div className="banner-image">
        <div className="banner-text">
          <h1 style={{ fontSize: "5.5em" }}>{this.props.heading}</h1>
        </div>
      </div>
    );
  }
}

// PropTypes validation
Banner.propTypes = {
  heading: PropTypes.string.isRequired,
};
