const Delivery = ({shop}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-0 text-red fw-bold mb-2">Delivery</h2>
        <div className="border-bottom"></div>
        <div className="info-menu">
          <ul className="list-unstyled">
            <li>Delivery Available: <span className="button bg-danger">No</span></li>
            <li>Delivery min: {shop?.minimum_delivery_order ? shop.minimum_delivery_order : "N/A"}</li>
            <li>Estimate delivery: {shop?.delivery_estimate ? shop.delivery_estimate : "N/A"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
