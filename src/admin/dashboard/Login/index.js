import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../../../store/admins/actions";

const LoginFrom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    console.log(data)
    dispatch(adminLogin({token: "", admin:data }))
  };
  const {admins} = useSelector(state => state)
  console.log(admins)

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
              {...register("dashboardEmail", { required: true })}
            />
             {errors.dashboardEmail && <span>This field is required</span>}
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
              {...register("dashboardPassword", { required: true })}
            />
             {errors.dashboardPassword && <span>This field is required</span>}
          </div>

          <div className="custom-control custom-checkbox mb-3 mt-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Check this custom checkbox
            </label>
          </div>

          <div className="text-center">
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
