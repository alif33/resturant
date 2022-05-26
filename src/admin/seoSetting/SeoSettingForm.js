import React, { useState } from "react";

const SeoSettingForm = () => {
  const [googlePasswordShow, setGooglePasswordShow] = useState(true);
  const [applePasswordShow, setApplePasswordShow] = useState(true);
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="">Official Domain </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="">Google My Business Domain </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="">Own website </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="LockedDomain">Locked domain </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="LockedDomain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="">* Price range </label>
                <select>
                  <option value="">$$</option>
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">
                  <b>MealNow </b>Issued email
                </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="">Google password </label>
                <input type={googlePasswordShow ? "password" : "text"} />
                {googlePasswordShow ? (
                  <span
                    onClick={() => setGooglePasswordShow(!googlePasswordShow)}
                  >
                    show
                  </span>
                ) : (
                  <span
                    onClick={() => setGooglePasswordShow(!googlePasswordShow)}
                  >
                    hide
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="">Google status</label>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Google owner</label>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="">Apple email</label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="">Apple password </label>
                <input type={applePasswordShow ? "password" : "text"} />
                {applePasswordShow ? (
                  <span
                    onClick={() => setApplePasswordShow(!applePasswordShow)}
                  >
                    show
                  </span>
                ) : (
                  <span
                    onClick={() => setApplePasswordShow(!applePasswordShow)}
                  >
                    hide
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="">Apple maps status</label>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Apple maps owner</label>
                <select>
                  <option value=""></option>
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

export default SeoSettingForm;
