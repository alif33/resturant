import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const DeliveryZonePage = () => {
  return (
    <div className="card">
      <div className="card-body">
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
              <input type="text" placeholder="0" />
              <button className="btn btn-danger">Draw</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="" className="delivery-zone-label">
              Driving Radius
            </label>
            <div className="input-group delivery-zone-input-group">
              <input type="text" placeholder="0" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="" className="delivery-zone-label">
              Minimum{" "}
            </label>
            <div className="input-group delivery-zone-input-group">
              <input type="text" placeholder="0" />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="" className="delivery-zone-label">
              Delivery fee
            </label>
            <div className="input-group delivery-zone-input-group">
              <input type="text" placeholder="0" />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="" className="delivery-zone-label">
              Delivery radius
            </label>
            <div className="input-group delivery-zone-input-group">
              <input type="text" placeholder="0" />
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-12">

            </div>
        </div>
        <div className="row mt-4 ">
            <div className="col-12">
                <button className="btn-cancel">Cancel</button>
                <button className="btn btn-danger rounded ml-4 " >Create Delivery zone </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryZonePage;
