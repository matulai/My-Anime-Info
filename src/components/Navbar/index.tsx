import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { to: '/', label: 'Animes' },
    { to: '/top/anime', label: 'Top Animes' },
    { to: '/seasons', label: 'Seasonal Animes' },
    { to: '/random/animes', label: 'Random' },
  ];

  return (
    <div className="navbar-container">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.to}
          end={link.to == '/'}
          className={({ isActive }) =>
            isActive ? 'navbar-container-nav active' : 'navbar-container-nav'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
