import React, { useEffect } from 'react';
import Layout from '../../src/admin/layout/Layout';
import RestaurentNavbar from '../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar';
import RestaurentTable from '../../src/admin/restaurent/restaurentTable/RestaurentTable';
import { useDispatch, useSelector } from "react-redux";
import { setDisabledShop } from '../../store/shop/actions';

const DisablesShopPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setDisabledShop());
    }, [dispatch]);
  
    const { shop } = useSelector((state) => state);

    return (
        <Layout>
        <RestaurentNavbar status="disabledshop"/>
        <div className="row">
          <div className="col-12 mt-4">
            <RestaurentTable shops={shop.disabledShopList} />
          </div>
        </div>
      </Layout>
    );
};

export default DisablesShopPage;