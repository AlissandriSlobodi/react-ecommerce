import { Component } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Card, Button } from "react-bootstrap";
import { addToCart } from "../../redux/Products/products.action";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedToCart: false, // Изначально кнопка не была нажата
    };
  }

  handleAddCart = () => {
    const { product, dispatch } = this.props;
    dispatch(addToCart(product.id));
    // После добавления в корзину устанавливаем состояние addedToCart в true
    this.setState({ addedToCart: true });
  };

  render() {
    const { product } = this.props;
    const { addedToCart } = this.state;
    return (
      <div>
        <Card className="card">
          <Card.Img variant="top" src={product.img} />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{product.name}</Card.Title>
            <Card.Text className="card-text">{product.description}</Card.Text>
            <h3 className="card-price">{product.price}.00 грн</h3>
            {/* Проверяем состояние addedToCart, чтобы определить, какую кнопку отображать */}
            {addedToCart ? (
              <Button
                className="card-button mt-3 mb-2"
                disabled
                variant="success"
              >
                У кошику
              </Button>
            ) : (
              <Button
                className="card-button mt-3 mb-2"
                onClick={this.handleAddCart}
                variant="primary"
              >
                Додати
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

// PropTypes validation
Product.propTypes = {
  product: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const ConnectedProduct = connect(mapStateToProps)(Product);
export default ConnectedProduct;
