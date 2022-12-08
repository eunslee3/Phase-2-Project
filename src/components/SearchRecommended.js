import React from 'react';

function SearchRecommended({setSearch}){
    function handleChange(e){
        setSearch(e.target.value);
    };

    return(
        <div className="searchbar">
        
        <label 
            htmlFor="search">Search R Anime:
        
        </label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          onChange={handleChange}
        />
        
      </div>
    )
}

export default SearchRecommended;