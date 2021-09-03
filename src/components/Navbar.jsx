import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div id="item-separacion" class="container">
        <Link class="navbar-brand text-white fw-bold" to="/">
          Hackflix
        </Link>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars text-white"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link
                class="nav-link active dropdown-menu-end text-white fw-bold"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active dropdown-menu-end text-white fw-bold"
                aria-current="page"
                to="sobre-nosotros"
              >
                Sobre nosotros
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active dropdown-menu-end text-white fw-bold"
                aria-current="page"
                to="contacto"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
