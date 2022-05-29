import Layout from "../../../src/admin/layout/Layout";
import OrderPage from "../../../src/admin/dashboard/Orders/OrderPage";

const Orders = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <OrderPage />
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
