import { Link } from 'react-router-dom';
import Search from '@/components/Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-navs">
        <Link to="/">
          <div className="navbar-container-navs-nav">Animes</div>
        </Link>
        <Link to="/">
          <div className="navbar-container-navs-nav">Top Animes</div>
        </Link>
        <Link to="/">
          <div className="navbar-container-navs-nav">Seasonal Animes</div>
        </Link>
        <Link to="/">
          <div className="navbar-container-navs-nav">My List</div>
        </Link>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
