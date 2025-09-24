import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); // Obtiene la ruta actual

  const navLinks = [
    { to: '/', label: 'Animes' },
    { to: '/top/anime/1', label: 'Top Animes' },
    { to: '/seasons', label: 'Seasonal Animes' },
    { to: '/randomAnimes', label: 'Random' },
  ];

  return (
    <div className="navbar-container">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.to}
          className={`navbar-container-nav ${
            location.pathname === link.to ? 'active' : ''
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
