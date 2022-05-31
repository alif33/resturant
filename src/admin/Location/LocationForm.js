const LocationForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">*Address </label>
                <input type="text" placeholder="4850 S Pulaski Rd" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">*City </label>
                <input type="text" placeholder="Chicago" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">*State </label>
                <select>
                  <option value="">Illios(IL)</option>
                </select>
              </div>
              <div className="form-group-two">
                <label htmlFor="">*Zipcode </label>
                <input type="text" placeholder="60632" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Time Zone </label>
                <input
                  type="text"
                  placeholder="CST"
                  aria-label="Disabled input example"
                  disabled
                />
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
                  placeholder="-87 723783"
                  aria-label="Disabled input example"
                  disabled
                />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Latitude </label>
                <input
                  type="text"
                  placeholder="41.8045513"
                  aria-label="Disabled input example"
                  disabled
                />
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

export default LocationForm;
