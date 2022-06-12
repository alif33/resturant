import React from "react";

const SearchShop = () => {

    
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="mb-4">Basic</h5>
        <form>
          <div className="row">
            <div className="col-10">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="search with shop name"
                />
              </div>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-primary mb-0">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchShop;
