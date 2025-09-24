import Search from '@/components/Search';
import Navbar from '@/components/Navbar';
import Title from '@/components/Title';
import './Header.css';

const Header = () => {
  return (
    <>
      <Title />
      <div className="header-container-sub">
        <Navbar />
        <Search />
      </div>
    </>
  );
};

export default Header;
