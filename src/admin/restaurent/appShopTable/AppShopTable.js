import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { addShopPost } from "../../../../__lib__/helpers/HttpService";

const AppShopTable = () => {
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("_admin");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    addShopPost(data, token, reset);
  };
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Shop Status: </label>
              <select
                className="form-control"
                {...register("shop_status", { required: true })}
              >
                <option value="Live">Live</option>
                <option value="Temporarily">Temporarily</option>
                <option value="Temporarily Paused">Temporarily Paused</option>
                <option value="M2M">M2M</option>
                <option value="Disabled">Disabled</option>
              </select>
              {errors.shop_status && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">payment type: </label>
              <select
                className="form-control"
                {...register("shop_pay_type", { required: true })}
              >
                <option value="Direct">Direct</option>
                <option value="Deposit">Deposit</option>
              </select>
              {errors.shop_pay_type && <span className="text-danger">This field is required</span>}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="shop_name">shop_name</label>
              <input
                className="form-control"
                {...register("shop_name", { required: true })}
                id="shop_name"
              />
              {errors.shop_name && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Name </label>
              <input
                className="form-control"
                {...register("res_name", { required: true })}
                type="text"
              />
              {errors.res_name && <span>This field is required</span>}
            </div>
          </div>
          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Shop Logo: </label>
              <input
                className="form-control"
                {...register("shop_logo")}
                type="file"
              />
              {errors.shop_logo && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">web_header </label>
              <input
                className="form-control"
                {...register("web_header", { required: true })}
                type="file"
              />
              {errors.web_header && <span>This field is required</span>}
            </div>
          </div>
          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">mobile_header </label>
              <input
                className="form-control"
                {...register("mobile_header", { required: true })}
                type="file"
              />
              {errors.mobile_header && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">account_manager </label>
              <input
                className="form-control"
                {...register("account_manager", { required: true })}
                type="text"
              />
              {errors.account_manager && <span>This field is required</span>}
            </div>
          </div>

          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">sales_rep </label>
              <input
                className="form-control"
                {...register("sales_rep", { required: true })}
                type="text"
              />
              {errors.sales_rep && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">account_manager </label>
              <input
                className="form-control"
                {...register("menu_rep", { required: true })}
                type="text"
              />
              {errors.menu_rep && <span>This field is required</span>}
            </div>
          </div>
          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">email_statement </label>
              <input
                className="form-control"
                {...register("email_statement", { required: true })}
                type="text"
              />
              {errors.email_statement && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Payout frequency </label>
              <select
                className="form-control"
                {...register("payment_frequency", { required: true })}
                aria-label="Disabled input example"
              >
                <option value="Weekly">Weekly</option>
                <option value="Biweekly">Biweekly</option>
                <option value="Monthly">Monthly</option>
              </select>
              {errors.payment_frequency && <span>This field is required</span>}
            </div>
          </div>

          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Flat Fee </label>
              <input
                className="form-control"
                {...register("flat_fee", { required: true })}
                type="tel"
                aria-label="Disabled input example"
              />
              {errors.flat_fee && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">End Trial</label>
              <input
                className="form-control"
                {...register("trial_end", { required: true })}
                type="text"
              />
              {errors.trial_end && <span>This field is required</span>}
            </div>
          </div>

          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Percentage fee </label>
              <input
                className="form-control"
                {...register("processing_fee", { required: true })}
                type="text"
              />
              {errors.processing_fee && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Contact Method </label>
              <select
                className="form-control"
                {...register("contact_method", { required: true })}
              >
                <option value="Phone">Phone</option>
                <option value="Sms">Sms</option>
                <option value="Email">Email</option>
                <option value="Tablet">Tablet</option>
              </select>
              {errors.contact_method && <span>This field is required</span>}
            </div>
          </div>

          <div className="row mt-3">
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Gmb Domain</label>
              <input
                className="form-control"
                {...register("gmb_domain", { required: true })}
                type="text"
              />
              {errors.contact_method && <span>This field is required</span>}
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Own Website </label>
              <input
                className="form-control"
                {...register("own_website", { required: true })}
                type="text"
              />
              {errors.own_website && <span>This field is required</span>}
            </div>
          </div>

          <div className="row mt-3"></div>

          <div className="row mt-3">
            {/* <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Price Range</label>
                <input {...register("priceRange")} type="text" />
              </div> */}

            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Gmb Status </label>
              <select className="form-control" {...register("gmb_status")}>
                <option value="Verified">Verified</option>
                <option value="Not Verified">Not Verified</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Gmb Role </label>
              <select className="form-control" {...register("gmb_role")}>
                <option value="Primary Owner">Primary Owner</option>
                <option value="Manager">Manager</option>
                <option value="Owner">Owner</option>
              </select>
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">meal now domain</label>
              <input
                className="form-control"
                {...register("meal_now_domain")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Gmb Email</label>
              <input
                className="form-control"
                {...register("gmb_email")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">gmb Password</label>
              <input
                className="form-control"
                {...register("gmb_password")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">gmb owner</label>
              <select className="form-control" {...register("gmb_owner")}>
                <option value="Competitor">Competitor</option>
                <option value="Meal Now">Meal Now</option>
              </select>
            </div>

            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Shops Address</label>
              <input
                className="form-control"
                {...register("shop_address")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">city</label>
              <input
                className="form-control"
                {...register("city")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">state</label>
              <input
                className="form-control"
                {...register("state")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">zipCode</label>
              <input
                className="form-control"
                {...register("zip_code")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">lat</label>
              <input
                className="form-control"
                {...register("lat")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">long</label>
              <input
                className="form-control"
                {...register("long")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">timeZone</label>
              <input
                className="form-control"
                {...register("time_zone")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Owner Email</label>
              <input
                className="form-control"
                {...register("owners_email")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">owners phone</label>
              <input
                className="form-control"
                {...register("owners_phone")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Owner Name</label>
              <input
                className="form-control"
                {...register("owners_name")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Owner Name</label>
              <input
                className="form-control"
                {...register("ownerName")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Shop Contact Name</label>
              <input
                className="form-control"
                {...register("se_contact_name")}
                type="text"
              />
            </div>

            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Shop Contact Phone</label>
              <input
                className="form-control"
                {...register("se_contact_phone")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Shop Contact Email</label>
              <input
                className="form-control"
                {...register("se_contact_email")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">resPhone</label>
              <input
                className="form-control"
                {...register("res_phone")}
                type="text"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Minimum Pick Up Order</label>
              <input
                className="form-control"
                {...register("minimum_pickUp_order")}
                type="tel"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Pick Up Estimate</label>
              <input
                className="form-control"
                {...register("pickUp_estimate")}
                type="tel"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">minimum_delivery_order</label>
              <input
                className="form-control"
                {...register("minimum_delivery_order")}
                type="tel"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Delivery Estimate</label>
              <input
                className="form-control"
                {...register("delivery_estimate")}
                type="tel"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Online Discount</label>
              <input
                className="form-control"
                {...register("online_discount")}
                type="tel"
              />
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">pause_delivery_today </label>
              <select
                className="form-control"
                {...register("pause_delivery_today")}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">no_scheduled_order </label>
              <select
                className="form-control"
                {...register("pause_delivery_today")}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">stop_orders_today </label>
              <select
                className="form-control"
                {...register("stop_orders_today")}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
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
