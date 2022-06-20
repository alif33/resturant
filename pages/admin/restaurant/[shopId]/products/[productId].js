import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../../src/admin/layout/Layout";
import SingleProduct from "../../../../../src/admin/product/singleProduct/SingleProduct";
import {adminAuth} from "../../../../../__lib__/helpers/requireAuthentication";


const SingleProductPage = () => {
  const router = useRouter();
  const { productId, shopId } = router.query;
  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
          <SingleProduct productId={productId}/>
        </div>
      </div>
    </Layout2>
  );
};

export default SingleProductPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
