import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const SettingForm = () => {
  const [shop, setShop] = useState({});
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shopLogo, setShopLogo] = useState();
  const [webHeader, setWebHeader] = useState();
  const [mobileHeader, setMobileHeader] = useState();
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
  }, [shopId, load]);

  const onSubmit = (data) => {
    const newDate = { ...shop, shop_name: data.shop_name, ...data };
    shopUpdate(`/admin/shop/${shopId}`, newDate, token, shop, setLoading);
    setLoad(!load);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Status: </label>
                <select {...register("shop_status")}>
                  <option selected={shop?.shop_status === "Live"} value="Live">
                    Live
                  </option>
                  <option
                    selected={shop?.shop_status === "Temporarily Paused"}
                    value="Temporarily Paused"
                  >
                    Temporarily Paused
                  </option>
                  <option selected={shop?.shop_status === "M2M"} value="M2M">
                    M2M
                  </option>
                  <option
                    selected={shop?.shop_status === "Disabled"}
                    value="Disabled"
                  >
                    Disabled
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Type: </label>
                <select {...register("shop_pay_type")}>
                  <option
                    selected={`shop?.shop_pay_type` === "Direct"}
                    value="Direct"
                  >
                    Direct
                  </option>
                  <option
                    selected={shop?.shop_pay_type === "Deposit"}
                    value="Deposit"
                  >
                    Deposit
                  </option>
                </select>
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
                  {...register("shop_name")}
                  type="text"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">chain </label>
                <input
                  defaultValue={shop?.chain}
                  {...register("chain")}
                  type="text"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Shop Description </label>
                <textarea
                  defaultValue={shop?.shop_description}
                  {...register("shop_description")}
                  type="text"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Agreement Date </label>
                <input
                  defaultValue={shop?.agreement_date}
                  {...register("agreement_date")}
                  type="date"
                />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              {shopLogo ? (
                <img src={shopLogo} alt="logo" className="logo w-100 h-auto" />
              ) : (
                <img
                  src={shop?.shop_logo}
                  alt="logo"
                  className="logo w-100 h-auto"
                />
              )}
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Shop Logo:</label>
              </div>
              <input
                defaultValue={shop?.shop_logo}
                {...register("shop_logo")}
                onChange={(e) => {
                  setShopLogo(URL.createObjectURL(e.target.files[0]));
                }}
                type="file"
              />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              {webHeader ? (
                <img src={webHeader} alt="logo" className="logo w-100 h-auto" />
              ) : (
                <img
                  src={shop?.web_header}
                  alt="logo"
                  className="logo w-100 h-auto"
                />
              )}
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Web Header:</label>
              </div>
              <input
                {...register("web_header")}
                type="file"
                onChange={(e) => {
                  setWebHeader(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              {mobileHeader ? (
                <img
                  src={mobileHeader}
                  alt="logo"
                  className="logo w-100 h-auto"
                />
              ) : (
                <img
                  src={shop?.mobile_header}
                  alt="logo"
                  className="logo w-100 h-auto"
                />
              )}
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Mobile Header:</label>
              </div>
              <input
                {...register("mobile_header")}
                onChange={(e) => {
                  setMobileHeader(URL.createObjectURL(e.target.files[0]));
                }}
                type="file"
              />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Banner Text </label>
                <textarea
                  defaultValue={shop?.banner_text}
                  {...register("banner_text")}
                  type="text"
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Account Manager: </label>
                <select
                  className="form-control"
                  {...register("account_manager")}
                  defaultValue={shop?.account_manager}
                >
                  <option value="admin">admin</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Sales Representive: </label>
                <select
                  className="form-control"
                  {...register("sales_rep")}
                  defaultValue={shop?.sales_rep}
                >
                  <option value="admin">admin</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Menu Representive: </label>
                <select
                  className="form-control"
                  {...register("menu_rep")}
                  defaultValue={shop?.menu_rep}
                >
                  {" "}
                  <option value="admin">admin</option>
                </select>
              </div>
            </div>
          </div>
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
              <button className="btn btn-danger ml-auto">Update Shop</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingForm;
