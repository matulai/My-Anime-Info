import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <Link to={`/`}>
        <h1 className="header-container-title">My Anime List</h1>
      </Link>
      <div className="header-container-buttons">
        <Button type="primary" title="Sing Up" />
        <Button type="secondary" title="Log In" />
      </div>
    </div>
  );
};

export default Header;
