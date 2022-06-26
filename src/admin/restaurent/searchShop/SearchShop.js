import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { getData } from "../../../../__lib__/helpers/HttpService";

const SearchShop = ({ searchInput, setSearchInput }) => {
  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="d-flex align-items-center  w-100"
    >
      <div className="form-group ml-4 w-100">
        <input
          type="text"
          className="form-control w-100"
          placeholder="search with shop name"
          // {...register("search")}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {/* <button type="submit" className="btn btn-primary mb-0 ml-2 ml-4">
        Submit
      </button> */}
    </form>
  );
};

export default SearchShop;
