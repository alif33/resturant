import React, { useEffect, useState } from "react";
import AddProductDropdown from "../../../components/Dropdown/AddProductDropdown";
import EditModal from "../../../modal/editModal/EditModal";
import UpdateDropdown from "../../../components/Dropdown/UpdateDropdown";
import MenuIcon2 from "../../../components/svg/MenuIcon2";
import { ImCopy } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DropDreag from "./ProductPage";
import { getData } from "../../../../__lib__/helpers/HttpService";

const ProductPage = ({ products, shopId }) => {
  const [shop, setShop] = useState({});
  var noProduct = <li>there is no product</li>;

  useEffect(() => {
    setInterval(() => {
      noProduct = <li>Loading...</li>;
    }, 300);
  }, []);

  useEffect(() => {
    shopId && getData(`admin/shop/${shopId}`).then((res) => setShop(res));
  }, [shopId]);

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Menu: {shop?.shop_name}</h1>
          <UpdateDropdown />
        </div>
        <div className="border-bottom my-3"></div>
        <div className="d-flex align-items-center justify-content-end">
          <AddProductDropdown />
        </div>
        <h5 className="card-title">Striped Rows</h5>

        {/* <DropDreag /> */}

        <DragDropContext>
          <div className="product-table">
            <Droppable droppableId="dropDreag">
              {(provided) => (
                <ul
                  id="dropDreag"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {products.length === 0 && noProduct}

                  {products?.map((product) => (
                    <Draggable
                      draggableId={product._id}
                      key={product._id}
                      index={0}
                    >
                      {(provided) => (
                        <li
                          id={product._id}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="product-name">
                            <span>
                              <MenuIcon2 />
                            </span>
                            <Link
                              href={`/admin/restaurant/${shopId}/products/${product._id}`}
                            >
                              <a>{product._id}</a>
                            </Link>
                            <h4>{product.product_name}</h4>
                          </div>
                          <div className="product-action">
                            <EditModal productId={product._id} />
                            <button className="btn btn-info">
                              <ImCopy /> Copy
                            </button>
                            <button className="btn btn-danger">
                              <MdDelete /> Delete
                            </button>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                </ul>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default ProductPage;
