import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { authPost, postData } from "../../../../__lib__/helpers/HttpService";

const AppShopTable = () => {
  const [loading, setLoading] = useState(false);
  const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhmMzNmYWZlMGI5YTBhN2I5NzgzZjQiLCJuYW1lIjoiSmFoaWQiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY1NDkyNDMwOSwiZXhwIjoxNjU3NTE2MzA5fQ.pG_hFpwwRUzSjk0wvUHhwMWRPxyLUZNAqhUYSr8loXo`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    authPost(`admin/shop`, data, token).then((res) => console.log(res));
  };
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Status: </label>
                <select {...register("shop_status", { required: true })}>
                  <option value="Live">Live</option>
                  <option value="Temporarily">Temporarily</option>
                  <option value="M2M">M2M</option>
                  <option value="Disabled">Disabled</option>
                </select>
              </div>
              {errors.shopStatus && <span>This field is required</span>}
            </div>
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">payment type: </label>
                <select {...register("payment_type", { required: true })}>
                  <option value="Direct">Direct</option>
                  <option value="Deposit">Deposit</option>
                </select>
              </div>
              {errors.shopPaid && <span>This field is required</span>}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="shop_name">shop_name</label>
                <input
                  {...register("shop_name", { required: true })}
                  id="shop_name"
                />
              </div>
              {errors.shop_name && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">Name </label>
                <input
                  {...register("res_name", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.res_name && <span>This field is required</span>}
              <div className="border-bottom"></div>
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
                  <input {...register("shop_logo",)} type="text" />
                </div>
              </div>
              <div className="form-group-two">
                <label htmlFor="">web_header </label>
                <input
                  {...register("web_header", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.web_header && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">mobile_header </label>
                <input
                  {...register("mobile_header", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.mobile_header && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">account_manager </label>
                <input
                  {...register("account_manager", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.mobile_header && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">sales_rep </label>
                <input
                  {...register("sales_rep", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.sales_rep && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">menu_rep </label>
                <input
                  {...register("menu_rep", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.menu_rep && <span>This field is required</span>}
              <div className="form-group-two">
                <label htmlFor="">email_statement </label>
                <input
                  {...register("email_statement", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.email_statement && <span>This field is required</span>}
            </div>
          </div>
          <div className="border-bottom"></div>
          {/* payment part */}
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Payout frequency </label>
                <select
                  {...register("payment_frequency")}
                  aria-label="Disabled input example"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Biweekly">Biweekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              {errors.payment_frequency && <span>This field is required</span>}
            </div>

            <div className="col-md-12">
              <div className="border-bottom mb-3"></div>
              <h4>MealNow Fees</h4>
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Flat Fee </label>
                <input
                  {...register("flat_fee")}
                  type="tel"
                  aria-label="Disabled input example"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">End Trial</label>
                <input
                  {...register("trial_end")}
                  type="text"
                  placeholder="40"
                  aria-label="Disabled input example"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Percentage fee </label>
                <input
                  {...register("processing_fee")}
                  type="text"
                  placeholder="40"
                  aria-label="Disabled input example"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="border-bottom mb-3"></div>
              <h4>Transmission Method</h4>
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Contact Method </label>
                <select {...register("contact_method")}>
                  <option value="Phone">Phone</option>
                  <option value="Sms">Sms</option>
                  <option value="Email">Email</option>
                  <option value="Tablet">Tablet</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>

          {/* web site details */}

          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Gmb Domain</label>
                <input {...register("gmb_domain")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Own Website </label>
                <input {...register("own_website")} type="text" />
              </div>

              {/* <div className="form-group-two">
                <label htmlFor="">Price Range</label>
                <input {...register("priceRange")} type="text" />
              </div> */}

              <div className="form-group-two">
                <label htmlFor="">Gmb Status </label>
                <select {...register("gmb_status")}>
                  <option value="Varified">Varified</option>
                  <option value="Not Verified">Not Verified</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Gmb Role </label>
                <select {...register("gmb_role")}>
                  <option value="Primary Owner">Primary Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Owner">Owner</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">meal now domain</label>
                <input {...register("meal_now_domain")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Gmb Email</label>
                <input {...register("gmb_email")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">gmb Password</label>
                <input {...register("gmb_password")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">gmb owner</label>
                <select {...register("gmb_owner")}>
                  <option value="Competitor">Competitor</option>
                  <option value="Meal Now">Meal Now</option>
                </select>
              </div>

              <div className="form-group-two">
                <label htmlFor="">Shops Address</label>
                <input {...register("shop_address")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">city</label>
                <input {...register("city")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">state</label>
                <input {...register("state")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">zipCode</label>
                <input {...register("zip_code")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">lat</label>
                <input {...register("lat")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">long</label>
                <input {...register("long")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">timeZone</label>
                <input {...register("time_zone")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Owner Email</label>
                <input {...register("owners_email")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">owners phone</label>
                <input {...register("owners_phone")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Owner Name</label>
                <input {...register("owners_name")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Owner Name</label>
                <input {...register("ownerName")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Shop Contact Name</label>
                <input {...register("se_contact_name")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Shop Contact Phone</label>
                <input {...register("se_contact_phone")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Shop Contact Email</label>
                <input {...register("se_contact_email")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">resPhone</label>
                <input {...register("res_phone")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Minimum Pick Up Order</label>
                <input {...register("minimum_pickUp_order")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Pick Up Estimate</label>
                <input {...register("pickUp_estimate")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">minimum_delivery_order</label>
                <input {...register("minimum_delivery_order")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Delivery Estimate</label>
                <input {...register("delivery_estimate")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Online Discount</label>
                <input {...register("online_discount")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">pause_delivery_today </label>
                <select {...register("pause_delivery_today")}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">no_scheduled_order </label>
                <select {...register("pause_delivery_today")}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">stop_orders_today </label>
                <select {...register("stop_orders_today")}>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>

          <div className="text-right">
            <button className="btn btn-danger ml-auto">Add Shop</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppShopTable;


// "Shop validation failed: payment_type: `Direct` is not a valid enum value for path `payment_type`."