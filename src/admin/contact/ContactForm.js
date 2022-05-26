const ContactForm = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="">Contact name </label>
                <input type="text" placeholder="4850 S Pulaski Rd" />
              </div>
              <div className="form-group">
                <label htmlFor="">Contact phone</label>
                <div className="banner-text">
                  <input type="text" placeholder="Chicago" />
                  <p>Phone type : n/a</p>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Contact email </label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="">Secondary contact name </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="">Secondary contact phone</label>
                <div className="banner-text">
                  <input type="text" placeholder="Chicago" />
                  <p>Phone type : n/a</p>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="">Secondary contact email </label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group">
                <label htmlFor="">Restaurant phone</label>
                <div className="banner-text">
                  <input type="text" placeholder="Chicago" />
                  <p>Phone type: landline</p>
                </div>
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

export default ContactForm;
