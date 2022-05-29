import { IoIosAdd } from "react-icons/io";

const CouponsPage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Angelo&apos;s Stuffed Pizza</h2>
        <div className="mt-5">
          <h2>Coupon: New</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="" className="delivery-zone-label">
              Name
            </label>
            <div className="input-group delivery-zone-input-group">
              <input type="text" placeholder="0" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="" className="delivery-zone-label">
              Description
            </label>
            <div className="input-group delivery-zone-input-group mb-3">
              <textarea type="text" placeholder="0" />
            </div>
            <span className="btn-span">Sentence case</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="" className="delivery-zone-label">
              Name
            </label>
            <div className="input-group delivery-zone-input-group">
              <select className="w-100 ">
                <option value=""></option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="" className="delivery-zone-label">
              Name
            </label>
            <div className="input-group delivery-zone-input-group">
              <input type="text" placeholder="0" className="desable" />
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
                  <button className="btn btn-success">
                    <IoIosAdd />
                    New Conditions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 text-right">
                <span className="btn-span">Cancel</span>
                <span className="btn btn-info ml-4">save</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CouponsPage;
