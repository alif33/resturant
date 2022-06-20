import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import SeoSettingForm from "../../../../src/admin/seoSetting/SeoSettingForm";

const SeoSetting = () => {
  const router = useRouter();
  const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId}>
      <Navbar status="SEO Settings" shopId={shopId} />
      <div className="row mt-4">
        <div className="col-12">
          <SeoSettingForm />
        </div>
      </div>
    </Layout2>
  );
};

export default SeoSetting;


export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});