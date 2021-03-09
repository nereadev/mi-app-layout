import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container as="body">
      <Container fluid className="contenedor-general">
        <Col as="header" className="px-3 py-4">
          <Col as="h1" className="mb-0">Título</Col>
        </Col>
        <main className="d-md-flex flex-grow-1">
          <div className="principal px-3 py-4 col-md-8">
            <h2>Titular de la noticia</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque
            laboriosam
            repellat quasi voluptatum
            asperiores suscipit in iste unde. Sed temporibus aliquam quam rem illo
            asperiores
            dolore labore accusantium quo!
        </p>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum,
            autem
            veniam non at maxime, vero
            nobis
            accusamus officiis quia vitae explicabo! Rerum repellendus error sunt voluptatem
            harum? Libero, repellat?
        </p>
          </div>
          <div className="sidebar px-3 py-4 col-md-4">
            <h3>Categorías</h3>
            <ul className="list-unstyled">
              <li>Noticias de deporte</li>
              <li>Noticias de ocio</li>
              <li>Noticias de política</li>
              <li>Noiticias de espectáculos</li>
            </ul>
            <h3>Otras cosas</h3>
            <ul className="list-unstyled">
              <li>Nosequé</li>
              <li>Nosecuánto</li>
              <li className="mb-0">Talycual</li>
            </ul>
          </div>
        </main>
        <footer className="mb-0 px-3 py-4">
          <p className="mb-0 text-center"> Texto del footer</p>
        </footer>
      </Container>
    </Container >
  );
}

export default App;
