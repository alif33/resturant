import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const SettingForm = () => {
  const [shop, setShop] = useState({});
  const router = useRouter();
  const { shopId } = router?.query;
  const cookies = new Cookies();
  const token = cookies.get("_admin");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    shopId && getData(`admin/shop/${shopId}`).then((res) => setShop(res));
  }, [shopId]);

  console.log(shop);

  const onSubmit = (data) => {
    console.log(data);
    const newDate = { ...shop, shop_name: data.shop_name, ...data };
    shopUpdate(`/admin/shop/${shopId}`, newDate, token);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Status: </label>
                <select
                  defaultValue={shop?.shop_status}
                  {...register("shop_status", { required: true })}
                >
                  <option value="Live">Live</option>
                  <option value="Temporarily">Temporarily</option>
                  <option value="Temporarily Paused">Temporarily Paused</option>
                  <option value="M2M">M2M</option>
                  <option value="Disabled">Disabled</option>
                </select>
                {errors.shop_status && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Type: </label>
                <select
                  defaultValue={shop?.shop_pay_type}
                  {...register("shop_pay_type", { required: true })}
                >
                  <option value="Direct">Direct</option>
                  <option value="Deposit">Deposit</option>
                </select>
                {errors.shop_pay_type && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Name </label>
                <input
                  defaultValue={shop?.shop_name}
                  {...register("shop_name", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.shop_name && (
                <span className="text-danger">This field is required</span>
              )}

              <div className="form-group-two">
                <label htmlFor="">chain </label>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className="form-group-two">
                <label htmlFor="">Description </label>
                <textarea></textarea>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Agreement Signed Date </label>
                <input
                  type="text"
                  placeholder="e.g. 2020-01-30"
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              <img
                src={shop?.shop_logo}
                alt="logo"
                className="logo w-100 h-auto"
              />
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Logo:</label>
              </div>
              <input
                defaultValue={shop?.shop_logo}
                // {...register("shop_logo", { required: true })}
                type="file"
              />
              {errors.shop_logo && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              <img
                src={shop?.web_header}
                alt="logo"
                className="logo w-100 h-auto"
              />
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Logo:</label>
              </div>
              <input
                // {...register("web_header", { required: true })}
                type="file"
              />
              {errors.web_header && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              <img
                src={shop?.mobile_header}
                alt="logo"
                className="logo w-100 h-auto"
              />
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Logo:</label>
              </div>
              <input
                // {...register("mobile_header", { required: true })}
                type="file"
              />
              {errors.mobile_header && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Banner Text </label>
                <div className="banner-text">
                  <textarea
                    aria-label="Disabled input example"
                    disabled
                  ></textarea>
                  <p>
                    Add a message to the top of all the restaurant&apos;s pages
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Account Manager: </label>
                <input
                  className="form-control"
                  {...register("account_manager", { required: true })}
                  type="text"
                  defaultValue={shop?.account_manager}
                />
                <button type="button" className="transparent">
                  Claim
                </button>
                {errors.account_manager && <span>This field is required</span>}
              </div>
              <div className="form-group-two">
                <label htmlFor="">Sales Representive: </label>
                <input
                  className="form-control"
                  {...register("sales_rep", { required: true })}
                  type="text"
                  defaultValue={shop?.sales_rep}
                />
                <button type="button" className="transparent">
                  Claim
                </button>
                {errors.sales_rep && <span>This field is required</span>}
              </div>
              <div className="form-group-two">
                <label htmlFor="">Menu Representive: </label>
                <input
                  className="form-control"
                  {...register("menu_rep", { required: true })}
                  type="text"
                  defaultValue={shop?.menu_rep}
                />
                <button type="button" className="transparent">
                  Claim
                </button>
                {errors.menu_rep && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className="text-right">
            <button className="btn btn-danger ml-auto">Update Shop</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingForm;
