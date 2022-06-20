import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import SettingForm from "../../../../src/admin/setting/SettingForm";

const AddNewShop = () => {
  const router = useRouter();
  const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId}>
      <Navbar status="Settings" shopId={shopId} />
      <div className="row mt-4">
        <div className="col-12">
          <SettingForm />
        </div>
      </div>
    </Layout2>
  );
};

export default AddNewShop;


export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});