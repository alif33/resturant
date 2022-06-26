import { Layout2 } from "../../../../src/admin/layout/Layout";
import Navbar from "../../../../src/admin/Navbar/Navbar";
import Delivery from "../../../../src/admin/dashboard/Delivery/Delivery";
import InfoCard from "../../../../src/admin/dashboard/InfoCard/InfoCard";
import Marketing from "../../../../src/admin/dashboard/Marketing/Marketing";
import Menu from "../../../../src/admin/dashboard/Menu/Menu";
import Order from "../../../../src/admin/dashboard/Order/Order";
import PartnerInfo from "../../../../src/admin/dashboard/PartnerInfo/PartnerInfo";
import Payment from "../../../../src/admin/dashboard/Payments/Payment";
import Payout from "../../../../src/admin/dashboard/Payout/Payout";
import Storefront from "../../../../src/admin/dashboard/Storefront/Storefront";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getData } from "../../../../__lib__/helpers/HttpService";
import { useState } from "react";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const ShopPage = () => {
  const [shop, setShop] = useState({});

  const router = useRouter();
  const { shopId } = router?.query;

  useEffect(() => {
    getData(`admin/shop/${shopId}`).then((res) => setShop(res));
  }, [shopId]);

  return (
    <Layout2 shopId={shopId}>
      <Navbar status="Dashboard"  shopId={shopId} />
      <div className="row">
        <div className="col-12">
          <div className="mt-4">
            <h2>
              {" "}
              {shop?._id?.slice(-5, shop?._id.length)} {shop?.shop_name}
            </h2>
            <p className="mb-0">4850 S Pulaski Rd. Chicago IL, 60632</p>
            <p className="mb-2">County: Cook County</p>
          </div>
        </div>
      </div>
      <InfoCard shop={shop} />
      <div className="row mt-5">
        <div className="col-sm-6">
          <Order />
        </div>
        <div className="col-sm-6">
          <Payment shop={shop} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-4">
          <Menu />
        </div>
        <div className="col-sm-4">
          <Delivery shop={shop} />
        </div>
        <div className="col-sm-4">
          <Storefront />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-6">
          <Payout shop={shop} />
        </div>
        <div className="col-sm-6">
          <Marketing shop={shop} />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          <PartnerInfo />
        </div>
      </div>
    </Layout2>
  );
};

export default ShopPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
