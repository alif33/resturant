import DeliveryZonePage from "../../src/admin/deliveryzone/DeliveryZonePage";
import Layout from "../../src/admin/layout/Layout";

const DeliveryZones = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
            <DeliveryZonePage />
        </div>
      </div>
    </Layout>
  );
};

export default DeliveryZones;
