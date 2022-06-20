import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import PaymentForm from "../../../../src/admin/payment/PaymentForm";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const Paymentpage = () => {
  const router = useRouter();
  const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId}>
      <Navbar status="Payments" shopId={shopId} />
      <div className="row mt-4">
        <div className="col-12">
          <PaymentForm />
        </div>
      </div>
    </Layout2>
  );
};

export default Paymentpage;


export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});