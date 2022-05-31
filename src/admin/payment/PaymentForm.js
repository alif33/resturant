import React from "react";

const PaymentForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Email Statements To </label>
                <input type="text" placeholder="Agnelo's Stuffed Pizza" />
              </div>
            </div>

            <div className="col-md-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault2">
                  Receives daily report
                </label>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Statement type </label>
                <select aria-label="Disabled input example" disabled>
                  <option value="">simple</option>
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Payout frequency </label>
                <select aria-label="Disabled input example" disabled>
                  <option value="">monthly</option>
                  <option value=""></option>
                </select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="border-bottom mb-3"></div>
              <h4>MealNow Fees</h4>
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Flat Amount </label>
                <input
                  type="text"
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Percentage Amount </label>
                <input
                  type="text"
                  placeholder="40"
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
            </div>

            <div className="col-md-12">
              <div className="border-bottom mb-3"></div>
              <h4>Transmission Method</h4>
            </div>
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Fax </label>
                <input type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Default fax provider </label>
                <select>
                  <option value="">default</option>
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Cc order emails </label>
                <input type="text" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Transimission method </label>
                <select>
                  <option value="">phone</option>
                  <option value=""></option>
                </select>
              </div>
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

export default PaymentForm;
