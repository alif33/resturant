import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { addShopPost } from "../../../../__lib__/helpers/HttpService";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const AddShopTable = () => {
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

  // console.log(watch().shop_name);

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
          {((errors.shop_name && errors.res_name) ||
            (errors.menu_rep && errors.sales_rep) ||
            (errors.account_manager &&
              errors.mobile_header &&
              errors.web_header)) && (
            <span className="text-danger mb-4 pb-4">
              There is an empty field
            </span>
          )}
          <button
            className="btn btn-outline-info w-100 d-flex justify-content-between align-items-center"
            type="button"
            onClick={() => setSettings(!settings)}
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
          <div
            className="w-100 mb-3"
            style={
              settings
                ? { height: "auto", opacity: 1, visibility: "visible" }
                : { height: 0, opacity: 0, visibility: "hidden" }
            }
          >
            <div className="row">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Shop Status: </label>
                <select
                  className="form-control"
                  {...register("shop_status", { required: true })}
                >
                  <option value="Live">Live</option>
                  <option value="Temporarily Paused">Temporarily Paused</option>
                  <option value="M2M">M2M</option>
                  <option value="Disabled">Disabled</option>
                </select>
                {errors.shop_status && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Payment type: </label>
                <select
                  className="form-control"
                  {...register("shop_pay_type", { required: true })}
                >
                  <option value="Direct Deposit">Direct Deposit</option>
                </select>
                {errors.shop_pay_type && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <div className="border-bottom"></div>
            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="shop_name">Shop Name</label>
                <input
                  className="form-control"
                  {...register("shop_name", { required: true })}
                  id="shop_name"
                />
                {errors.shop_name && (
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Chain </label>
                <input
                  className="form-control"
                  {...register("chain", { required: true })}
                  type="text"
                />
                {errors.chain && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Shop Description </label>
                <textarea
                  className="form-control"
                  {...register("shop_description", { required: true })}
                  type="text"
                />
                {errors.shop_description && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Agreement Date </label>
                <input
                  className="form-control"
                  {...register("agreement_date", { required: true })}
                  type="date"
                />
                {errors.agreement_date && (
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Landing Page Image </label>
                <input
                  className="form-control"
                  {...register("landing_page_image", { required: true })}
                  type="file"
                />
                {errors.landing_page_image && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>

            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Mobile Background </label>
                <input
                  className="form-control"
                  {...register("mobile_bg", { required: true })}
                  type="file"
                />
                {errors.mobile_bg && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Desktop Background </label>
                <input
                  className="form-control"
                  {...register("desktop_bg", { required: true })}
                  type="file"
                />
                {errors.desktop_bg && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Banner Text </label>
                <textarea
                  className="form-control"
                  {...register("banner_text", { required: true })}
                />
                {errors.banner_text && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Account Manager </label>
                <select
                  className="form-control"
                  {...register("account_manager", { required: true })}
                >
                  <option value="admin">admin</option>
                </select>
                {errors.account_manager && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>

            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Sales Representative </label>
                <select
                  className="form-control"
                  {...register("sales_rep", { required: true })}
                >
                  <option value="admin">admin</option>
                </select>
                {errors.sales_rep && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Menu Representative </label>
                <select
                  className="form-control"
                  {...register("menu_rep", { required: true })}
                >
                  <option value="admin">admin</option>
                </select>
                {errors.menu_rep && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
          </div>
          {((errors.email_statement && errors.payment_frequency) ||
            (errors.flat_fee && errors.trial_end) ||
            (errors.processing_fee && errors.contact_method)) && (
            <span className="text-danger mb-4 pb-4">
              There is an empty field
            </span>
          )}
          <button
            className="btn btn-outline-info w-100 d-flex justify-content-between align-items-center"
            type="button"
            onClick={() => setPayments(!payments)}
          >
            Payments
            <span
              style={{ fontSize: "20px", marginLeft: "12px", lineHeight: "0" }}
            >
              {payments ? <GoChevronUp /> : <GoChevronDown />}
            </span>
          </button>
          <div
            className="w-100 mb-3"
            style={
              payments
                ? { height: "auto", opacity: 1, visibility: "visible" }
                : { height: 0, opacity: 0, visibility: "hidden" }
            }
          >
            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Email Statement </label>
                <input
                  className="form-control"
                  {...register("email_statement", { required: true })}
                  type="text"
                />
                {errors.email_statement && (
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>

            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Flat Amount </label>
                <input
                  className="form-control"
                  {...register("flat_fee", { required: true })}
                  type="number"
                  aria-label="Disabled input example"
                />
                {errors.flat_fee && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Free Trial Ends</label>
                <input
                  className="form-control"
                  {...register("trial_end", { required: true })}
                  type="date"
                />
                {errors.trial_end && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>

            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Percentage fee </label>
                <input
                  className="form-control"
                  {...register("processing_fee", { required: true })}
                  type="number"
                />
                {errors.processing_fee && (
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
          </div>
          {((errors.gmb_domain && errors.own_website) ||
            (errors.gmb_status && errors.gmb_role) ||
            (errors.gmb_password && errors.gmb_owner) ||
            (errors.meal_now_domain && errors.gmb_email)) && (
            <span className="text-danger mb-4 pb-4">
              There is an empty field
            </span>
          )}
          <button
            className="btn btn-outline-info w-100 d-flex justify-content-between align-items-center"
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
          <div
            className="w-100 mb-3"
            style={
              seoSettings
                ? { height: "auto", opacity: 1, visibility: "visible" }
                : { height: 0, opacity: 0, visibility: "hidden" }
            }
          >
            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Gmb Domain</label>
                <input
                  className="form-control"
                  {...register("gmb_domain", { required: true })}
                  type="text"
                />
                {errors.gmb_domain && (
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Price Range</label>
                <input
                  className="form-control"
                  {...register("price_range", { required: true })}
                  type="text"
                />
                {errors.price_range && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              {/* </div>
            <div className="row mt-3"> */}

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
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Apple Map Email</label>
                <input
                  className="form-control"
                  {...register("apple_map_email", { required: true })}
                  type="email"
                />
                {errors.apple_map_email && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Apple Map Password</label>
                <input
                  className="form-control"
                  {...register("apple_map_pass", { required: true })}
                  type="text"
                />
                {errors.apple_map_pass && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Apple Map Status</label>
                <select
                  className="form-control"
                  {...register("apple_map_status", { required: true })}
                >
                  <option value="Verified">Verified</option>
                  <option value="Not Verified">Not Verified</option>
                  <option value="Suspended">Suspended</option>
                </select>
                {errors.apple_map_status && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Apple Map Owner</label>
                <select
                  className="form-control"
                  {...register("apple_map_owner", { required: true })}
                >
                  <option value="Competitor">Competitor</option>
                  <option value="Meal Now">Meal Now</option>
                </select>
                {errors.apple_map_owner && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
          </div>
          {((errors.shop_address && errors.city) ||
            (errors.state && errors.zip_code) ||
            errors.time_zone) && (
            <span className="text-danger mb-4 pb-4">
              There is an empty field
            </span>
          )}
          <button
            className="btn btn-outline-info w-100 d-flex justify-content-between align-items-center"
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
          <div
            className="w-100 mb-3"
            style={
              locations
                ? { height: "auto", opacity: 1, visibility: "visible" }
                : { height: 0, opacity: 0, visibility: "hidden" }
            }
          >
            <div className="row mt-3">
              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Shops Address</label>
                <input
                  className="form-control"
                  {...register("shop_address", { required: true })}
                  type="text"
                />
                {errors.shop_address && (
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
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
                  <span className="text-danger">This field is required</span>
                )}
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Latitude</label>
                <input
                  className="form-control"
                  // {...register("lat")}
                  type="text"
                  defaultValue={location?.lat}
                  disabled
                />
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Longitude</label>
                <input
                  className="form-control"
                  // {...register("long")}
                  type="text"
                  defaultValue={location?.long}
                  disabled
                />
              </div>

              <div className="form-group col-md-6 mt-3">
                <label htmlFor="">Time Zone</label>
                {/* <input
                  className="form-control"
                  {...register("time_zone", { required: true })}
                  type="text"
                /> */}
                <select
                  className="form-control"
                  {...register("time_zone", { required: true })}
                >
                  <option value="-12">[UTC - 12] Baker Island Time</option>
                  <option value="-11">
                    [UTC - 11] Niue Time, Samoa Standard Time
                  </option>
                  <option value="-10">
                    [UTC - 10] Hawaii-Aleutian Standard Time, Cook Island Time
                  </option>
                  <option value="-9.5">
                    [UTC - 9:30] Marquesas Islands Time
                  </option>
                  <option value="-9">
                    [UTC - 9] Alaska Standard Time, Gambier Island Time
                  </option>
                  <option value="-8">[UTC - 8] Pacific Standard Time</option>
                  <option value="-7">[UTC - 7] Mountain Standard Time</option>
                  <option value="-6">[UTC - 6] Central Standard Time</option>
                  <option value="-5">[UTC - 5] Eastern Standard Time</option>
                  <option value="-4.5">
                    [UTC - 4:30] Venezuelan Standard Time
                  </option>
                  <option value="-4">[UTC - 4] Atlantic Standard Time</option>
                  <option value="-3.5">
                    [UTC - 3:30] Newfoundland Standard Time
                  </option>
                  <option value="-3">
                    [UTC - 3] Amazon Standard Time, Central Greenland Time
                  </option>
                  <option value="-2">
                    [UTC - 2] Fernando de Noronha Time, South Georgia &amp; the
                    South Sandwich Islands Time
                  </option>
                  <option value="-1">
                    [UTC - 1] Azores Standard Time, Cape Verde Time, Eastern
                    Greenland Time
                  </option>
                  <option value="0" selected="selected">
                    [UTC] Western European Time, Greenwich Mean Time
                  </option>
                  <option value="1">
                    [UTC + 1] Central European Time, West African Time
                  </option>
                  <option value="2">
                    [UTC + 2] Eastern European Time, Central African Time
                  </option>
                  <option value="3">
                    [UTC + 3] Moscow Standard Time, Eastern African Time
                  </option>
                  <option value="3.5">[UTC + 3:30] Iran Standard Time</option>
                  <option value="4">
                    [UTC + 4] Gulf Standard Time, Samara Standard Time
                  </option>
                  <option value="4.5">[UTC + 4:30] Afghanistan Time</option>
                  <option value="5">
                    [UTC + 5] Pakistan Standard Time, Yekaterinburg Standard
                    Time
                  </option>
                  <option value="5.5">
                    [UTC + 5:30] Indian Standard Time, Sri Lanka Time
                  </option>
                  <option value="5.75">[UTC + 5:45] Nepal Time</option>
                  <option value="6">
                    [UTC + 6] Bangladesh Time, Bhutan Time, Novosibirsk Standard
                    Time
                  </option>
                  <option value="6.5">
                    [UTC + 6:30] Cocos Islands Time, Myanmar Time
                  </option>
                  <option value="7">
                    [UTC + 7] Indochina Time, Krasnoyarsk Standard Time
                  </option>
                  <option value="8">
                    [UTC + 8] Chinese Standard Time, Australian Western Standard
                    Time, Irkutsk Standard Time
                  </option>
                  <option value="8.75">
                    [UTC + 8:45] Southeastern Western Australia Standard Time
                  </option>
                  <option value="9">
                    [UTC + 9] Japan Standard Time, Korea Standard Time, Chita
                    Standard Time
                  </option>
                  <option value="9.5">
                    [UTC + 9:30] Australian Central Standard Time
                  </option>
                  <option value="10">
                    [UTC + 10] Australian Eastern Standard Time, Vladivostok
                    Standard Time
                  </option>
                  <option value="10.5">
                    [UTC + 10:30] Lord Howe Standard Time
                  </option>
                  <option value="11">
                    [UTC + 11] Solomon Island Time, Magadan Standard Time
                  </option>
                  <option value="11.5">
                    [UTC + 11:30] Norfolk Island Time
                  </option>
                  <option value="12">
                    [UTC + 12] New Zealand Time, Fiji Time, Kamchatka Standard
                    Time
                  </option>
                  <option value="12.75">
                    [UTC + 12:45] Chatham Islands Time
                  </option>
                  <option value="13">
                    [UTC + 13] Tonga Time, Phoenix Islands Time
                  </option>
                  <option value="14">[UTC + 14] Line Island Time</option>
                </select>
                {errors.time_zone && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
          </div>
          {((errors.owners_email && errors.owners_phone) ||
            (errors.owners_name && errors.se_contact_name) ||
            (errors.se_contact_phone && errors.se_contact_email) ||
            errors.res_phone) && (
            <span className="text-danger mb-4 pb-4">
              There is an empty field
            </span>
          )}
          <button
            className="btn btn-outline-info w-100 d-flex justify-content-between align-items-center"
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
          <div
            className="row mt-3 mb-3"
            style={
              contact
                ? { height: "auto", opacity: 1, visibility: "visible" }
                : { height: 0, opacity: 0, visibility: "hidden" }
            }
          >
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

          {((errors.minimum_pickUp_order && errors.pickUp_estimate) ||
            (errors.minimum_delivery_order && errors.delivery_estimate) ||
            (errors.online_discount && errors.pause_delivery_today) ||
            (errors.no_scheduled_order && errors.stop_orders_today)) && (
            <span className="text-danger mb-4 pb-4">
              There is an empty field
            </span>
          )}
          <button
            className="btn btn-outline-info w-100 d-flex justify-content-between align-items-center"
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
          <div
            className="row mt-3 mb-3"
            style={
              ordering
                ? { height: "auto", opacity: 1, visibility: "visible" }
                : { height: 0, opacity: 0, visibility: "hidden" }
            }
          >
            <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Minimum Pick Up Order</label>
              <input
                className="form-control"
                {...register("minimum_pickUp_order", { required: true })}
                type="number"
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
            {/* <div className="form-group col-md-6 mt-3">
              <label htmlFor="">Minimum Delivery Order</label>
              <input
                className="form-control"
                {...register("minimum_delivery_order", { required: true })}
                type="tel"
              />
              {errors.minimum_delivery_order && (
                <span className="text-danger">This field is required</span>
              )}
            </div> */}
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
                type="number"
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
                {...register("no_scheduled_order", { required: true })}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
              {errors.no_scheduled_order && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            {/* <div className="form-group col-md-6 mt-3">
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
            </div> */}

            {/* <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="pause_delivery_today"
                {...register("pause_delivery_today")}
              />
              <label
                className="custom-control-label"
                htmlFor="pause_delivery_today"
              >
                Pause delivery for today
              </label>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="no_scheduled_order"
                {...register("no_scheduled_order")}
              />
              <label
                className="custom-control-label"
                htmlFor="no_scheduled_order"
              >
                No scheduled orders
              </label>
            </div> */}
          </div>
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

export default AddShopTable;

// "Shop validation failed: payment_type: `Direct` is not a valid enum value for path `payment_type`."
