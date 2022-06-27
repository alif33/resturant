import React, { useEffect, useState } from "react";
import Layout from "../../../src/admin/layout/Layout";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { useDispatch, useSelector } from "react-redux";
import { setLiveShop } from "../../../store/shop/actions";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const LiveShopPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [shopList, setShopList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLiveShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);

  useEffect(() => {
    setShopList(shop.liveShopList);
  }, [shop.liveShopList]);

  const applySearch = () => {
    let listForSearch = shop.liveShopList;
    if (searchInput) {
      listForSearch = listForSearch.filter(
        (item) =>
          item.shop_name
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1 ||
          item._id.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1 ||
          item.owners_phone
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
      setShopList(listForSearch);
    } else {
      setShopList(shop.liveShopList);
    }
  };
  useEffect(() => {
    applySearch();
  }, [searchInput]);

  return (
    <Layout>
      <RestaurentNavbar status="liveshop" />
      <div className="row">
        <div className="col-12 mt-4">
          <RestaurentTable
            shops={shopList}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
      </div>
    </Layout>
  );
};

export default LiveShopPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
