import React from 'react';
import { Link } from 'react-router-dom'

function Search({setSearch}){
    function handleChange(e){
        setSearch(e.target.value);
    };

    return(
      <div className="nav">
          <div className="searchbar">
              <input
                className="search-input"
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={handleChange}
              /> 
          </div>
          <Link to="/searchresults">
            <input id="link-btn" value="Search" className="link-button" type="submit"></input>
          </Link>
      </div>
    )
}

export default Search;