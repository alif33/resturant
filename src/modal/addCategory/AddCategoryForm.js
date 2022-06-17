import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { postReq } from "../../../__lib__/helpers/HttpService";

const AddCategoryForm = ({ dropdown, setDropdown, close }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    postReq(`/admin/category`, data).then((res) => {
      // console.log(res);
      if (res.success) {
        toast.success(res.message);
        reset();
        setDropdown(!dropdown);
        close();
      }
    });
  };
  return (
    <div className=" w-100">
      <div className="card-body">
        <h5 className="mb-4">Add New Category</h5>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mt-3">
            <label htmlFor="inputEmail4">categoryName</label>
            <input
              type="text"
              className="form-control"
              {...register("categoryName", { required: true })}
            />
            {errors.categoryName && (
              <span className="text-danger">This field day required</span>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="inputEmail4">description</label>
            <textarea
              className="form-control"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-danger">This field day required</span>
            )}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="inputEmail4">catalog_category</label>
            <input
              type="text"
              className="form-control"
              {...register("catalog_category", { required: true })}
            />
            {errors.catalog_category && (
              <span className="text-danger">This field day required</span>
            )}
          </div>

          <div className="text-center">
            <button className="btn btn-sm btn-outline-primary mt-3">
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryForm;
