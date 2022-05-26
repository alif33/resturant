const Order = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-0 text-red fw-bold mb-2">Order</h2>
        <div className="border-bottom"></div>
        <div className="info-menu">
          <ul className="list-unstyled">
            <li>
              Transm Method: <b>Phone</b>
            </li>
            <li>Minimum: $0.00</li>
            <li>
              Avg. Conf. Time: <span className="button">0m</span>
            </li>
            <li>
              #Orders: <span className="button">0</span>
            </li>
            <li>
              #Orders Avg:<span className="button">0</span>
            </li>
            <li>
              #Voided: <span className="button bg-danger">0</span>
            </li>
            <li>
              #Successful: <span className="button bg-success">0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Order;
