const OrderingFrom = () => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Delivery Description </label>
                <textarea type="text" />
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>
          <div className="row mt-4">
            <div className="col-md-8">
              <div className="form-group-two">
                <label htmlFor="">Delivery estimate </label>
                <input type="text" placeholder="45 - 60 min" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Pickup estimate </label>
                <input type="text" placeholder="15-30 min" />
              </div>
              <div className="form-group-two">
                <label htmlFor="">Minimum Pickup Order </label>
                <div className="banner-text">
                  <input type="text" placeholder="15-30 min" />
                  <p>
                    Order subtotal for pickup orders must meet this limit for
                    the order to be accepted
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom"></div>

          <div className="row mt-4">
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
          </div>

          <div className="text-right">
            <button className="btn btn-danger ml-auto">Update Shop</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderingFrom;
