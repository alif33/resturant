import React, { useCallback } from "react";

const SearchShop = ({ inputSearch, setInputSearch, changeInput }) => {
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const optimisedVersion = useCallback(debounce(changeInput), []);

  const changeHangle = (e) => {
    optimisedVersion(e);
    setInputSearch(e.target.value);
  };

  return (
    <form className="d-flex align-items-center">
      <div className="form-group ml-4">
        <input
          type="text"
          className="form-control"
          placeholder="search with shop name"
          value={inputSearch}
          onChange={changeHangle}
        />
      </div>
      <button type="submit" className="btn btn-primary mb-0 ml-2 ml-4">
        Submit
      </button>
    </form>
  );
};

export default SearchShop;
