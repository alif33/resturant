const Payout = ({shop}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-0 fw-bold text-red mb-2">Payouts</h2>
        <div className="border-bottom"></div>
        <div className="info-menu">
          <ul className="list-unstyled">
            <li>
              Slice fee: <b>2.25</b>
            </li>
            <li>Frequency: {shop?.payment_frequency ? shop.payment_frequency : "N/A"}</li>
            <li>Method: {shop?.payment_type ? shop.payment_type : "N/A"}</li>
            <li>
              Instant Payouts: <b>No</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payout;
