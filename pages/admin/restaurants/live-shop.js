import React, { useEffect } from "react";
import Layout from "../../../src/admin/layout/Layout";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { useDispatch, useSelector } from "react-redux";
import { setLiveShop } from "../../../store/shop/actions";

const LiveShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLiveShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);
  return (
    <Layout>
      <RestaurentNavbar status="liveshop" />
      <div className="row">
        <div className="col-12 mt-4">
          <RestaurentTable shops={shop.liveShopList} />
        </div>
      </div>
    </Layout>
  );
};

export default LiveShopPage;
