import React from "react";
import Header from "../shop/Header";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "../shop/Banner";
import CheckoutForm from "./CheckoutForm";
import OrderDetails from "./OrderDetails";
import ReviewModal from "./ReviewModal";
import { connect } from "react-redux";
import { clearAll } from "../../redux/Products/products.action";

function Checkout(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Banner heading="Кошик" />
      <Header heading="Замовлення" />
      <Container className="mt-5">
        <Row>
          <Col>
            <CheckoutForm onShow={() => setModalShow(true)} />
          </Col>
          <Col>
            <OrderDetails />
          </Col>
        </Row>
        <ReviewModal
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            props.dispatch(clearAll());
          }}
        />
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(Checkout);
