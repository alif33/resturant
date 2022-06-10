import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../../../store/admins/actions";
import { setSessionStorage } from "../../../../utils/setSession";

const LoginFrom = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // console.log(data);
    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: data.dashboardEmail,
      password: data.dashboardPassword,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/api/admin/login", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setSessionStorage(JSON.stringify(res.token));
          dispatch(adminLogin({ token: res.token, admin: res }));
          router.push("/dashboard");
        }
      })
      .catch((error) => console.log("error", error));
  };
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
