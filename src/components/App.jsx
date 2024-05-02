import Navigation from "./Navigation";
import { Routes, Route } from "react-router-dom"; // Импортируем Routes и Route
import Home from "./home/Home";
import Shop from "./shop/Shop";
import Footer from "./Footer";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        {" "}
        {/* Оберните ваши маршруты внутри элемента Routes */}
        <Route path="/shop" element={<Shop />} />{" "}
        {/* Используйте Shop как элемент */}
        <Route exact path="/" element={<Home />} />{" "}
        {/* Используйте Home как элемент */}
        <Route path="/cart" element={<Cart />} />{" "}
        {/* Используйте Cart как элемент */}
        <Route path="/checkout" element={<Checkout />} />{" "}
        {/* Используйте Checkout как элемент */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
