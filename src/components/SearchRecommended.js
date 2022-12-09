import React from 'react';

function SearchRecommended({setSearchRecommend}){
    function handleChange(e){
        setSearchRecommend(e.target.value);
    };

    return(
        <div className="searchbar">
        
        <label 
            htmlFor="search">Search Recommended Anime:
        
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