import Link from "next/link";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import toast from "react-hot-toast";
import { ImCopy } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import Cookies from "universal-cookie";
import {
  authPost,
  deleteData,
  getData,
} from "../../../../__lib__/helpers/HttpService";
import AddProductDropdown from "../../../components/Dropdown/AddProductDropdown";
import UpdateDropdown from "../../../components/Dropdown/UpdateDropdown";
import MenuIcon2 from "../../../components/svg/MenuIcon2";
import EditModal from "../../../modal/editModal/EditModal";

const ProductPage = ({ shopId }) => {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  const [shop, setShop] = useState({});
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();
  const token = cookies.get("_admin");
  let noProduct = <li>There Is No Product</li>;

  useEffect(() => {
    setTimeout(() => {
      noProduct = <li>Loading...</li>;
    }, 300);
  }, []);

  useEffect(() => {
    shopId && getData(`admin/shop/${shopId}`).then((res) => setShop(res));
  }, [shopId]);

  useEffect(() => {
    if (shopId) {
      getData(`products/${shopId}`).then((res) => setProducts(res));
    }
  }, [shopId, load]);

  const copyHanle = (id) => {
    setLoading(true);
    authPost(`admin/product/${id}`, {}, token).then((res) => {
      if (res.success) {
        setLoad(!load);
        toast.success(res.message);
      }
      setLoading(false);
    });
  };

  const deleteHanle = (id) => {
    setLoading(true);
    deleteData(`admin/product/${id}`, token).then((res) => {
      if (res.success) {
        setLoad(!load);
        toast.success(res.message);
      }
      setLoading(false);
    });
  };

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
                  {products?.length === 0 && noProduct}

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
                            <EditModal
                              productId={product._id}
                              setLoad={setLoad}
                              load={load}
                            />
                            {loading ? (
                              <button
                                type="button"
                                className="btn btn-info px-4"
                              >
                                {/* style={{ width: "100px" }} */}
                                <div
                                  className="spinner-border text-light"
                                  style={{ height: "18px", width: "18px" }}
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              </button>
                            ) : (
                              <button
                                onClick={() => copyHanle(product._id)}
                                className="btn btn-info"
                                style={{ width: "100px" }}
                              >
                                <ImCopy /> Copy
                              </button>
                            )}
                            {loading ? (
                              <button
                                type="button"
                                style={{ width: "100px" }}
                                className="btn btn-danger px-4"
                              >
                                <div
                                  className="spinner-border text-light"
                                  style={{ height: "18px", width: "18px" }}
                                  role="status"
                                >
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              </button>
                            ) : (
                              <button
                                onClick={() => deleteHanle(product._id)}
                                className="btn btn-danger"
                                style={{ width: "100px" }}
                              >
                                <MdDelete /> Delete
                              </button>
                            )}
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
