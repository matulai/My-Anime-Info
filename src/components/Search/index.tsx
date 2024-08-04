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
      <SearchIcon />
    </div>
  );
};

export default Search;
