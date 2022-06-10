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
          </div>
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
                <select {...register("accountManager")}>
                  <option value="1">Mia tv</option>
                  <option value="2">Mia tv</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Sales Representive: </label>
                <select {...register("salesRepre")}>
                  <option value="1">Antony Pollotta</option>
                  <option value="2">Antony Pollotta</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Menu Representive: </label>
                <select {...register("menuRepre")}>
                  <option value="1">Mjelima Borova</option>
                  <option value="2">Mjelima Borova</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          {/* payment part */}
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Email Statements To </label>
                <input
                  {...register("ownerEmail")}
                  type="email"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault2">
                  Receives daily report
                </label>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Payout frequency </label>
                <select
                  {...register("paymentFrequency")}
                  aria-label="Disabled input example"
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Biweekly">Biweekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="border-bottom mb-3"></div>
              <h4>MealNow Fees</h4>
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Flat Amount </label>
                <input
                  {...register("mealNow")}
                  type="tel"
                  aria-label="Disabled input example"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">End Trial</label>
                <input
                  {...register("endTrial")}
                  type="text"
                  placeholder="40"
                  aria-label="Disabled input example"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Percentage Amount </label>
                <input
                  {...register("processingFee")}
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
                <select {...register("contactMethod")}>
                  <option value="phone">Phone</option>
                  <option value="sms">Sms</option>
                  <option value="email">Email</option>
                  <option value="tablet">Tablet</option>
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
                <input {...register("gmbDomain")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Own Website </label>
                <input {...register("ownWebsite")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Price Range</label>
                <input {...register("priceRange")} type="text" />
              </div>

              <div className="form-group-two">
                <label htmlFor="">Gmb Status </label>
                <select {...register("gmbStatus")}>
                  <option value="primary Owner">primary Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Owner">Owner</option>
                  <option value="Not Verified">Not Verified</option>
                  <option value="Not Verified">Suspended</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Gmb Role</label>
                <input {...register("gmbRole")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Gmb Email</label>
                <input {...register("gmbEmail")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">gmb Password</label>
                <input {...register("gmbPassword")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Apple Email</label>
                <input {...register("appleEmail")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Apple Password</label>
                <input {...register("applePassword")} type="text" />
              </div>

              <div className="form-group-two">
                <label htmlFor="">Apple Status </label>
                <select {...register("appleStatus")}>
                  <option value="Not Verified">Not Verified</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Apple Owner</label>
                <select {...register("appleOwner")}>
                  <option value="Competitor">Competitor</option>
                  <option value="Meal Now">Meal Now</option>
                </select>
              </div>

              <div className="form-group-two">
                <label htmlFor="">Shops Address</label>
                <input {...register("shopsAddress")} type="text" />
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
                <input {...register("zipCode")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">lat</label>
                <input {...register("zipCode")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">long</label>
                <input {...register("zipCode")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">timeZone</label>
                <input {...register("timeZone")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">ownerEmail</label>
                <input {...register("ownerEmail2")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Owner Name</label>
                <input {...register("ownerName")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Shop Contact Name</label>
                <input {...register("sContactName")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Shop Contact Phone</label>
                <input {...register("sContactPhone")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Shop Contact Email</label>
                <input {...register("sContactEmail")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">resPhone</label>
                <input {...register("resPhone")} type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Minimum Pick Up Order</label>
                <input {...register("minimumPickUpOrder")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Pick Up Estimate</label>
                <input {...register("pickUpEstimate")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Delivery Estimate</label>
                <input {...register("deliveryEstimate")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Online Discount</label>
                <input {...register("onlineDiscount")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Pause Delivery Today</label>
                <input {...register("pauseDeliveryToday")} type="tel" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">No Scheduled Order</label>
                <input {...register("noScheduledOrder")} type="tel" />
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
