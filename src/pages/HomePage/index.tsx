import RandomAnimes from '@/components/RandomAnimes';
import Genres from '@/components/Genres';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-container-content">
        <Header />
        <Navbar />
        <div className="homepage-container-content-animesection">
          <RandomAnimes />
          <Genres />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
