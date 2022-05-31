const SettingForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="row">
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Status: </label>
                <select>
                  <option value="Onboarding">Onboarding</option>
                  <option value="Onboarding">Onboarding</option>
                </select>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form-group-two">
                <label htmlFor="">Shop Type: </label>
                <select>
                  <option value="Onboarding">Shop Paid</option>
                  <option value="Onboarding">Shop Paid</option>
                </select>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Name </label>
                <input type="text" placeholder="Agnelo's Stuffed Pizza" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">chain </label>
                <select>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Description </label>
                <textarea></textarea>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Agreement Signed Date </label>
                <input
                  type="text"
                  placeholder="e.g. 2020-01-30"
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3">
            <div className="col-md-3">
              <img
                src="/img/logo.png"
                alt="logo"
                className="logo w-100 h-auto"
              />
            </div>
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Logo:</label>
              </div>
              <input type="file" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Landing Page Image: </label>
              </div>
              <input type="file" />
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div>
                <label htmlFor="">Update Landing Page Image: </label>
              </div>
              <input type="file" />
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3 mb-3">
            <div className="col-md-4">
              <div>
                <label htmlFor="">
                  Update Desktop Background for Landing Page:{" "}
                </label>
              </div>
              <input type="file" />
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault2"
                  >
                    Delete
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Banner Text </label>
                <div className="banner-text">
                  <textarea
                    aria-label="Disabled input example"
                    disabled
                  ></textarea>
                  <p>
                    Add a message to the top of all the restaurant&apos;s pages
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-6 ml-142px">
              <div className="form-group-two">
                <label htmlFor="">Account Manager: </label>
                <select>
                  <option value="">Mia tv</option>
                  <option value="">Mia tv</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Sales Representive: </label>
                <select>
                  <option value="">Antony Pollotta</option>
                  <option value="">Antony Pollotta</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
              <div className="form-group-two">
                <label htmlFor="">Menu Representive: </label>
                <select>
                  <option value="">Mjelima Borova</option>
                  <option value="">Mjelima Borova</option>
                </select>
                <button className="transparent">Claim</button>
              </div>
            </div>
          </div>
          <div className="text-right">
              <button className="btn btn-danger ml-auto">Update Shop</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingForm;
