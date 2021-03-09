import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container className="contenedor-total">
      <Col fluid className="contenedor-general p-0 h-100">
        <Row as="header" className="px-3 py-4">
          <Col as="h1" className="mb-0">Título</Col>
        </Row>
        <Row>
          <Col md={8} className="principal px-3 py-4">
            <Row as="h2" className="px-3">Titular de la noticia</Row>
            <Row as="p" className="px-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque
            laboriosam
            repellat quasi voluptatum
            asperiores suscipit in iste unde. Sed temporibus aliquam quam rem illo
            asperiores
            dolore labore accusantium quo!
            </Row>
            <Row as="p" className="mb-0 px-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum,
            autem
            veniam non at maxime, vero
            nobis
            accusamus officiis quia vitae explicabo! Rerum repellendus error sunt voluptatem
            harum? Libero, repellat?
            </Row>
          </Col>
          <Col md={4} className="sidebar px-3 py-4">
            <Row as="h3" className="px-3">Categorías</Row>
            <Row as="ul" className="list-unstyled">
              <Col lg={12}>Noticias de deporte</Col>
              <Col lg={12}>Noticias de ocio</Col>
              <Col lg={12}>Noticias de política</Col>
              <Col lg={12}>Noiticias de espectáculos</Col>
            </Row>
            <Row as="h3" className="px-3">Otras cosas</Row>
            <Row as="ul" className="list-unstyled">
              <Col lg={12}>Nosequé</Col>
              <Col lg={12}>Nosecuánto</Col>
              <Col lg={12} className="mb-0">Talycual</Col>
            </Row>
          </Col>
        </Row>
        <Row as="footer" className="mb-0 px-3 py-4">
          <Col className="mb-0 text-center"> Texto del footer</Col>
        </Row>
      </Col>
    </Container >
  );
}

export default App;
