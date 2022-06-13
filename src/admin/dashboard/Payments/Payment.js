
const Payment = ({shop}) => {

    return (
        <div className="card h-100">
        <div className="card-body">
          <h2 className="card-title mb-0 fw-bold mb-2">Payments</h2>
          <div className="border-bottom"></div>
          <div className="info-menu">
            <ul className="list-unstyled">
              <li>Free Trail: <b>{shop?.owners_email ? shop.owners_email : "N/A"}</b></li>
              <li>Free end: <b>{shop?.trial_end ? shop.trial_end : "N/A"}</b></li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Payment;