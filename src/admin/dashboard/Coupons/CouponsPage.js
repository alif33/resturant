import { IoIosAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { authPost } from "../../../../__lib__/helpers/HttpService";
import { toast } from "react-hot-toast";
import Cookies from "universal-cookie";

const CouponsPage = () => {
  const router = useRouter();
  const { shopId } = router.query;
  const cookies = new Cookies();
  const token = cookies.get('_admin');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const newData = { ...data, _shop: shopId };

    authPost(`admin/coupon`, newData, token).then((res) => {
      console.log(res);
      if (res.success) {
        toast.success(res.message);
        reset();
      }
    });
  };
  return (
    <div className="card">
      <div className="card-body">
        <h2>Angelo&apos;s Stuffed Pizza</h2>
        <div className="mt-5">
          <h2>Coupon: New</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12">
              <label htmlFor="" className="delivery-zone-label">
                Name
              </label>
              <div className="input-group delivery-zone-input-group">
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                />
                {errors.name && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="" className="delivery-zone-label">
                Description
              </label>
              <div className="input-group delivery-zone-input-group mb-3">
                <textarea
                  {...register("description", { required: true })}
                  type="text"
                  placeholder="Description"
                />
                {errors.description && <span>This field is required</span>}
              </div>
              <span className="btn-span">Sentence case</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="" className="delivery-zone-label">
                Type
              </label>
              <div className="input-group delivery-zone-input-group">
                <select
                  {...register("_type", { required: true })}
                  className="w-100 "
                >
                  <option value="Flat">Flat</option>
                  <option value="Percentage">Percentage</option>
                </select>
                {errors._type && <span>This field is required</span>}
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="" className="delivery-zone-label">
                amount
              </label>
              <div className="input-group delivery-zone-input-group">
                <input
                  {...register("amount", { required: true })}
                  type="tel"
                  placeholder="0"
                  className="desable"
                />
                {errors.amount && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              {" "}
              <div className="schedule-card-page">
                <div className="s-card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <h3>Conditions</h3>
                  </div>
                </div>
                <div className="row py-3">
                  <div className="col-2 m-auto text-center">
                    <button type="button" className="btn btn-success">
                      <IoIosAdd />
                      New Conditions
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4 m-auto">
                    <div className="input-group delivery-zone-input-group">
                      <select
                        {...register("coupon_condition")}
                        className="w-100 "
                      >
                        <option value="Order Subtotal">Order Subtotal</option>
                        <option value="Has Product Type">
                          Has Product Type
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 text-right">
              <span className="btn-span">Cancel</span>
              <button type="submit" className="btn btn-info ml-4">
                save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CouponsPage;
