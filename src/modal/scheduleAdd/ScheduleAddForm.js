import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authPost } from "../../../__lib__/helpers/HttpService";

const ScheduleAddForm = ({ setLoading, close, postUrl }) => {
  const router = useRouter();
  const { shopId } = router.query;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newData = { ...data, shop: shopId };
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE3ZDY4YWJiNjQ5ODExYTFiN2FiYzMiLCJuYW1lIjoiSmFoaWQiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1NTE2NjYwOSwiZXhwIjoxNjU3NzU4NjA5fQ.9SwaFI4kgXqdpoiuJN-LOr9zXNY6I0UNo7PGT4pEHU8`;

    authPost(postUrl, newData, token)
      .then((res) => {
        if (res.success) {
          toast.success(res.message);
          setLoading(true);
          close();
        }
        if (!res.success) {
          setLoading(true);
          toast.success(res.message);
          close();
        }
      })
      .catch((err) => {
        console.log(err);
        close();
      });
  };
  return (
    <form className="form-inline py-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="row w-100 justify-content-center ">
        <label className="text-lg mr-2">Day Select: </label>
        <select
          id="inputState"
          className="form-control"
          {...register("pic_day_name", { required: true })}
        >
          <option value="choose">Choose...</option>
          <option>...</option>
        </select>
        <label className="text-lg mr-2 ml-2">Name: </label>
        <input
          type="text"
          className="form-control mb-2 mr-sm-2"
          {...register("de_day_name", { required: true })}
        />
        <div className="col-12 text-center">
          {errors.pic_day_name && (
            <span className="ml-3">This field day required</span>
          )}
          {errors.de_day_name && (
            <span className="ml-3">This field naem required</span>
          )}
        </div>
      </div>

      <h3 className="text-center w-100 mt-4">Delivery</h3>

      <div className="row w-100 justify-content-center ">
        <label className="text-lg mr-2">Start: </label>
        <input
          type="time"
          className="form-control mb-2 mr-sm-2"
          {...register("de_s_time", { required: true })}
        />
        <label className="text-lg mr-2">End: </label>
        <div className="input-group mb-2 mr-sm-2">
          <input
            type="time"
            className="form-control"
            {...register("de_e_time", { required: true })}
          />
        </div>
        <div className="col-12 text-center">
          {errors.de_s_time && (
            <span className="ml-3">This field start required</span>
          )}
          {errors.de_e_time && (
            <span className="ml-3">This field end required</span>
          )}
        </div>
      </div>

      <h3 className="text-center w-100 mt-4">Pickup</h3>
      <div className="row w-100 justify-content-center ">
        <label className="text-lg mr-2">Start: </label>
        <input
          type="time"
          className="form-control mb-2 mr-sm-2"
          {...register("pic_s_time", { required: true })}
        />
        <label className="text-lg mr-2">End: </label>
        <div className="input-group mb-2 mr-sm-2">
          <input
            type="time"
            className="form-control"
            {...register("pic_e_time", { required: true })}
          />
        </div>
        <div className="col-12 text-center">
          {errors.de_s_time && (
            <span className="ml-3">This field start required</span>
          )}
          {errors.de_e_time && (
            <span className="ml-3">This field end required</span>
          )}
        </div>
      </div>

      <div className="text-center w-100 ">
        <button className="btn btn-sm btn-outline-primary mt-3">
          Add Schedule
        </button>
      </div>
    </form>
  );
};

export default ScheduleAddForm;
