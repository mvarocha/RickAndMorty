import React, { useState } from 'react';
import './App.css';
import CharactersList from './components/charactersList';
import Pagination from './components/pagination';
import Search from './components/search';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const [pageValue, setPageValue] = useState('');
  const [pageLimitValue, setPageLimitValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handlePage = (value) => {
    setPageValue(value);
  }

  const handlePageLimit = (value) => {
    setPageLimitValue(value)
  }

  const reload = (value) => {
    window.location.reload()
  }

  return (
    <div className="App">
      <img alt='logo' className='logo' src='https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png' onClick={reload}/>
      <Search onSearch={handleSearch} />
      <CharactersList searchValue={searchValue} pageValue={pageValue} pageLimit={handlePageLimit} />
      <Pagination onChangePage={handlePage} pageLimitValue={pageLimitValue} />
    </div>
  );
}

export default App;
