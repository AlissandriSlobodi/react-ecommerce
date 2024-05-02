import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom"; // Используем NavLink вместо Link

class Navigation extends React.Component {
  render() {
    const count = this.props.products.cart.length;
    return (
      <div>
        <Navbar className="navbar" fixed="top" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink
                  className="link"
                  activeClassName="active" // Добавляем activeClassName
                  exact // Используем exact для точного соответствия пути
                  to="/"
                >
                  Головна
                </NavLink>
                <NavLink
                  className="link"
                  activeClassName="active" // Добавляем activeClassName
                  to="/shop"
                >
                  Замовити
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <NavLink to="/" className="brand-logo">
              <img src="/images/Asparagus.svg" alt="site logo" />
            </NavLink>
            <NavLink to="/cart">
              <div className="cart-div">
                <FontAwesomeIcon icon={faShoppingBag} className="cart-icon" />
                {count > 0 ? <span className="icon-span">{count}</span> : ""}
              </div>
            </NavLink>
          </Container>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  products: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const ConnectedNavigation = connect(mapStateToProps)(Navigation);
export default ConnectedNavigation;
