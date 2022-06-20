import React, { useEffect, useState } from "react";
import Layout from "../../../src/admin/layout/Layout";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { useDispatch, useSelector } from "react-redux";
import { setDisabledShop } from "../../../store/shop/actions";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const DisablesShopPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [shopList, setShopList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDisabledShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);

  useEffect(() => {
    setShopList(shop.disabledShopList);
  }, [shop.disabledShopList]);

  const applySearch = () => {
    let listForSearch = shop.disabledShopList;
    if (searchInput) {
      listForSearch = listForSearch.filter(
        (item) =>
          item.shop_name
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
      setShopList(listForSearch);
    } else {
      setShopList(shop.disabledShopList);
    }
  };
  useEffect(() => {
    applySearch();
  }, [searchInput]);

  return (
    <Layout>
      <RestaurentNavbar
        status="disabledshop"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="row">
        <div className="col-12 mt-4">
          <RestaurentTable shops={shopList} />
        </div>
      </div>
    </Layout>
  );
};

export default DisablesShopPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
