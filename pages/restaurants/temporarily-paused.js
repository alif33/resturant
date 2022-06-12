import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../src/admin/layout/Layout";
import RestaurentNavbar from "../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar";
import RestaurentTable from "../../src/admin/restaurent/restaurentTable/RestaurentTable";
import { setM2mShop } from "../../store/shop/actions";

const TemporarilyShopPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setM2mShop());
    }, [dispatch]);
  
    const { shop } = useSelector((state) => state);
    return (
        <Layout>
        <RestaurentNavbar status="pausedshops" />
        <div className="row">
          <div className="col-12 mt-4">
            <RestaurentTable shops={shop.temporaryPausedShopList} />
          </div>
        </div>
      </Layout>
    );
};

export default TemporarilyShopPage;