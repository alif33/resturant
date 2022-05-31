import React from "react";

const LoginFrom = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="mb-4 text-center">Login</h5>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We&apos;ll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
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
