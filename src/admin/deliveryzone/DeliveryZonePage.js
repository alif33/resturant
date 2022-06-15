import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { IoMdAddCircle } from "react-icons/io";
import { authPost } from "../../../__lib__/helpers/HttpService";
import { toast } from "react-hot-toast"
import Cookies from 'universal-cookie';

const DeliveryZonePage = () => {
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
    const newData = { ...data, shop: shopId };

    authPost(`admin/delivery-zone`, newData, token).then((res) => {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="delivery-zone-card-header d-flex justify-content-between align-items-center">
            <h3>Angelo&apos; Stuffed Pizza</h3>
            <button className="btn btn-danger">
              <IoMdAddCircle />
              <p>Add New Zone</p>
            </button>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="" className="delivery-zone-label">
                Driving Radius
              </label>
              <div className="input-group delivery-zone-input-group">
                <input
                  {...register("driving_radius", { required: true })}
                  type="text"
                  placeholder=" Driving Radius"
                />
                <button className="btn btn-danger">Draw</button>
              </div>
              {errors.driving_radius && <span>This field is required</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="" className="delivery-zone-label">
                add marker
              </label>
              <div className="input-group delivery-zone-input-group">
                <input
                  {...register("add_marker", { required: true })}
                  type="text"
                  placeholder="add marker"
                />
                {errors.add_marker && <span>This field is required</span>}
              </div>
            </div>
          </div>

          {/* <div className="row">
          <div className="col-12">
          <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key:  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
          </div>
        </div> */}

          <div className="row">
            <div className="col-md-4">
              <label htmlFor="" className="delivery-zone-label">
                Minimum Order
              </label>
              <div className="input-group delivery-zone-input-group">
                <input
                  {...register("minimum_order", { required: true })}
                  type="text"
                  placeholder="0"
                />
                {errors.minimum_order && <span>This field is required</span>}
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="" className="delivery-zone-label">
                Delivery fee
              </label>
              <div className="input-group delivery-zone-input-group">
                <input
                  {...register("delivery_fee", { required: true })}
                  type="text"
                  placeholder=" Delivery fee"
                />
                {errors.delivery_fee && <span>This field is required</span>}
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="" className="delivery-zone-label">
                Delivery radius
              </label>
              <div className="input-group delivery-zone-input-group">
                <input
                  {...register("delivery_radius", { required: true })}
                  type="text"
                  placeholder="Delivery radius"
                />
                {errors.delivery_radius && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12"></div>
          </div>
          <div className="row mt-4 ">
            <div className="col-12">
              <button className="btn-cancel">Cancel</button>
              <button type="submit" className="btn btn-danger rounded ml-4 ">
                Create Delivery zone
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryZonePage;
