import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { addShopPost } from "../../../../__lib__/helpers/HttpService";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const AppShopTable = () => {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  // for dropdown
  const [settings, setSettings] = useState(true);
  const [payments, setPayments] = useState(false);
  const [seoSettings, setSeoSettings] = useState(false);
  const [locations, setLocations] = useState(false);
  const [contact, setContact] = useState(false);
  const [ordering, setOrdering] = useState(false);

  const cookies = new Cookies();
  const token = cookies.get("_admin");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        setLocation({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  // console.log(location);

  const onSubmit = (data) => {
    setLoading(true);
    if (location) {
      const newDate = { ...data, ...location };
      addShopPost(newDate, token, reset, setLoading);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            className="btn btn-info w-100 border"
            type="button"
            // onClick={() => setSettings(!settings)}
          >
            Settings
            <span
              style={{
                fontSize: "20px",
                marginLeft: "12px",
                lineHeight: "0",
              }}
            >
              {settings ? <GoChevronUp /> : <GoChevronDown />}
            </span>
          </button>
          {settings && (
            <>
              <div className="w-100 mb-3">
                <div className="row">
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Shop Status: </label>
                    <select
                      className="form-control"
                      {...register("shop_status", { required: true })}
                    >
                      <option value="Live">Live</option>
                      <option value="Temporarily Paused">
                        Temporarily Paused
                      </option>
                      <option value="M2M">M2M</option>
                      <option value="Disabled">Disabled</option>
                    </select>
                    {errors.shop_status && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Payment type: </label>
                    <select
                      className="form-control"
                      {...register("shop_pay_type", { required: true })}
                    >
                      <option value="Direct">Direct</option>
                      <option value="Deposit">Deposit</option>
                    </select>
                    {errors.shop_pay_type && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                    {errors.shop_name && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Name </label>
                    <input
                      className="form-control"
                      {...register("res_name", { required: true })}
                      type="text"
                    />
                    {errors.res_name && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                    {errors.shop_logo && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Web Header </label>
                    <input
                      className="form-control"
                      {...register("web_header", { required: true })}
                      type="file"
                    />
                    {errors.web_header && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Mobile Header </label>
                    <input
                      className="form-control"
                      {...register("mobile_header", { required: true })}
                      type="file"
                    />
                    {errors.mobile_header && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Account Manager </label>
                    <input
                      className="form-control"
                      {...register("account_manager", { required: true })}
                      type="text"
                    />
                    {errors.account_manager && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Sales Representative </label>
                    <input
                      className="form-control"
                      {...register("sales_rep", { required: true })}
                      type="text"
                    />
                    {errors.sales_rep && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Menu Representative </label>
                    <input
                      className="form-control"
                      {...register("menu_rep", { required: true })}
                      type="text"
                    />
                    {errors.menu_rep && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            className="btn btn-info w-100 border"
            type="button"
            onClick={() => setPayments(!payments)}
          >
            Payments
            <span
              style={{ fontSize: "20px", marginLeft: "12px", lineHeight: "0" }}
            >
              {payments ? <GoChevronUp /> : <GoChevronDown />}
            </span>
          </button>{" "}
          {payments && (
            <>
              <div className="w-100 mb-3">
                <div className="row mt-3">
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Email Statement </label>
                    <input
                      className="form-control"
                      {...register("email_statement", { required: true })}
                      type="text"
                    />
                    {errors.email_statement && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                    {errors.payment_frequency && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                    {errors.flat_fee && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">End Trial</label>
                    <input
                      className="form-control"
                      {...register("trial_end", { required: true })}
                      type="text"
                    />
                    {errors.trial_end && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                    {errors.processing_fee && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
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
                    {errors.contact_method && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            className="btn btn-info w-100 border"
            type="button"
            onClick={() => setSeoSettings(!seoSettings)}
          >
            SEO Settings
            <span
              style={{ fontSize: "20px", marginLeft: "12px", lineHeight: "0" }}
            >
              {seoSettings ? <GoChevronUp /> : <GoChevronDown />}
            </span>
          </button>
          {seoSettings && (
            <>
              <div className="w-100 mb-3">
                <div className="row mt-3">
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Gmb Domain</label>
                    <input
                      className="form-control"
                      {...register("gmb_domain", { required: true })}
                      type="text"
                    />
                    {errors.gmb_domain && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Own Website </label>
                    <input
                      className="form-control"
                      {...register("own_website", { required: true })}
                      type="text"
                    />
                    {errors.own_website && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="row mt-3">
                  {/* <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Price Range</label>
                <input {...register("priceRange")} type="text" />
              </div> */}

                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Gmb Status </label>
                    <select
                      className="form-control"
                      {...register("gmb_status", { required: true })}
                    >
                      <option value="Verified">Verified</option>
                      <option value="Not Verified">Not Verified</option>
                      <option value="Suspended">Suspended</option>
                    </select>
                    {errors.gmb_status && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Gmb Role </label>
                    <select
                      className="form-control"
                      {...register("gmb_role", { required: true })}
                    >
                      <option value="Primary Owner">Primary Owner</option>
                      <option value="Manager">Manager</option>
                      <option value="Owner">Owner</option>
                    </select>
                    {errors.gmb_role && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">meal now domain</label>
                    <input
                      className="form-control"
                      {...register("meal_now_domain", { required: true })}
                      type="text"
                    />
                    {errors.meal_now_domain && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Gmb Email</label>
                    <input
                      className="form-control"
                      {...register("gmb_email", { required: true })}
                      type="text"
                    />
                    {errors.gmb_email && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">gmb Password</label>
                    <input
                      className="form-control"
                      {...register("gmb_password", { required: true })}
                      type="text"
                    />
                    {errors.gmb_password && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">gmb owner</label>
                    <select
                      className="form-control"
                      {...register("gmb_owner", { required: true })}
                    >
                      <option value="Competitor">Competitor</option>
                      <option value="Meal Now">Meal Now</option>
                    </select>
                    {errors.gmb_owner && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            className="btn btn-info w-100 border"
            type="button"
            onClick={() => setLocations(!locations)}
          >
            Locations
            <span
              style={{ fontSize: "20px", marginLeft: "12px", lineHeight: "0" }}
            >
              {locations ? <GoChevronUp /> : <GoChevronDown />}
            </span>
          </button>
          {locations && (
            <>
              <div className="w-100 mb-3">
                <div className="row mt-3">
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">Shops Address</label>
                    <input
                      className="form-control"
                      {...register("shop_address", { required: true })}
                      type="text"
                    />
                    {errors.shop_address && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">city</label>
                    <input
                      className="form-control"
                      {...register("city", { required: true })}
                      type="text"
                    />
                    {errors.city && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">state</label>
                    <input
                      className="form-control"
                      {...register("state", { required: true })}
                      type="text"
                    />
                    {errors.state && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">zipCode</label>
                    <input
                      className="form-control"
                      {...register("zip_code", { required: true })}
                      type="text"
                    />
                    {errors.zip_code && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>

                  {/* <div className="form-group col-md-6 mt-3">
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
            </div> */}

                  <div className="form-group col-md-6 mt-3">
                    <label htmlFor="">timeZone</label>
                    <input
                      className="form-control"
                      {...register("time_zone", { required: true })}
                      type="text"
                    />
                    {errors.time_zone && (
                      <span className="text-danger">
                        This field is required
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            className="btn btn-info w-100 border"
            type="button"
            onClick={() => setContact(!contact)}
          >
            Contact
            <span
              style={{ fontSize: "20px", marginLeft: "12px", lineHeight: "0" }}
            >
              {contact ? <GoChevronUp /> : <GoChevronDown />}
            </span>
          </button>
          {contact && (
            <>
              <div className="row mt-3 mb-3">
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Owner Email</label>
                  <input
                    className="form-control"
                    {...register("owners_email", { required: true })}
                    type="text"
                  />
                  {errors.owners_email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">owners phone</label>
                  <input
                    className="form-control"
                    {...register("owners_phone", { required: true })}
                    type="text"
                  />
                  {errors.owners_phone && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Owner Name</label>
                  <input
                    className="form-control"
                    {...register("owners_name", { required: true })}
                    type="text"
                  />
                  {errors.owners_name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                {/* <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Owner Name</label>
              <input
                className="form-control"
                {...register("ownerName")}
                type="text"
              />
            </div> */}
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Secondary Contact Name</label>
                  <input
                    className="form-control"
                    {...register("se_contact_name", { required: true })}
                    type="text"
                  />
                  {errors.se_contact_name && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>

                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Secondary Contact Phone</label>
                  <input
                    className="form-control"
                    {...register("se_contact_phone", { required: true })}
                    type="text"
                  />
                  {errors.se_contact_phone && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Secondary Contact Email</label>
                  <input
                    className="form-control"
                    {...register("se_contact_email", { required: true })}
                    type="text"
                  />
                  {errors.se_contact_email && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Restaurant Phone</label>
                  <input
                    className="form-control"
                    {...register("res_phone", { required: true })}
                    type="text"
                  />
                  {errors.res_phone && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              </div>
            </>
          )}
          <button
            className="btn btn-info w-100 border"
            type="button"
            onClick={() => setOrdering(!ordering)}
          >
            Ordering
            <span
              style={{ fontSize: "20px", marginLeft: "12px", lineHeight: "0" }}
            >
              {ordering ? <GoChevronUp /> : <GoChevronDown />}
            </span>
          </button>
          {ordering && (
            <>
              <div className="row mt-3 mb-3">
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Minimum Pick Up Order</label>
                  <input
                    className="form-control"
                    {...register("minimum_pickUp_order", { required: true })}
                    type="tel"
                  />
                  {errors.minimum_pickUp_order && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Pick Up Estimate</label>
                  <input
                    className="form-control"
                    {...register("pickUp_estimate", { required: true })}
                    type="tel"
                  />
                  {errors.pickUp_estimate && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Minimum Delivery Order</label>
                  <input
                    className="form-control"
                    {...register("minimum_delivery_order", { required: true })}
                    type="tel"
                  />
                  {errors.minimum_delivery_order && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Delivery Estimate</label>
                  <input
                    className="form-control"
                    {...register("delivery_estimate", { required: true })}
                    type="tel"
                  />
                  {errors.delivery_estimate && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Online Discount</label>
                  <input
                    className="form-control"
                    {...register("online_discount", { required: true })}
                    type="tel"
                  />
                  {errors.online_discount && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Pause Delivery Today </label>
                  <select
                    className="form-control"
                    {...register("pause_delivery_today", { required: true })}
                  >
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                  {errors.pause_delivery_today && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">No Scheduled Order </label>
                  <select
                    className="form-control"
                    {...register("pause_delivery_today", { required: true })}
                  >
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                  {errors.pause_delivery_today && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
                <div className="form-group col-md-6 mt-3">
                  <label htmlFor="">Stop Orders Today </label>
                  <select
                    className="form-control"
                    {...register("stop_orders_today", { required: true })}
                  >
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                  {errors.stop_orders_today && (
                    <span className="text-danger">This field is required</span>
                  )}
                </div>
              </div>
            </>
          )}
          <div className="border-bottom"></div>
          <div className="text-right">
            {loading ? (
              <div className="btn btn-danger ml-auto px-4">
                <div
                  className="spinner-border text-light"
                  style={{ height: "20px", width: "20px" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <button className="btn btn-danger ml-auto">Add Shop</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppShopTable;

// "Shop validation failed: payment_type: `Direct` is not a valid enum value for path `payment_type`."
