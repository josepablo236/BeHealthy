import React from 'react';
import Logo from '../img/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" width="220" height="70" className="d-inline-block align-text-center"/>
          </a>
          <button className="navbar-toggler menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <MenuIcon className="icono" color="primary"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="servicios">Servicios y asesorias</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     );
}
 
export default NavBar;