import React, { useEffect } from "react";
import Layout from "../../../src/admin/layout/Layout";
import RestaurentNavbar from "../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { useDispatch, useSelector } from "react-redux";
import { setLiveShop } from "../../../store/shop/actions";
import { adminAuth } from "../../../__lib__/helpers/requireAuthentication";

const LiveShopPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLiveShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);
  return (
    <Layout>
      <RestaurentNavbar
        status="liveshop"
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="row">
        <div className="col-12 mt-4">
          <RestaurentTable shops={shop.liveShopList} />
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
