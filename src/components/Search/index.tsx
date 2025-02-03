import SearchIcon from '@/components/Icons/SearchIcon';
import './Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <input
        className="search-container-input"
        type="text"
        placeholder="Search Anime"
      />
      <SearchIcon color="#FFCC00" size={24} />
    </div>
  );
};

export default Search;
