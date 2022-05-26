import React from "react";
import Layout from "../../src/admin/layout/Layout";
import Navbar from "../../src/admin/Navbar/Navbar";
import PaymentForm from "../../src/admin/payment/PaymentForm";

const Paymentpage = () => {
  return (
    <Layout>
      <Navbar status="Payments" />
      <div className="row mt-4">
        <div className="col-12">
          <PaymentForm />
        </div>
      </div>
    </Layout>
  );
};

export default Paymentpage;
