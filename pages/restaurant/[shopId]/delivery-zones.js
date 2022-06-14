import DeliveryZonePage from "../../../src/admin/deliveryzone/DeliveryZonePage";
import{ Layout2 } from "../../../src/admin/layout/Layout";
import { useRouter } from "next/router";

const DeliveryZones = () => {
  const router = useRouter();
  const {shopId} = router.query
  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
            <DeliveryZonePage />
        </div>
      </div>
    </Layout2>
  );
};

export default DeliveryZones;
