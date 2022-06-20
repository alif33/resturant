import { useRouter } from "next/router";
import React from "react";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import AddProduct from "../../../../src/admin/product/addProduct/AddProduct";
import { adminAuth } from "../../../../__lib__/helpers/requireAuthentication";

const ProductAddPage = () => {
    const router = useRouter();
    const { shopId } = router?.query;
  return (
    <Layout2 shopId={shopId}>
      {/* <Navbar status="Payments" shopId={shopId} /> */}
      <div className="row mt-4">
        <div className="col-12">
          <AddProduct shopId={shopId} />
        </div>
      </div>
    </Layout2>
  );
};

export default ProductAddPage;


export const getServerSideProps = adminAuth((context) => {
  return {
    props: {},
  };
});