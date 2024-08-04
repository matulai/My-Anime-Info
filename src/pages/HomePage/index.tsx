import RandomAnimes from '@/components/RandomAnimes';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-container-content">
        <Header />
        <Navbar />
        <div className="homapage-container-content-animesection">
          <RandomAnimes />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
