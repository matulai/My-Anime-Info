import Search from '@/components/Search';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-container-navs">
        <div className="navbar-container-navs-nav">Animes</div>
        <div className="navbar-container-navs-nav">Top Animes</div>
        <div className="navbar-container-navs-nav">Seasonal Animes</div>
        <div className="navbar-container-navs-nav">My List</div>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
