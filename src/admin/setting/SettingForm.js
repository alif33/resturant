import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const SettingForm = () => {
  const [shop, setShop] = useState({});
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
                <select value={shop?.shop_status} {...register("shop_status")}>
                  <option value="Live">Live</option>
                  <option value="Temporarily">Temporarily</option>
                  <option value="Temporarily Paused">Temporarily Paused</option>
                  <option value="M2M">M2M</option>
                  <option value="Disabled">Disabled</option>
                </select>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Type: </label>
                <select
                  value={shop?.shop_pay_type}
                  {...register("shop_pay_type")}
                >
                  <option value="Direct">Direct</option>
                  <option value="Deposit">Deposit</option>
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
                  placeholder="Agnelo's Stuffed Pizza"
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
                <label htmlFor="">Update Logo:</label>
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
                <label htmlFor="">Update Logo:</label>
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
                <label htmlFor="">Update Logo:</label>
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
                <label htmlFor="">Account Manager: </label>
                <input
                  className="form-control"
                  {...register("account_manager")}
                  type="text"
                  defaultValue={shop?.account_manager}
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Sales Representive: </label>
                <input
                  className="form-control"
                  {...register("sales_rep")}
                  type="text"
                  defaultValue={shop?.sales_rep}
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Menu Representive: </label>
                <input
                  className="form-control"
                  {...register("menu_rep")}
                  type="text"
                  defaultValue={shop?.menu_rep}
                />
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
