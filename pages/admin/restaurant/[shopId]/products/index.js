import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout2 } from "../../../../../src/admin/layout/Layout";
import ProductPage from "../../../../../src/admin/product/products/Product";
import { getData } from "../../../../../__lib__/helpers/HttpService";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const router = useRouter();
  const { shopId } = router.query;

  useEffect(() => {
    if (shopId) {
      getData(`products/${shopId}`).then((res) => setProducts(res));
    }
  }, [shopId]);

  return (
    <Layout2 shopId={shopId}>
      <div className="row">
        <div className="col-12">
          <ProductPage shopId={shopId} products={products} />
        </div>
      </div>
    </Layout2>
  );
};

export default ProductsPage;
