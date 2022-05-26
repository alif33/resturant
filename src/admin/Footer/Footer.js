const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-6">
              <p className="mb-0 text-muted">ColoredStrategies 2019</p>
            </div>
            <div className="col-sm-6 d-none d-sm-block">
              <ul className="breadcrumb pt-0 pr-0 float-right">
                <li className="breadcrumb-item mb-0">
                  <a href="#" className="btn-link">
                    Review
                  </a>
                </li>
                <li className="breadcrumb-item mb-0">
                  <a href="#" className="btn-link">
                    Purchase
                  </a>
                </li>
                <li className="breadcrumb-item mb-0">
                  <a href="#" className="btn-link">
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
