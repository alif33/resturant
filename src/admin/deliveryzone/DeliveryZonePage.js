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
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223924372!2d90.27923775747219!3d23.780887456211758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1655171324546!5m2!1sen!2sbd"
              width="600"
              height="450"
              style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <label htmlFor="" className="delivery-zone-label">
              Minimum
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
          <div className="col-12"></div>
        </div>
        <div className="row mt-4 ">
          <div className="col-12">
            <button className="btn-cancel">Cancel</button>
            <button className="btn btn-danger rounded ml-4 ">
              Create Delivery zone{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryZonePage;
