const InfoCard = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mb-0">Info</h4>
            <p>UUID: 391992D1-25a8-454a-831c-6c6dfd87e1f</p>
            <div className="border-bottom"></div>
            <div className="row">
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>Owner Name: Adrian Zamudio</li>
                    <li>Owner Cell:</li>
                    <li>Phone type: n/a</li>
                    <li>Owner Email: angelosstuffedpizza@yahoo.com</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>Shop&apos;s Local Time: 16:51 CST</li>
                    <li>
                      Phone: <b>(773)9279355</b>
                    </li>
                    <li>Phone type: landine</li>
                    <li>Fax:</li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="info-menu">
                  <ul className="list-unstyled">
                    <li>Acc: Manager./</li>
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
                    <li>Deliver: Not Open</li>
                    <li>Pickup: 11:00-21:15</li>
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
