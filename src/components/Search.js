import React from "react";

function Search({searchQuery, setSearchQuery}) {

  function handleChange(event){
    console.log(event.target.value)
    setSearchQuery(event.target.value)
  }


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        vlaue={searchQuery}
        onChange={handleChange}

      />
    </div>
  );
}

export default Search;
