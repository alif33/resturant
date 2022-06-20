import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../../../__lib__/helpers/HttpService";

const SingleProduct = ({ productId }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    productId &&
      getData(`admin/product/${productId}`).then((res) => setProduct(res));
  }, [productId]);

  console.log(product);

  return (
    <div className="card">
      {product && (
        <div className="card-body">
          <h1>Product page {productId}</h1>
          <div className="row">
            <div className="col-md-3">
              <img src={product?.image} alt="asjf" className="w-100" />
            </div>
          </div>
          <h1>
            <b>Product name:</b> {product?.product_name}
          </h1>
          <p>
            <b>Description:</b> {product?.description}
          </p>

          <div className="row">
            <div className="col-md-6">
              <p>
                <b>Options: </b> {product?.options}
              </p>
              <h4>Property: </h4>
              <p>
                <b>Limit: </b> {product?.property?.limit}
              </p>
              <p>
                <b>Property Name : </b> {product?.property?.property_name}
              </p>
              <p>
                <b>Property options : </b> {product?.property?.options}
              </p>
              <h4>Selection</h4>
              <p>
                <b>Name : </b> {product?.property?.selection.name}
              </p>
              <p>
                <b>Large Price : </b> {product?.property?.selection.large_price}
              </p>
              <p>
                <b>XLarge Price : </b>{" "}
                {product?.property?.selection.xlarge_price}
              </p>
            </div>
            <div className="col-md-6">
              {/* <b>Shop Name:</b> {product?.shop.shop_name} */}

              <p>
                <b>Cata Price: </b> {product?.catalog?.product_type.cata_price}
              </p>

              <p>
                <b>Cata Title: </b> {product?.catalog?.product_type.cata_title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
