import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const LocationForm = () => {
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
                <label htmlFor="">*Address </label>
                <input
                  defaultValue={shop?.address.shop_address}
                  {...register("shop_address", { required: true })}
                  type="text"
                />
              </div>
              {errors.shop_address && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">*City </label>
                <input
                  type="text"
                  defaultValue={shop?.address.city}
                  {...register("city", { required: true })}
                />
              </div>
              {errors.city && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">*State </label>
                <input
                  type="text"
                  defaultValue={shop?.address.state}
                  {...register("state", { required: true })}
                />
              </div>
              {errors.state && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">*Zipcode </label>
                <input
                  type="text"
                  defaultValue={shop?.address.zip_code}
                  {...register("zip_code", { required: true })}
                />
              </div>
              {errors.zip_code && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Time Zone </label>
                <input
                  type="text"
                  defaultValue={shop?.address.time_zone}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Longitude </label>
                <input
                  type="text"
                  defaultValue={shop?.address.lat}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Latitude </label>
                <input
                  type="text"
                  defaultValue={shop?.address.long}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>

          <div className="text-right">
            <button type="submit" className="btn btn-danger ml-auto">
              Update Shop
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LocationForm;
