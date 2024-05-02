import { Component } from "react";
import Banner from "../shop/Banner";
import Header from "../shop/Header";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
class Cart extends Component {
  render() {
    return (
      <div>
        <Banner heading="Кошик" />
        <Header heading="Замовлення" />
        <CartList />
        <CartTotal />
      </div>
    );
  }
}

export default Cart;
