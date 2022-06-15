import { useRouter } from "next/router";
import { Layout2 } from "../../../../src/admin/layout/Layout";
import ProductPage from "../../../../src/admin/product/products/Product";

const ProductsPage = () => {
  const router = useRouter();
  const { shopId } = router.query;
  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
          <ProductPage />
        </div>
      </div>
    </Layout2>
  );
};

export default ProductsPage;
