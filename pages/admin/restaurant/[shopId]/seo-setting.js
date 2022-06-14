import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import SeoSettingForm from "../../../../src/admin/seoSetting/SeoSettingForm";

const SeoSetting = () => {
  return (
    <Layout2>
      <Navbar status="SEO Settings" />
      <div className="row mt-4">
        <div className="col-12">
          <SeoSettingForm />
        </div>
      </div>
    </Layout2>
  );
};

export default SeoSetting;
