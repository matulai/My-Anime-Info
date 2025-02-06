import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Link to={`/`}>
        <h1 className="header-container-title">My Anime Info</h1>
      </Link>
    </div>
  );
};

export default Header;
