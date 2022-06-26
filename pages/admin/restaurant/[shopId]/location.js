import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import LocationForm from "../../../../src/admin/Location/LocationForm";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const LocationPage = () => {
  const router = useRouter();
  const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId}>
      <Navbar status="Location"  shopId={shopId} />
      <div className="row mt-4">
        <div className="col-12">
          <LocationForm />
        </div>
      </div>
    </Layout2>
  );
};

export default LocationPage;


export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});