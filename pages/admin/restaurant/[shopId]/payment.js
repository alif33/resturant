import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import PaymentForm from "../../../../src/admin/payment/PaymentForm";

const Paymentpage = () => {
  return (
    <Layout2>
      <Navbar status="Payments" />
      <div className="row mt-4">
        <div className="col-12">
          <PaymentForm />
        </div>
      </div>
    </Layout2>
  );
};

export default Paymentpage;
