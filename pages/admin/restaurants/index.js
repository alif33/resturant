import Layout from "../../../src/admin/layout/Layout";
import RestaurentTable from "../../../src/admin/restaurent/restaurentTable/RestaurentTable";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShop } from "../../../store/shop/actions";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const Restaurants = () => {
  const [searchInput, setSearchInput] = useState("");
  const [shopList, setShopList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);

  useEffect(() => {
    setShopList(shop.shopList);
  }, [shop.shopList]);

  const applySearch = () => {
    setShopList(shop.shopList);
    let listForSearch = shopList;
    console.log(searchInput);
    listForSearch = listForSearch.filter(
      (item) =>
        item.shop_name
          .toLowerCase()
          .search(searchInput.toLowerCase().trim()) !== -1
    );
    setShopList(listForSearch);
  };
  useEffect(() => {
    applySearch();
  }, [searchInput]);

  console.log(shopList);

  return (
    <Layout>
      <RestaurentNavbar
        status="allshop"
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

export default Restaurants;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
