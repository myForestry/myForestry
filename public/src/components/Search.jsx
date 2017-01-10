import React from 'react';

const Search = (props) => {
  return (
    <form className="app-search">
      <div className="form-group">
        <label htmlFor="button">What are you looking for?</label>
        <input type="text" placeholder="Tree planting, pinestraw, etc..." className="form-control" />
      </div>
      <div className="app-search__button">
        <button className="btn btn-primary btn-block">Search</button>
      </div>
    </form>
  );
};

Search.displayName = 'Search';

Search.propTypes = {};

export default Search;
