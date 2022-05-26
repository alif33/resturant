import React from "react";
import Layout from "../../src/admin/layout/Layout";
import Navbar from "../../src/admin/Navbar/Navbar";
import OrderingFrom from "../../src/admin/ordering/OrderingFrom";

const OrderingPage = () => {
  return (
    <Layout>
      <Navbar status="Ordering" />
      <div className="row mt-4">
        <div className="col-12">
          <OrderingFrom />
        </div>
      </div>
    </Layout>
  );
};

export default OrderingPage;
