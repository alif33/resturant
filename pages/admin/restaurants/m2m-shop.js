import React, { useEffect } from 'react';
import { setM2mShop } from '../../../store/shop/actions';
import { useDispatch, useSelector } from "react-redux";
import Layout from '../../../src/admin/layout/Layout';
import RestaurentNavbar from '../../../src/admin/restaurent/restaurentNavbar/RestaurentNavbar';
import RestaurentTable from '../../../src/admin/restaurent/restaurentTable/RestaurentTable';

const M2mShopPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(setM2mShop());
    }, [dispatch]);
  
    const { shop } = useSelector((state) => state);
    return (
        <Layout>
        <RestaurentNavbar status="m2mshops"  />
        <div className="row">
          <div className="col-12 mt-4">
            <RestaurentTable shops={shop.m2mShopList} />
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