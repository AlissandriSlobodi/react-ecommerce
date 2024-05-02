import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container className="cont-pd p-5 cont-margin mb-6">
          <Row className="row ">
            <Col className="">
              <h2 className="about-us-h2">Чому варто довіряти</h2>
              <h1 className="shop-now-h1">Asparagus LTD</h1>
              <p className="shop-now-p mt-4">
                Ми є найбільшим постачальником спаржі в Україні! Ми самі
                вирощуємо найсвіжішу та найсмачнішу спаржу в органічних умовах
                без стимуляторів росту та пестицидів! Вся наша продукція
                сертифікована та відповідає міжнародним стандартам! Тож ви
                можете бути певними у якості нашого продукту. Ви отримаєте
                замовлення прямісінько з поля тож жоден вітамінчик не буде
                втрачено!
              </p>
            </Col>
            <Col>
              <img className="img-asp" src="./public/images/aspp.png" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
