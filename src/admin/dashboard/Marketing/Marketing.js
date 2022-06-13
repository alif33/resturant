const Marketing = ({ shop }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title mb-0 fw-bold mb-2">Marketing</h2>
        <div className="border-bottom"></div>
        <div className="info-menu">
          <ul className="list-unstyled">
            <li>GBM status: {shop?.gmb_status ? shop.gmb_status : "N/A"}</li>
            <li>GMB Owner: {shop?.gmb_owner ? shop.gmb_owner : "N/A"}</li>
            <li>
              Email:{" "}
              {shop?.gmb_email ? (
                shop.gmb_email
              ) : (
                <span className="button">not issued</span>
              )}
            </li>
            <li>Domain: {shop?.gmb_domain ? shop.gmb_domain : "N/A"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
