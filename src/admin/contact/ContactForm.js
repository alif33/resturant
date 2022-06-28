import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const ContactForm = () => {
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
                <label htmlFor="">Owners Name </label>
                <input
                  defaultValue={shop?.owners_name}
                  {...register("owners_name")}
                  type="text"
                />
              </div>
              {errors.owners_name && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Owners phone</label>
                <div className="banner-text">
                  <input
                    type="text"
                    defaultValue={shop?.owners_phone}
                    {...register("owners_phone", {
                      pattern:
                        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i,
                    })}
                  />
                </div>
                {errors.owners_phone && (
                  <span className="text-danger">This field for number</span>
                )}
              </div>
              <div className="form-group-two">
                <label htmlFor="">Owners email </label>
                <input
                  defaultValue={shop?.owners_email}
                  {...register("owners_email")}
                  type="email"
                />
              </div>
              {errors.owners_email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Secondary contact name </label>
                <input
                  defaultValue={shop?.se_contact_name}
                  {...register("se_contact_name")}
                  type="text"
                />
              </div>
              {errors.se_contact_name && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Secondary contact phone</label>
                <div className="banner-text">
                  <input
                    type="text"
                    defaultValue={shop?.se_contact_phone}
                    {...register("se_contact_phone")}
                  />
                </div>
                {errors.se_contact_phone && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
              <div className="form-group-two">
                <label htmlFor="">Secondary contact email </label>
                <input
                  defaultValue={shop?.se_contact_email}
                  {...register("se_contact_email")}
                  type="text"
                />
              </div>
              {errors.se_contact_email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Restaurant phone</label>
                <div className="banner-text">
                  <input
                    defaultValue={shop?.res_phone}
                    {...register("res_phone")}
                    type="text"
                    placeholder="Chicago"
                  />
                </div>
                {errors.res_phone && (
                  <span className="text-danger">This field is required</span>
                )}
              </div>
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

export default ContactForm;
