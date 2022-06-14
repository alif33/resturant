import { Layout2 } from "../../../../src/admin/layout/Layout";
import OrderPage from "../../../../src/admin/dashboard/Orders/OrderPage";
import { useRouter } from "next/router";

const Orders = () => {
  const router = useRouter();
  const {shopId} = router.query
  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
          <OrderPage />
        </div>
      </div>
    </Layout2>
  );
};

export default Orders;
