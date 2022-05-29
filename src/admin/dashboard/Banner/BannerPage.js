import { IoMdAddCircle } from "react-icons/io";

const BannerPage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Angelo&apos;s Stuffed Pizza</h2>
        <div className="mt-5 d-flex align-items-center justify-content-between">
          <h2>#57669 Angelo&apos;s Stuffed Pizza : Banners</h2>
          <button className="btn btn-danger">
            <IoMdAddCircle />
            Add New Banners
          </button>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            {" "}
            <div className="schedule-card-page">
              <div className="s-card-header">
                <div className="d-flex align-items-center justify-content-center">
                  <h4>The shop has no bannger</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
