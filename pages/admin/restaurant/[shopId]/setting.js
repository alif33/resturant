import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import SettingForm from "../../../../src/admin/setting/SettingForm";

const AddNewShop = () => {
  return (
    <Layout2>
      <Navbar status="Settings" />
      <div className="row mt-4">
        <div className="col-12">
          <SettingForm />
        </div>
      </div>
    </Layout2>
  );
};

export default AddNewShop;
