import Layout from "../../src/admin/layout/Layout";
import Navbar from "../../src/admin/Navbar/Navbar";
import Delivery from "../../src/admin/dashboard/Delivery/Delivery";
import InfoCard from "../../src/admin/dashboard/InfoCard/InfoCard";
import Marketing from "../../src/admin/dashboard/Marketing/Marketing";
import Menu from "../../src/admin/dashboard/Menu/Menu";
import Order from "../../src/admin/dashboard/Order/Order";
import PartnerInfo from "../../src/admin/dashboard/PartnerInfo/PartnerInfo";
import Payment from "../../src/admin/dashboard/Payments/Payment";
import Payout from "../../src/admin/dashboard/Payout/Payout";
import Storefront from "../../src/admin/dashboard/Storefront/Storefront";

const Home = () => {
  return (
    <Layout>
      <Navbar status="Dashboard" />
      <div className="row">
        <div className="col-12">
          <div className="mt-4">
            <h2>#57669 Angelo&apos;s Stuffed Pizza</h2>
            <p className="mb-0">4850 S Pulaski Rd. Chicago IL, 60632</p>
            <p className="mb-2">County: Cook County</p>
          </div>
        </div>
      </div>
      <InfoCard />
      <div className="row mt-5">
        <div className="col-sm-6">
          <Order />
        </div>
        <div className="col-sm-6">
          <Payment />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-4">
          <Menu />
        </div>
        <div className="col-sm-4">
          <Delivery />
        </div>
        <div className="col-sm-4">
          <Storefront />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-6">
          <Payout />
        </div>
        <div className="col-sm-6">
          <Marketing />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          <PartnerInfo />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
