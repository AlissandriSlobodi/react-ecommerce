import { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class HeroImage extends Component {
  render() {
    return (
      <Container className="cont-pd p-5 cont-margin mb-6">
        <Row className="row ">
          <Col md={4} className="d-none d-md-flex justify-content-center">
            <div className="text-center">
              <h3 className="hero-img-h3">
                Замовляй найсвіжішу спаржу за оптовими цінами!
              </h3>
              <h1 className="hero-img-h1">100% екологічна</h1>
              <h6 className="hero-img-h6">
                ТОВ `Аспарагус-ЛТД `, Київська область
              </h6>
              <Link to="/shop">
                <Button className="shop-now-button mt-4">Замовити</Button>
              </Link>
            </div>
          </Col>
          <Col md={2} className="d-none d-md-flex justify-content-center">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="arrow-img"
            />
          </Col>
          <Col md={6} className="d-none d-md-flex justify-content-center">
            <div className="d-flex justify-content-center">
              <img
                className="hero-banner"
                src="/images/asp.png"
                alt="banner"
              />
            </div>
          </Col>
          {/* Для мобильных устройств */}
          <Col xs={12} className="d-md-none">
            <div className="text-center">
              <h3 className="hero-img-h3">
                Замовляй найсвіжішу спаржу за оптовими цінами!
              </h3>
              <h1 className="hero-img-h1">100% екологічна</h1>
              <h6 className="hero-img-h6">
                ТОВ `Аспарагус-ЛТД `, Київська область
              </h6>
              <Link to="/shop">
                <Button className="shop-now-button mt-4">Замовити</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
