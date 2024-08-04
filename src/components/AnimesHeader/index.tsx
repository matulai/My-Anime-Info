import './AnimesHeader.css';

const AnimesHeader = ({ title }) => {
  return (
    <div className="animes-header-container">
      <div className="animes-header-container-title">{title}</div>
    </div>
  );
};

export default AnimesHeader;
