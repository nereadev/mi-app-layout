function App() {
  return (
    <div class="contenedor-general container d-flex flex-column h-100 px-0">
      <header class="px-3 py-4">
        <h1 class="mb-0">Título</h1>
      </header>
      <main class="d-md-flex flex-grow-1">
        <div class="principal px-3 py-4 col-md-8">
          <h2>Titular de la noticia</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio itaque
          laboriosam
          repellat quasi voluptatum
          asperiores suscipit in iste unde. Sed temporibus aliquam quam rem illo
          asperiores
          dolore labore accusantium quo!
        </p>
          <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum,
          autem
          veniam non at maxime, vero
          nobis
          accusamus officiis quia vitae explicabo! Rerum repellendus error sunt voluptatem
          harum? Libero, repellat?
        </p>
        </div>
        <div class="sidebar px-3 py-4 col-md-4">
          <h3>Categorías</h3>
          <ul class="list-unstyled">
            <li>Noticias de deporte</li>
            <li>Noticias de ocio</li>
            <li>Noticias de política</li>
            <li>Noiticias de espectáculos</li>
          </ul>
          <h3>Otras cosas</h3>
          <ul class="list-unstyled">
            <li>Nosequé</li>
            <li>Nosecuánto</li>
            <li class="mb-0">Talycual</li>
          </ul>
        </div>
      </main>
      <footer class="mb-0 px-3 py-4">
        <p class="mb-0 text-center"> Texto del footer</p>
      </footer>
    </div>
  );
}

export default App;
