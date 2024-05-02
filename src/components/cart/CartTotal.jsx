import { Component } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes
import { cartTotal } from "../../redux/Products/products.action";

class CartTotal extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(cartTotal());
  }

  render() {
    const { cartTotalPrice, cart } = this.props.products;

    return (
      <div>
        <Container>
          <Table>
            <tbody>
              <tr className="table-row">
                <th className="total-heading">Сумма до сплати:</th>
                <td className="total-price">${cartTotalPrice}.00</td>
              </tr>
            </tbody>
          </Table>
          {cart.length !== 0 && (
            <div className="button-div">
              <Link to="/checkout">
                <Button className="cart-button">Замовити</Button>
              </Link>
            </div>
          )}
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

CartTotal.propTypes = {
  dispatch: PropTypes.func.isRequired, // Ensure 'dispatch' is a function and is required
  products: PropTypes.shape({
    cartTotalPrice: PropTypes.number.isRequired, // Ensure 'cartTotalPrice' is a number and is required
    cart: PropTypes.array.isRequired, // Ensure 'cart' is an array and is required
  }).isRequired,
};

const ConnectedCartTotal = connect(mapStateToProps)(CartTotal);
export default ConnectedCartTotal;