import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Animes' },
    { to: '/top/anime/1', label: 'Top Animes', matchPrefix: '/top/anime' },
    { to: '/seasons', label: 'Seasonal Animes', matchPrefix: '/seasons' },
    { to: '/random/animes', label: 'Random' },
  ];

  return (
    <div className="navbar-container">
      {navLinks.map((link, index) => {
        const isActive = link.matchPrefix
          ? location.pathname.startsWith(link.matchPrefix)
          : location.pathname === link.to;
        console.log(isActive, link.to, location);
        return (
          <NavLink
            key={index}
            to={link.to}
            className={
              isActive ? 'navbar-container-nav active' : 'navbar-container-nav'
            }
          >
            {link.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
