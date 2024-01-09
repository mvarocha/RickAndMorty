import { useState } from "react";

function Search({ onSearch }) {

  const [inputValue, setInputValue] = useState('');

  function handleKeyPress(event) {
    if(event.key === "Enter"){
      handleSearchClick()
    }
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue.trim());
  };

  return (
    <div className="search-container">
      <input type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="search"
        onKeyDown={handleKeyPress}
        placeholder="Search" />
      <button className="search-button" onClick={handleSearchClick}>
        <img alt="pickle rick" className="pickle" src="https://i.pinimg.com/originals/5f/6a/10/5f6a10869ab466805aa8d3f70ceb3dfa.png"/>
      </button>
    </div>
  )
}

export default Search;