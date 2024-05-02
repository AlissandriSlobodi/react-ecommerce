import { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";


export default class Footer extends Component {
  render() {
    return (
      <div className="mt-5">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Nav>
              <Navbar.Text>
                © Asparagus made with love by AlissandriSlobodi.
              </Navbar.Text>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
