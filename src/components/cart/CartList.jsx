import { Component } from "react";
import { Container, Table, CloseButton } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types"; // Import PropTypes
import {
  increaseQty,
  removeFromCart,
  decreaseQty,
  cartTotal,
} from "../../redux/Products/products.action";

class CartList extends Component {
  handleClose(id) {
    const { dispatch } = this.props;
    dispatch(removeFromCart(id));
    dispatch(cartTotal());
  }

  handleIncreaseQty(id) {
    const { dispatch } = this.props;
    dispatch(increaseQty(id));
    dispatch(cartTotal());
  }

  handleDecreaseQty(id) {
    const { dispatch } = this.props;
    dispatch(decreaseQty(id));
    dispatch(cartTotal());
  }

  render() {
    const { cart } = this.props.products;

    return (
      <div>
        <Container>
          {cart.length === 0 && <h5 className="cart-empty">Кошик порожній</h5>}
          <Table size="sm">
            <tbody>
              {cart.map((product) => (
                <tr className="table-row" key={product.id}>
                  <td className="table-block">
                    <img
                      className="cart-product-img"
                      src={product.img}
                      alt="product"
                    />
                  </td>
                  <td className="table-block">
                    <span className="cart-product-name">{product.name}</span>
                  </td>
                  <td className="table-block">
                    <span className="cart-product-price">
                      {product.price}.00 грн
                    </span>
                  </td>
                  <td className="table-block">
                    <div
                      className="value-button"
                      id="decrease"
                      onClick={() => this.handleDecreaseQty(product.id)}
                      value="Decrease Value"
                    >
                      -
                    </div>
                    <input
                      readOnly
                      type="number"
                      id="number"
                      value={product.qty}
                    />
                    <div
                      className="value-button"
                      id="increase"
                      onClick={() => this.handleIncreaseQty(product.id)}
                      value="Increase Value"
                    >
                      +
                    </div>
                  </td>
                  <td className="table-block">
                    <span className="cart-product-price">
                      {product.qty * product.price}.00 грн
                    </span>
                  </td>
                  <td className="table-block">
                    <CloseButton
                      aria-label="Hide"
                      className="cart-product-close"
                      onClick={() => this.handleClose(product.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

CartList.propTypes = {
  dispatch: PropTypes.func.isRequired, // Ensure 'dispatch' is a function and is required
  products: PropTypes.shape({
    cart: PropTypes.array.isRequired, // Ensure 'cart' is an array and is required
  }).isRequired,
};

const ConnectedCartList = connect(mapStateToProps)(CartList);
export default ConnectedCartList;
