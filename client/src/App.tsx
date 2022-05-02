import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Home />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
