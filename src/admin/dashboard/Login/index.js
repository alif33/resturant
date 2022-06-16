import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../../../store/admins/actions";
import { postData } from "../../../../__lib__/helpers/HttpService";
import Cookies from "universal-cookie";
import toast from "react-hot-toast";

const LoginFrom = () => {
  const [disable, setDisable] = useState(false);
  const cookies = new Cookies();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setDisable(true);
    postData(`admin/login`, data, setDisable).then((res) => {
      console.log(res);
      if (res.success) {
        dispatch(adminLogin(res.admin));
        cookies.set("_admin", res.token, { path: "/" });
        toast.success(res.message);
      }
    });
  };

  console.log(cookies.get("myCat"));

  const { admins } = useSelector((state) => state);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="mb-4 text-center">Login</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="dashboardEmail">Email address</label>
            <input
              type="email"
              className="form-control"
              id="dashboardEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}

            <small id="emailHelp" className="form-text text-muted">
              We&apos;ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="dashboardPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="dashboardPassword"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          {/* 
          <div className="custom-control custom-checkbox mb-3 mt-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Check this custom checkbox
            </label>
          </div> */}

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary mb-0 m-auto">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginFrom;
