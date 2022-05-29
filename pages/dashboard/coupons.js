import CouponsPage from "../../src/admin/dashboard/Coupons/CouponsPage";
import Layout from "../../src/admin/layout/Layout";

const Coupons = () => {
    return (
        <Layout>
        <div className="row">
          <div className="col-12">
              <CouponsPage />
          </div>
        </div>
      </Layout>
    );
};

export default Coupons;