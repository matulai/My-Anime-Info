import Search from '@/components/Search';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import Menu from '@/components/Menu';
import './Header.css';

const Header = () => {
  return (
    <>
      <Title />
      <div className="header-container-sub">
        <Menu />
        <div className="header-container-sub-navbar-view">
          <Navbar />
        </div>
        <Search />
      </div>
    </>
  );
};

export default Header;
