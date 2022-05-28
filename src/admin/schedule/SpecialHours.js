import React from 'react';

const SpecialHours = () => {
    return (
        <div className="schedule-card-page mt-3">
        <div className="s-card-header">
          <div className="d-flex align-items-center justify-content-between">
            <h3>Special Hours</h3>
            <button className="btn btn-outline-danger">Add</button>
          </div>{" "}
        </div>
  
        <div className="row">
          <div className="col-md-6 pt-4 pl-4">
            <h4 className="card-subtitle">Delivery</h4>
            {/* <ul className="list-unstyled mt-3">
              <li className="mt-3">
                <div className="card-open-button">
                  <button className="btn btn-success">Open</button>
                </div>
  
                <div className="d-flex align-items-center mt-1">
                  <span className="card-day">Sunday</span>
                  <span className="card-time">12:00</span>
                  <span className="from-to">to</span>
                  <span className="card-time">18:00</span>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>
              <li className="mt-3">
                <div className="card-open-button">
                  <button className="btn btn-success">Open</button>
                </div>
  
                <div className="d-flex align-items-center mt-1">
                  <span className="card-day">Sunday</span>
                  <span className="card-time">12:00</span>
                  <span className="from-to">to</span>
                  <span className="card-time">18:00</span>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>
            </ul> */}
          </div>
          <div className="col-md-6 pt-4 pl-4">
            {/* <h4 className="card-subtitle">Pickup</h4> */}
            {/* <ul className="list-unstyled mt-3">
              <li className="mt-3">
                <div className="card-open-button">
                  <button className="btn btn-success">Open</button>
                </div>
  
                <div className="d-flex align-items-center mt-1">
                  <span className="card-day">Sunday</span>
                  <span className="card-time">12:00</span>
                  <span className="from-to">to</span>
                  <span className="card-time">18:00</span>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>
              <li className="mt-3">
                <div className="card-open-button">
                  <button className="btn btn-success">Open</button>
                </div>
  
                <div className="d-flex align-items-center mt-1">
                  <span className="card-day">Sunday</span>
                  <span className="card-time">12:00</span>
                  <span className="from-to">to</span>
                  <span className="card-time">18:00</span>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </li>
            </ul> */}
          </div>
        </div>
  
        {/* <div className="s-card-bottom">
          <div className="d-flex align-items-center justify-content-end">
            <button className="btn btn-success">Save</button>
          </div>
        </div> */}
      </div>
    );
};

export default SpecialHours;