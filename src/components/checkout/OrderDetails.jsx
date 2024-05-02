import { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Container, Table } from "react-bootstrap";
import { connect } from "react-redux";

class OrderDetails extends Component {
  render() {
    const { cart } = this.props.products;
    const total = this.props.products.cartTotalPrice;

    return (
      <Container>
        <h3 className="cart-h3">Ваше замовлення</h3>
        <Table>
          <thead>
            <tr>
              <th>Назва товару</th>
              <th>Кількість</th>
              <th>Ціна</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.qty}</td> <td>{item.price}.00 грн</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2" style={{ color: "maroon" }}>
                Всього до сплати:
              </td>
              <td style={{ color: "maroon" }}>{total}.00 грн</td>
            </tr>
          </tfoot>
        </Table>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

OrderDetails.propTypes = {
  products: PropTypes.shape({
    cart: PropTypes.array.isRequired,
    cartTotalPrice: PropTypes.number.isRequired,
  }).isRequired, // Ensure 'products' is an object with 'cart' and 'cartTotalPrice' properties
};

const ConnectedOrderDetails = connect(mapStateToProps)(OrderDetails);
export default ConnectedOrderDetails;
