import { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes

import { connect } from "react-redux";
import Banner from "./Banner";
import Header from "./Header";
import ProductList from "./ProductList";

class Shop extends Component {
  render() {
    const { products } = this.props.products;
    console.log("cart", this.props.products.cart);
    return (
      <div>
        <Banner heading="Замовляй та смакуй" />
        <Header heading="Спаржа" />
        <ProductList products={products} />
      </div>
    );
  }
}

// PropTypes validation
Shop.propTypes = {
  products: PropTypes.shape({
    products: PropTypes.array.isRequired,
    cart: PropTypes.array.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const ConnectedShop = connect(mapStateToProps)(Shop);
export default ConnectedShop;