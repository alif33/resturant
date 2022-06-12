import Layout from "../../src/admin/layout/Layout";
import RestaurentTable from "../../src/admin/restaurent/restaurentTable/RestaurentTable";
import RestaurentNavbar from "../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShop } from "../../store/shop/actions";

const Restaurants = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShop());
  }, [dispatch]);

  const { shop } = useSelector((state) => state);

  return (
    <Layout>
      <RestaurentNavbar />
      <div className="row">
        <div className="col-12 mt-4">
          <RestaurentTable shops={shop.shopList} />
        </div>
      </div>
    </Layout>
  );
};

export default Restaurants;
