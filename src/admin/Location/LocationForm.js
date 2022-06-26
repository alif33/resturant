import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "universal-cookie";
import { getData, shopUpdate } from "../../../__lib__/helpers/HttpService";

const LocationForm = () => {
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

  const onSubmit = (data) => {
    const newData = { ...shop, ...data };
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
                <label htmlFor="">*Address </label>
                <input
                  defaultValue={shop?.address?.shop_address}
                  {...register("shop_address")}
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
                  defaultValue={shop?.address?.city}
                  {...register("city")}
                />
              </div>
              {errors.city && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">*State </label>
                <input
                  type="text"
                  defaultValue={shop?.address?.state}
                  {...register("state")}
                />
              </div>
              {errors.state && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Zip Code </label>
                <input
                  type="text"
                  defaultValue={shop?.address?.zip_code}
                  {...register("zip_code")}
                />
              </div>
              {errors.zip_code && (
                <span className="text-danger">This field is required</span>
              )}
              <div className="form-group-two">
                <label htmlFor="">Time Zone </label>
                {/* <input
                  type="text"
                  defaultValue={shop?.address?.time_zone}
                  {...register("time_zone")}
                  aria-label="Disabled input example"
                  disabled
                /> */}

                <select {...register("time_zone")}>
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
                  defaultValue={shop?.address?.lat}
                  {...register("lat")}
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Latitude </label>
                <input
                  type="text"
                  defaultValue={shop?.address?.long}
                  {...register("long")}
                  aria-label="Disabled input example"
                  disabled
                />
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

export default LocationForm;
