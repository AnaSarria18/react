
function Header() {
    return (
        <React.Fragment>
          
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid  color2">
    <a class="navbar-brand" href="#">Inicio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Menú </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Notificaciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Información</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </React.Fragment>
    );
}
function Content() {
  return (
      <React.Fragment>
        <br></br>
        <article className="displayflex">
        <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597198399495-ff26429c4ad9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis vel, iste delectus aliquam eius laudantium veritatis suscipit qui eos possimus voluptatibus ratione et eaque! Fugiat, dolor. Exercitationem, cum quibusdam!</p>
                  
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597198399495-ff26429c4ad9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis vel, iste delectus aliquam eius laudantium veritatis suscipit qui eos possimus voluptatibus ratione et eaque! Fugiat, dolor. Exercitationem, cum quibusdam!</p>
                  
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597198399495-ff26429c4ad9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis vel, iste delectus aliquam eius laudantium veritatis suscipit qui eos possimus voluptatibus ratione et eaque! Fugiat, dolor. Exercitationem, cum quibusdam!</p>
                  
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src="https://images.unsplash.com/photo-1597198399495-ff26429c4ad9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Imagen de ejemplo" />
              <div className="card-body">
                  <h5 className="card-title">Computadora</h5>
                  <p className="card-text">Especificaciones</p>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio facilis vel, iste delectus aliquam eius laudantium veritatis suscipit qui eos possimus voluptatibus ratione et eaque! Fugiat, dolor. Exercitationem, cum quibusdam!</p>
                  
              </div>
          </div>

          
        </article>
        <br></br>
        
      </React.Fragment>
  );
}


function Footer() {
  return (
      <React.Fragment>
        <br></br>
          <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Contacto</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Instagram</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Términos</a>
  </li>
  
</ul>
<br></br>
      </React.Fragment>
  );
}
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
    root.render(
        <>
        <Header/>
        <Content/>
        <Content/>
        <Footer/>
        </>
    );
