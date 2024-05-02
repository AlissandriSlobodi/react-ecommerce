import { Component } from "react";
import { connect } from "react-redux";
import { Container, Table } from "react-bootstrap";
class ShippingDetails extends Component {
  render() {
    const { contactDetails } = this.props.products;

    return (
      <Container>
        <h3 className="cart-h3">Ваші дані</h3>
        <Table>
          <tbody>
            <tr className="table-row">
              <th className="total-heading">Ім`я</th>
              <td className="total-price">
                {contactDetails["First Name"]} {contactDetails["Last Name"]}
              </td>
            </tr>
            <tr className="table-row">
              <th className="total-heading">Пошта</th>
              <td className="total-price">{contactDetails["Email"]}</td>
            </tr>
            <tr className="table-row">
              <th className="total-heading">Телефон</th>
              <td className="total-price">{contactDetails["Mobile Number"]}</td>
            </tr>
            <tr className="table-row">
              <th className="total-heading">Адреса</th>
              <td className="total-price">
                {contactDetails["Address"]}, {contactDetails["City"]},{" "}
                {contactDetails["State"]}({contactDetails["Zip"]})
              </td>
            </tr>
          </tbody>
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
export default connect(mapStateToProps)(ShippingDetails);
