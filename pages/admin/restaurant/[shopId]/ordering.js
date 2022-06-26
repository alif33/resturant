import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import OrderingFrom from "../../../../src/admin/ordering/OrderingFrom";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const OrderingPage = () => {

  const router = useRouter();
  const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId} >
      <Navbar status="Ordering"  shopId={shopId} />
      <div className="row mt-4">
        <div className="col-12">
          <OrderingFrom />
        </div>
      </div>
    </Layout2>
  );
};

export default OrderingPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
