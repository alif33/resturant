import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const OrderingFrom = () => {
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
        <form>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Minimum Pickup Order </label>
                <div className="banner-text">
                  <input
                    defaultValue={shop?.minimum_pickUp_order}
                    {...register("minimum_pickUp_order", { required: true })}
                    type="text"
                  />
                  <p>
                    Order subtotal for pickup orders must meet this limit for
                    the order to be accepted
                  </p>
                </div>
              </div>
              {errors.minimum_pickUp_order && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Pickup estimate </label>
                <input
                  defaultValue={shop?.pickUp_estimate}
                  {...register("pickUp_estimate", { required: true })}
                  type="text"
                  placeholder="15-30 min"
                />
              </div>
              {errors.pickUp_estimate && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Delivery estimate </label>
                <input
                  defaultValue={shop?.delivery_estimate}
                  {...register("delivery_estimate", { required: true })}
                  type="text"
                />
              </div>
              {errors.delivery_estimate && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor=""> Online Discount </label>
                <input
                  defaultValue={shop?.online_discount}
                  {...register("online_discount", { required: true })}
                  type="text"
                />
              </div>
              {errors.online_discount && (
                <span className="text-danger">This field is required</span>
              )}

              <div className="form-group-two">
                <label htmlFor="">Pause Delivery Today</label>
                <select
                  defaultValue={shop?.pause_delivery_today}
                  {...register("pause_delivery_today", { required: true })}
                >
                  <option value="active">active</option>
                  <option value="active">active</option>
                  <option value="active">active</option>
                </select>
              </div>
              {errors.pause_delivery_today && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">No Scheduled Order </label>
                <select
                  defaultValue={shop?.no_scheduled_order}
                  {...register("no_scheduled_order", { required: true })}
                >
                  <option value="active">active</option>
                  <option value="active">active</option>
                  <option value="active">active</option>
                </select>
              </div>
              {errors.no_scheduled_order && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Stop Order Today </label>
                <select
                  defaultValue={shop?.stop_order_today}
                  {...register("stop_order_today", { required: true })}
                >
                  <option value="active">active</option>
                  <option value="active">active</option>
                  <option value="active">active</option>
                </select>
              </div>
              {errors.stop_order_today && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>

          <div className="text-right">
            <button className="btn btn-danger ml-auto">Update Shop</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderingFrom;
