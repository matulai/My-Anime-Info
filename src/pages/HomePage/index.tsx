import RandomAnimes from '@/components/RandomAnimes';
import Genres from '@/components/Genres';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import '@/styles/PagesStyleBase.css';

const HomePage = () => {
  return (
    <div className="page-container">
      <div className="page-container-content">
        <Header />
        <Navbar />
        <div className="page-container-content-animesection">
          <RandomAnimes />
          <Genres />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
