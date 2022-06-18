import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const SeoSettingForm = () => {
  const [googlePasswordShow, setGooglePasswordShow] = useState(true);
  const [applePasswordShow, setApplePasswordShow] = useState(true);
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
    const newData = { ...shop, ...data };
    console.log(newData);
    shopUpdate(`/admin/shop/${shopId}`, newData, token);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">GMB Domain </label>
                <input
                  defaultValue={shop?.gmb_domain}
                  {...register("gmb_domain", { required: true })}
                  type="text"
                />
              </div>
              {errors.gmb_domain && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Own website </label>
                <input
                  defaultValue={shop?.own_website}
                  {...register("own_website", { required: true })}
                  type="text"
                />
              </div>
              {errors.own_website && (
                <span className="text-danger">This field is required</span>
              )}

              <div className="form-group-two">
                <label htmlFor="">GMB Status </label>
                <select
                  defaultValue={shop?.gmb_status}
                  {...register("gmb_status", { required: true })}
                >
                  <option value="Verified">Verified</option>
                  <option value="Not Verified">Not Verified</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
              {errors.gmb_status && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">gmb_status </label>
                <select
                  defaultValue={shop?.gmb_role}
                  {...register("gmb_role", { required: true })}
                >
                  <option value="Primary Owner">Primary Owner</option>
                  <option value="Manager">Manager</option>
                  <option value="Owner">Owner</option>
                </select>
              </div>
              {errors.gmb_role && (
                <span className="text-danger">This field is required</span>
              )}

              <div className="form-group-two">
                <label htmlFor="">GMB Email </label>
                <input
                  defaultValue={shop?.gmb_email}
                  {...register("gmb_email", { required: true })}
                  type="text"
                />
              </div>
              {errors.gmb_email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">GMB password </label>
                <input
                  type={googlePasswordShow ? "password" : "text"}
                  defaultValue={shop?.gmb_password}
                  {...register("gmb_password", { required: true })}
                />
                {googlePasswordShow ? (
                  <span
                    onClick={() => setGooglePasswordShow(!googlePasswordShow)}
                  >
                    show
                  </span>
                ) : (
                  <span
                    onClick={() => setGooglePasswordShow(!googlePasswordShow)}
                  >
                    hide
                  </span>
                )}
              </div>
              {errors.gmb_password && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">GMB owner</label>
                <select
                  defaultValue={shop?.gmb_owner}
                  {...register("gmb_owner", { required: true })}
                >
                  <option value="Competitor">Competitor</option>
                  <option value="Meal Now">Meal Now</option>
                </select>
              </div>
              {errors.gmb_owner && (
                <span className="text-danger">This field is required</span>
              )}
               <div className="form-group-two">
                <label htmlFor="">Meal Now Domain </label>
                <input
                  defaultValue={shop?.meal_now_domain}
                  {...register("meal_now_domain", { required: true })}
                  type="text"
                />
              </div>
              {errors.meal_now_domain && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="text-right">
            <button type="submit"className="btn btn-danger ml-auto">Update Shop</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SeoSettingForm;
