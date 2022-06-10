import React from "react";
import { useForm } from "react-hook-form";

const AppShopTable = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("new");
    console.log(data);
  };
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="row">
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Status: </label>
                <select {...register("shopStatus", { required: true })}>
                  <option value="Onboarding">Onboarding</option>
                  <option value="Onboarding">Onboarding</option>
                </select>
              </div>
              {errors.shopStatus && <span>This field is required</span>}
            </div>
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Type: </label>
                <select {...register("shopPaid", { required: true })}>
                  <option value="Onboarding">Shop Paid</option>
                  <option value="Onboarding">Shop Paid</option>
                </select>
              </div>
              {errors.shopPaid && <span>This field is required</span>}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="contactEmail">Contact Email </label>
                <input
                  {...register("contactEmail", { required: true })}
                  id="contactEmail"
                  type="email"
                  placeholder="Example@gmail.com"
                />
              </div>
              {errors.contactEmail && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">Name </label>
                <input
                  {...register("res_name", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.res_name && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">chain </label>
                <select {...register("chain", { required: true })}>
                  <option value="chain">chain</option>
                  <option value="asdfas">easdfas</option>
                </select>
              </div>
              {errors.chain && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">Description </label>
                <textarea
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              {errors.description && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">Agreement Signed Date </label>
                <input
                  {...register("sign_date", { required: true })}
                  type="date"
                  placeholder="e.g. 2020-01-30"
                  aria-label="Disabled input example"
                />
              </div>
              {errors.sign_date && <span>This field is required</span>}
            </div>
          </div>
          {/* <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              <img
                src="/img/logo.png"
                alt="logo"
                className="logo w-100 h-auto"
              />
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Logo:</label>
              </div>
              <input type="file" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Landing Page Image: </label>
              </div>
              <input type="file" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Landing Page Image: </label>
              </div>
              <input type="file" />
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div>
                <label htmlFor="">
                  Update Desktop Background for Landing Page:{" "}
                </label>
              </div>
              <input type="file" />
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                  >
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div> */}
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Banner Text </label>
                <div className="banner-text">
                  <textarea
                    {...register("bannerText", { required: true })}
                    aria-label="Disabled input example"
                  ></textarea>
                  <p>
                    Add a message to the top of all the restaurant&apos;s pages
                  </p>
                </div>
                {errors.bannerText && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Account Manager: </label>
                <select {...register("accountManager", { required: true })}>
                  <option value="">Mia tv</option>
                  <option value="">Mia tv</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Sales Representive: </label>
                <select {...register("salesRepre", { required: true })}>
                  <option value="">Antony Pollotta</option>
                  <option value="">Antony Pollotta</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Menu Representive: </label>
                <select {...register("menuRepre", { required: true })}>
                  <option value="">Mjelima Borova</option>
                  <option value="">Mjelima Borova</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
            </div>
          </div>

          <button type="submit" >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AppShopTable;
