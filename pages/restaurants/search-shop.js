import React, { useEffect } from "react";
import Layout from "../../src/admin/layout/Layout";
import RestaurentNavbar from "../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { useDispatch, useSelector } from "react-redux";
import { setShop } from "../../store/shop/actions";
import SearchShop from "../../src/admin/restaurent/searchShop/SearchShop";

const SearchShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);
  return (
    <Layout>
      <RestaurentNavbar status="searchshop" />
      <div className="row">
        <div className="col-12 mt-4">
          <div className="row">
            <div className="col-6 m-auto">
              <SearchShop />
            </div>
          </div>
          <RestaurentTable shops={shop.shopList} />
        </div>
      </div>
    </Layout>
  );
};

export default SearchShopPage;
