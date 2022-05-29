import React from "react";
import BannerPage from "../../src/admin/dashboard/Banner/BannerPage";
import Layout from "../../src/admin/layout/Layout";

const Bannger = () => {
  return (
    <Layout>
      <div className="row mt-4">
        <div className="col-12">
            <BannerPage />
        </div>
      </div>
    </Layout>
  );
};

export default Bannger;
