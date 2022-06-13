const InfoCard = ({ shop }) => {
  console.log(shop);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-0">Info</h4>
            <p>UUID: {`391992D1-25a8-454a-831c-6c6dfd87e1f`}</p>
            <div className="border-bottom"></div>
            <div className="row">
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>
                      Owner Name: {shop?.owners_name ? shop.owners_name : "N/A"}
                    </li>
                    <li>
                      Owner Cell:{" "}
                      {shop?.owners_phone ? shop.owners_phone : "N/A"}
                    </li>
                    {/* <li>Phone type: {shop.owners_name ? shop.owners_name : "N/A"}</li> */}
                    <li>
                      Owner Email:{" "}
                      {shop?.owners_email ? shop.owners_email : "N/A"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>
                      Shop&apos;s Local Time:{" "}
                      {shop?.address?.time_zone
                        ? shop.address.time_zone
                        : "N/A"}
                    </li>
                    <li>
                      Phone:{" "}
                      <b>
                        {shop?.se_contact_phone ? shop.se_contact_phone : "N/A"}
                      </b>
                    </li>
                    {/* <li>
                      Phone type:{" "}
                      {shop?.owners_email ? shop.owners_email : "N/A"}
                    </li>
                    <li>
                      Fax: {shop?.account_manager ? shop.account_manager : "N/A"}
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>Acc: Manager: {shop?.account_manager ? shop.account_manager : "N/A"}</li>
                    <li>Tier: 5</li>
                    <li>Date Onboarded:</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-bottom"></div>
            <div className="row">
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>
                      Delivery Time:{" "}
                      {shop?.shop_status ? shop.shop_status : "N/A"}
                    </li>
                    <li>
                      Pick Up Time:{" "}
                      {shop?.shop_status ? shop.shop_status : "N/A"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>Restaurant has no SliceOS</li>
                    <li>
                      <span className="text-red">Digital Score:</span> Not Found
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>
                      Slice is collecting and filling Sales Tax on behalf of
                      this restaurant Loyality Program: Unenrolled
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
