import React, { useEffect, useState } from "react";
import { setM2mShop } from "../../../store/shop/actions";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../src/admin/layout/Layout";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const M2mShopPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [shopList, setShopList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setM2mShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);

  useEffect(() => {
    setShopList(shop.m2mShopList);
  }, [shop.m2mShopList]);

  const applySearch = () => {
    let listForSearch = shop.m2mShopList;
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
      setShopList(shop.m2mShopList);
    }
  };
  useEffect(() => {
    applySearch();
  }, [searchInput]);

  return (
    <Layout>
      <RestaurentNavbar
        status="m2mshops"
      
      />
      <div className="row">
        <div className="col-12 mt-4">
          <RestaurentTable shops={shopList}   searchInput={searchInput}
        setSearchInput={setSearchInput}/>
        </div>
      </div>
    </Layout>
  );
};

export default M2mShopPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
