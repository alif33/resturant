import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { getData } from "../../../../__lib__/helpers/HttpService";

const SearchShop = ({ searchInput, setSearchInput }) => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => {
  //   console.log(data.search);
  //   getData(`shops/s?search=${data.search}`).then((res) => console.log(res));
  // };

  // const debounce = (func) => {
  //   let timer;
  //   return function (...args) {
  //     const context = this;
  //     if (timer) clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       timer = null;
  //       func.apply(context, args);
  //     }, 300);
  //   };
  // };

  // const optimisedVersion = useCallback(debounce(changeInput), []);

  // const changeHangle = (e) => {
  //   optimisedVersion(e);
  // };

  console.log(searchInput);

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="d-flex align-items-center"
    >
      <div className="form-group ml-4">
        <input
          type="text"
          className="form-control"
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
