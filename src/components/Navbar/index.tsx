import { Link } from 'react-router-dom';
import Search from '@/components/Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-navs">
        <Link to="/" className="navbar-container-navs-nav">
          Animes
        </Link>
        <Link to="/" className="navbar-container-navs-nav">
          Top Animes
        </Link>
        <Link to="/" className="navbar-container-navs-nav">
          Seasonal Animes
        </Link>
        <Link to="/" className="navbar-container-navs-nav">
          My List
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
