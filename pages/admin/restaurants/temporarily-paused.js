import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../src/admin/layout/Layout";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { setTemporaryPausedShops } from "../../../store/shop/actions";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const TemporarilyShopPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [shopList, setShopList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTemporaryPausedShops());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);

  useEffect(() => {
    setShopList(shop.temporaryPausedShopList);
  }, [shop.temporaryPausedShopList]);

  const applySearch = () => {
    let listForSearch = shop.temporaryPausedShopList;
    if (searchInput) {
      listForSearch = listForSearch.filter(
        (item) =>
          item.shop_name
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
      setShopList(listForSearch);
    } else {
      setShopList(shop.temporaryPausedShopList);
    }
  };
  useEffect(() => {
    applySearch();
  }, [searchInput]);

  return (
    <Layout>
      <RestaurentNavbar status="pausedshops" />
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

export default TemporarilyShopPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
