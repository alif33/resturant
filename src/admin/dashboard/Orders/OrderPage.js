import { ImSearch } from "react-icons/im";
import OrdersMenu from "./OrdersMenu";
import OrderTabel from "./OrderTabel";

const OrderPage = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>Angelo&apos;s Stuffed Pizza</h2>
        <div className="mt-5">
          <h2>Orders</h2>
          <p>2021-12-08 17-57-23 EST</p>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="order-page-filter">
              <select>
                <option value="">Filter</option>
              </select>
              <input type="text" placeholder="" />
              <button>
                <ImSearch />
              </button>
            </div>
          </div>
        </div>
        <OrdersMenu />
        <OrderTabel />
      </div>
    </div>
  );
};

export default OrderPage;
