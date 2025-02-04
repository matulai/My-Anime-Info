import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SearchIcon from '@/components/Icons/SearchIcon';
import './Search.css';

const Search = () => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState('');

  const onClick = () => {
    if (searchValue) {
      navigate(`/search/${searchValue}/1`);
    }
  };

  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div className="search-container">
      <input
        className="search-container-input"
        type="text"
        placeholder="Search Anime"
        onKeyDown={(e) => {
          onEnter(e);
        }}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchIcon color="#FFCC00" size={24} />
    </div>
  );
};

export default Search;
