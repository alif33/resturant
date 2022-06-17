import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../../../__lib__/helpers/HttpService";

const SingleProduct = ({ productId }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData(`products`).then((res) =>
      setProduct(res.filter((pro) => pro._id === productId))
    );
  }, [productId]);

  console.log(product);

  return (
    <div className="card">
      <div className="card-body">
        <h1>Product page {productId}</h1>
        <div className="row">
          <div className="col-md-3">
            <img src={product[0]?.image} alt="asjf" className="w-100" />
          </div>
        </div>
        <h1>
          <b>Product name:</b> {product[0]?.product_name}
        </h1>
        <p>
          <b>Description:</b> {product[0]?.description}
        </p>

        <div className="row">
          <div className="col-md-6">
            <p>
              <b>category Name:</b> {product[0]?.category.categoryName}
            </p>

          </div>
          <div className="col-md-6">
            <p>
              <b>Shop Name:</b> {product[0]?.shop.shop_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
