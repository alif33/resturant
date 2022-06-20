import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout2 } from "../../../../../src/admin/layout/Layout";
import ProductPage from "../../../../../src/admin/product/products/Product";
import { getData } from "../../../../../__lib__/helpers/HttpService";
import { adminAuth } from "../../../../../__lib__/helpers/requireAuthentication";

const ProductsPage = () => {
  
  const router = useRouter();
  const { shopId } = router.query;

  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
          <ProductPage shopId={shopId} />
        </div>
      </div>
    </Layout2>
  );
};

export default ProductsPage;

export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});
