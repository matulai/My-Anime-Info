import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <h1 className="header-container-title">My Anime List</h1>
      <div className="header-container-buttons">
        <button className="header-button header-container-buttons-singUp">
          Sing Up
        </button>
        <button className="header-button header-container-buttons-logIn">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Header;
