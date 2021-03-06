import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const PaymentForm = () => {
  const [shop, setShop] = useState({});
  const [load, setLoad] = useState(false);
  const [loading, setLoading] = useState(false);
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

  console.log(shop);

  const onSubmit = (data) => {
    console.log(data);
    const newData = { ...shop, ...data };
    console.log(newData);
    shopUpdate(`/admin/shop/${shopId}`, newData, token, shop, setLoading);
    setLoad(!load);
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Email Statements To </label>
                <input
                  defaultValue={shop?.email_statement}
                  {...register("email_statement", { required: true })}
                  type="text"
                  placeholder="Agnelo's Stuffed Pizza"
                />
              </div>
              {errors.email_statement && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Flat Amount</label>
                <input
                  defaultValue={shop?.flat_fee}
                  {...register("flat_fee", { required: true })}
                  type="text"
                />
              </div>
              {errors.flat_fee && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Payout frequency </label>
                <select
                  defaultValue={shop?.payment_frequency}
                  {...register("payment_frequency", { required: true })}
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Biweekly">Biweekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
              </div>
              {errors.payment_frequency && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Free Trial Ends </label>
                <input
                  defaultValue={shop?.trial_end}
                  {...register("trial_end", { required: true })}
                  type="date"
                />
              </div>
              {errors.trial_end && (
                <span className="text-danger">This field is required</span>
              )}

              <div className="form-group-two">
                <label htmlFor="">Processing fee </label>
                <input
                  defaultValue={shop?.processing_fee}
                  {...register("processing_fee", { required: true })}
                  type="text"
                />
              </div>
              {errors.processing_fee && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Contact Method</label>
                <select {...register("contact_method", { required: true })}>
                  <option
                    selected={shop?.contact_method === "Phone"}
                    value="Phone"
                  >
                    Phone
                  </option>
                  <option selected={shop?.contact_method === "Sms"} value="Sms">
                    Sms
                  </option>
                  <option
                    selected={shop?.contact_method === "Email"}
                    value="Email"
                  >
                    Email
                  </option>
                  <option
                    selected={shop?.contact_method === "Tablet"}
                    value="Tablet"
                  >
                    Tablet
                  </option>
                </select>
              </div>
              {errors.contact_method && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
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
              <button className="btn btn-danger ml-auto">Update Shop</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
